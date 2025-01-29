class Task {
  title = "title"
  dedicated_duration = "30"
  start_time = ""
  is_being_dragged = false
  is_timing_increasing = false
  is_in_calendar = false
  main_div = ""
  calender_div;
  calender_task;
  isDeleted = false
  color_choose_state = "closed"
  current_color = "blue"
  dragger;
  calender_task_base_height
  is_being_repositioned = false
  is_finished = false

  constructor(title, duration = 30, color = "blue", is_in_calendar = false, start_time, is_finished = false) {
    this.title = title
    this.dedicated_duration = duration
    this.current_color = color
    this.is_in_calendar = is_in_calendar
    this.start_time = start_time
    this.is_finished = is_finished



    let task_div = document.createElement("div")
    this.main_div = task_div

    let task_title = document.createElement("div")
    let task_colorselector = document.createElement("div")
    let task_close = document.createElement("div")
    let task_beam = document.createElement("div")
    let task_color_pink = document.createElement("div")
    let task_color_yellow = document.createElement("div")
    let task_color_green = document.createElement("div")
    let task_color_blue = document.createElement("div")

    let checkmark_container = document.createElement("div")
    let checkmark = document.createElement("div")
    let pos_check = document.createElement("div")
    let check1 = document.createElement("div")
    let check2 = document.createElement("div")

    task_div.className = "task"
    task_title.className = "task_title"
    task_colorselector.className = "colorselector"
    task_close.className = "task_close"
    task_beam.className = "task_beam"
    task_color_blue.className = "color_blue"
    task_color_pink.className = "color_pink"
    task_color_green.className = "color_green"
    task_color_yellow.className = "color_yellow"
    checkmark_container.className = "checkmark_container"
    checkmark.className = "checkmark"
    pos_check.className = "pos_check"
    check1.className = "check1"
    check2.className = "check2"

    task_color_yellow.style.right = "0px"

    task_title.innerText = this.title

    task_colorselector.appendChild(task_color_blue)
    task_colorselector.appendChild(task_color_pink)
    task_colorselector.appendChild(task_color_green)
    task_colorselector.appendChild(task_color_yellow)
    task_close.appendChild(task_beam)
    task_div.appendChild(task_title)
    task_div.appendChild(task_colorselector)
    task_div.appendChild(task_close)
    document.querySelector("#task_body").appendChild(task_div)

    pos_check.appendChild(check1)
    pos_check.appendChild(check2)
    checkmark.appendChild(pos_check)
    checkmark_container.appendChild(checkmark)
    task_div.appendChild(checkmark_container)


    this.chooseColor(color, true)


    task_close.addEventListener('click', () => {
    this.delete()
    })

    task_colorselector.addEventListener('click', ()=>{
      this.changeColor()
    })


    task_color_blue.addEventListener('click', ()=>{
      this.chooseColor("blue")
    })

    task_color_pink.addEventListener('click', ()=>{
      this.chooseColor("pink")
    })

    task_color_green.addEventListener('click', ()=>{
      this.chooseColor("green")
    })

    task_color_yellow.addEventListener('click', ()=>{
      this.chooseColor("yellow")
    })



    task_div.addEventListener("mousedown", (e) => {
      this.dragStart(e)
    })

    task_div.addEventListener("mouseup", (e) => {
      this.dragStop(e)
    })

    checkmark.addEventListener("click", ()=> {
      this.is_finished = !this.is_finished
      this.check()
    })

    checkmark_container.addEventListener("mouseenter", ()=> {
      if(this.is_finished == false) {
        this.main_div.querySelector('.checkmark_container').style.opacity = "1"
      }
    })

    checkmark_container.addEventListener("mouseleave", ()=> {
      if (this.is_finished == false) {
        this.main_div.querySelector('.checkmark_container').style.opacity = "0"
      }
    })

    //Set into calender if necessary
    if (is_in_calendar) {
      this.setIntoCalender(start_time)
    }

    //Check is_finished
    if (this.is_finished) {
      this.check()
    }

    tasks.push(this)
  }

  changeDuration() {

  }

  delete() {
    this.main_div.style.display = "none"
    this.isDeleted = true
  }

  changeColor() {
    if(this.color_choose_state == "closed"){
      for(let elem in this.main_div.querySelector(".colorselector").childNodes) {
        if(this.main_div.querySelector(".colorselector").childNodes[elem].style == undefined){
          continue
        }

        this.main_div.querySelector(".colorselector").childNodes[elem].style.right = elem*25 + "px"
      }

      this.color_choose_state = "open"
    } else{
      for(let elem in this.main_div.querySelector(".colorselector").childNodes) {
        if(this.main_div.querySelector(".colorselector").childNodes[elem].style == undefined){
          continue
        }
        this.main_div.querySelector(".colorselector").childNodes[elem].style.right = "0px"
      }
      this.color_choose_state = "closed"
    }
  }

  chooseColor(color, isDirect = false) {
    if(this.color_choose_state == "closed" && isDirect == false){
      return
    }
    this.main_div.querySelector(".color_green").style.zIndex = "47"
    this.main_div.querySelector(".color_blue").style.zIndex = "47"
    this.main_div.querySelector(".color_yellow").style.zIndex = "47"
    this.main_div.querySelector(".color_pink").style.zIndex = "47"

    switch (color) {
      case "blue":
        this.main_div.style.background = "linear-gradient(27deg, rgba(205,236,251,1) 0%, rgba(169,222,249,1) 30%)"
        this.main_div.querySelector(".color_blue").style.zIndex = "51"
        this.current_color = "blue"
        break;
      case "pink":
        this.main_div.querySelector(".color_pink").style.zIndex = "51"
        this.main_div.style.background = "linear-gradient(27deg, rgba(255,185,217,1) 0%, rgba(255,153,200,1) 100%)"
        this.current_color = "pink"
        break;
      case "yellow":
        this.main_div.querySelector(".color_yellow").style.zIndex = "51"
        this.main_div.style.background = "linear-gradient(27deg, rgba(252,246,189,1) 0%, rgba(255,245,140,1) 100%)"
        this.current_color = "yellow"
        break;
      case "green":
        this.main_div.querySelector(".color_green").style.zIndex = "51"
        this.main_div.style.background = "linear-gradient(27deg, rgba(208,244,222,1) 0%, rgba(115,249,167,1) 100%)"
        this.current_color = "green"
        break;
    }
  }

  dragStart(e) {

    this.main_div.style.zIndex = "5000"
    this.is_being_dragged = true
    this.main_div.style.position = "relative"
    this.main_div.style.cursor = "grab"

    let pos = {
      top: e.clientY,
      left: e.clientX
    }

    document.addEventListener("mousemove", (e) => {
      if (this.is_being_dragged) {
        this.main_div.style.top = (e.clientY - pos.top) + "px"
        this.main_div.style.left = (e.clientX - pos.left) + "px"
        this.main_div.style.opacity = ".5"
      }
    })
  }

  dragStop(e) {
    this.main_div.style.opacity = "1"
    this.main_div.style.zIndex = "1"
    this.is_being_dragged = false
    this.main_div.style.cursor = "auto"

    this.main_div.style.top = "0"
    this.main_div.style.left = "0"

    let calenderRect = calender.getBoundingClientRect()

    //Check if Dropped Box is in Calender
    if (e.clientX > calenderRect.x && e.clientX < (calenderRect.x + calenderRect.width) && e.clientY > calenderRect.y && e.clientY < (calenderRect.y + calenderRect.height)) {
      //Determine how far the calender is already scrolled in
      let startingHeight = calender.scrollTop

      let dropPoint = startingHeight + (e.clientY - calenderRect.y) - 15
      let dropNum = Math.floor(dropPoint / 70)
      let dropTime = {
        hours: Math.floor(dropNum * 30 / 60),
        minutes: (dropNum * 30) % 60,
        num: dropNum
      }
      this.setDedicatedTime(dropTime)
    }
  }

  setDedicatedTime(timeObject) {
    // console.log(timeObject.hours + ":" + timeObject.minutes + " => " + timeObject.num)
    this.calender_div = calUnits[timeObject.num]
    this.start_time = timeObject

    this.setIntoCalender(timeObject)
  }

  setIntoCalender(time) {
    let calender_div = {
      main: document.createElement("div"),
      top: document.createElement("div"),
      title: document.createElement("span"),
      close: document.createElement("div"),
      close_beam: [
        document.createElement("div"),
        document.createElement("div")
      ],
      check_contain: document.createElement("div"),
      check: document.createElement("div"),
      check_beam: [
        document.createElement("div"),
        document.createElement("div")
      ],
      bottom: document.createElement("div"),
      arrow_cont: document.createElement("div"),
      arrows: [
        document.createElement("div"),
        document.createElement("div")
      ]
    }

    //Set class names
    calender_div.main.className = "task_in_calender"
    calender_div.top.className = "task_in_calender_top"

    calender_div.title.className = "tic_title"

    calender_div.check_contain.className = "tic_check_contain"
    calender_div.check.className = "tic_check"
    calender_div.check_beam[0].className = "tic_check_beam_1"
    calender_div.check_beam[1].className = "tic_check_beam_2"

    calender_div.close.className = "tic_close"
    calender_div.close_beam[0].className = "tic_close_beam_1"
    calender_div.close_beam[1].className = "tic_close_beam_2"

    calender_div.bottom.className = "task_in_calender_bottom"
    calender_div.arrow_cont.className = "task_in_cal_arrow"
    calender_div.arrows[0].className = "tic_beam_1"
    calender_div.arrows[1].className = "tic_beam_2"



    //Set apropriate color
    switch (this.current_color) {
      case "blue":
        calender_div.main.style.background = "linear-gradient(27deg, rgba(205,236,251,1) 0%, rgba(169,222,249,1) 30%)"
        break;
      case "pink":
        calender_div.main.style.background = "linear-gradient(27deg, rgba(255,185,217,1) 0%, rgba(255,153,200,1) 100%)"
        break;
      case "yellow":
        calender_div.main.style.background = "linear-gradient(27deg, rgba(252,246,189,1) 0%, rgba(255,245,140,1) 100%)"
        break;
      case "green":
        calender_div.main.style.background = "linear-gradient(27deg, rgba(208,244,222,1) 0%, rgba(115,249,167,1) 100%)"
        break;
    }

    calender_div.main.appendChild(calender_div.top)
    calender_div.top.appendChild(calender_div.title)
    calender_div.top.appendChild(calender_div.close)
    calender_div.check_contain.appendChild(calender_div.check)
    calender_div.top.appendChild(calender_div.check_contain)



    calender_div.close.appendChild(calender_div.close_beam[0])
    calender_div.close.appendChild(calender_div.close_beam[1])

    calender_div.check.appendChild(calender_div.check_beam[0])
    calender_div.check.appendChild(calender_div.check_beam[1])

    calender_div.main.appendChild(calender_div.bottom)
    calender_div.bottom.appendChild(calender_div.arrow_cont)
    calender_div.arrow_cont.appendChild(calender_div.arrows[0])
    calender_div.arrow_cont.appendChild(calender_div.arrows[1])

    calender_div.title.innerText = this.title

    //Change style for check
    if (this.is_finished) {
      calender_div.check_contain.style.background = "linear-gradient(135deg, rgba(157,232,186,1) 21%, rgba(255,255,255,0) 63%)"
      calender_div.check_contain.style.opacity = "1"
    }

    //Event Listener for hovering over check
    calender_div.check_contain.addEventListener("mouseenter", () => {
      if (this.is_finished) {

      } else {
        this.calender_task.querySelector(".tic_check_contain").style.opacity = "1"
      }
    })

    calender_div.check_contain.addEventListener("mouseleave", () => {
      if (this.is_finished) {

      } else {
        this.calender_task.querySelector(".tic_check_contain").style.opacity = "0"
      }
    })

    //Event Listener for checking
    calender_div.check.addEventListener("click", () => {
      this.is_finished = !this.is_finished
      this.check()
    })

    //Event Listener for closing
    calender_div.close.addEventListener("click", () => {
      calender_div.main.style.display = "none"

      this.main_div.style.display = "flex"

      this.is_in_calendar = false
    })

    //Event Listener for increasing time
    calender_div.bottom.addEventListener("mousedown", (e) => {
      this.inc_timeStart(e)
    })

    calender_div.bottom.addEventListener("mouseup", (e) => {
      this.inc_timeStop(e)
    })

    //Event Listener for repositioning in calendar
    calender_div.top.addEventListener("mousedown", (e) => {
      this.repositionStart(e)
    })

    calender_div.top.addEventListener("mouseup", (e) => {
      this.repositionStop(e)
    })

    calender_div.main.style.top = ((time.hours * 140) + ((time.minutes * 70) / 30) + 16) + "px"
    calender.appendChild(calender_div.main)

    this.calender_task = calender_div.main
    this.calender_task.style.height = ((this.dedicated_duration / 30) * 70) - 1 + "px"

    //Remove (hide) main div from To-Do-List
    this.main_div.style.display = "none"

    //set field var
    this.is_in_calendar = true
  }

  repositionStart(e) {
    this.calender_task.style.cursor = "grab"
    this.is_being_repositioned = true
    let pos_rel_cal = e.clientY
    let top_cal_task = Number(this.calender_task.style.top.replace("px", ""))

    document.addEventListener('mousemove', (e)=>{
      if(this.is_being_repositioned){
      this.calender_task.style.top = top_cal_task + e.clientY - pos_rel_cal + "px"
      }
    })
  }

  repositionStop(e) {
      this.calender_task.style.cursor = "auto"
    this.is_being_repositioned = false
    let x = (Number(this.calender_task.style.top.replace("px", "")) - 16) / 140
    let reposition_hours = Math.floor(x)
    let reposition_mins = Math.floor((x - reposition_hours) * 60)
    // console.log(reposition_hours + ":" + reposition_mins)

    if(reposition_mins <= 8){
      reposition_mins = 0
    }else if (reposition_mins <= 22) {
      reposition_mins = 15
    }else if (reposition_mins <= 37) {
      reposition_mins = 30
    }else if (reposition_mins <= 52) {
      reposition_mins = 45
    }else {
      reposition_mins = 60
    }
    this.calender_task.style.top = ((reposition_hours * 140) + (reposition_mins * (7 / 3)) + 16) + "px"
    this.start_time = {
      hours: reposition_hours,
      minutes: reposition_mins,
    }
  }

  inc_timeStart(e) {
    this.is_timing_increasing = true
    let baseLevel = e.clientY
    this.calender_task_base_height = this.calender_task.style.height

    document.addEventListener("mousemove", (e) => {
      if (this.is_timing_increasing) {
        let baseHeight = Number((this.calender_task_base_height).replace("px", ""))
        if ((baseHeight + (e.clientY - baseLevel)) >= ((70/30) * 10)) {
          this.calender_task.style.height = (baseHeight + (e.clientY - baseLevel)) + "px"
        }
      }
    })
  }

  inc_timeStop(e) {
    this.is_timing_increasing = false
    let varia = Number((this.calender_task.style.height).replace("px", "")) + 1
    this.dedicated_duration = Math.floor((varia / 70) * 30)

    if ((this.dedicated_duration % 15) < 8) {
      this.dedicated_duration = (Math.floor(this.dedicated_duration / 15) * 15)
    } else {
      this.dedicated_duration = (Math.ceil(this.dedicated_duration / 15) * 15)
    }

    this.calender_task.style.height = ((this.dedicated_duration * 70) / 30) + "px"
  }

  check() {
    if (this.is_finished) {
      //To-do List Task
      this.main_div.querySelector('.checkmark_container').style.opacity = "1"
      transitionGradient(this.main_div.querySelector('.checkmark_container'), "linear-gradient(135deg, rgba(50,49,49,0.8267682072829132) 0%, rgba(0,0,0,0) 63%)", "linear-gradient(135deg, rgba(157,232,186,1) 21%, rgba(255,255,255,0) 63%)", .15)

      //Calender Task
      if (!this.calender_task) {
        return
      }
      transitionGradient(this.calender_task.querySelector('.tic_check_contain'), "linear-gradient(135deg, rgba(50,49,49,0.8267682072829132) 0%, rgba(0,0,0,0) 63%)", "linear-gradient(135deg, rgba(157,232,186,1) 21%, rgba(255,255,255,0) 63%)", .15)

    } else {
      //To-do List Task
      // this.main_div.querySelector('.checkmark_container').style.background = "linear-gradient(135deg, rgba(50,49,49,0.8267682072829132) 0%, rgba(0,0,0,0) 63%)"
      transitionGradient(this.main_div.querySelector('.checkmark_container'), "linear-gradient(135deg, rgba(157,232,186,1) 21%, rgba(255,255,255,0) 63%)", "linear-gradient(135deg, rgba(50,49,49,0.8267682072829132) 0%, rgba(0,0,0,0) 63%)", .15)


      //Calender Task
      if (!this.calender_task) {
        return
      }
      transitionGradient(this.calender_task.querySelector('.tic_check_contain'), "linear-gradient(135deg, rgba(157,232,186,1) 21%, rgba(255,255,255,0) 63%)", "linear-gradient(135deg, rgba(50,49,49,0.8267682072829132) 0%, rgba(0,0,0,0) 63%)", .15)

    }
  }
}
var tasks = []
var calender = document.querySelector("#calender")
var calUnits = document.querySelectorAll(".cal_unit")

var username
var password

function logIn(){
  username = prompt("username:")
  if (username == null) {
    username = "Mustermann"
  }
  password = prompt("password:")
  checkDB(username, password)

}

logIn()
//Initial Download from server
// setTimeout(()=>{fetchFromDB(username)}, 5000)

//DEBUG! NOT FOR FINAL BUILD
setInterval(() => {
  uploadDataToDB(username, tasks)
  // console.log("auto-upload")
}, 2000)
