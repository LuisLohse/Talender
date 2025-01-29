var button_add_task = document.querySelector('#add_task')
var task_plus1 = document.querySelector('#task_plus1')
var task_adder_container = document.querySelector('#task_adder_container')
var task_body = document.querySelector('#task_body')
var task_adder_add = document.querySelector('.task_adder_add')

button_add_task.addEventListener('click', ()=>{
  if (task_adder_container.style.height == "0px") {
    openTaskAdder()
  }else {
    closeTaskAdder()
  }
}
)

function openTaskAdder() {
  change_height:{
     task_adder_container.style.height = "100px"
     task_body.style.height = "calc(93%-100px)"
  }

  change_plus: {
    task_plus1.style.transform = "scaleY(0)"
  }

  focus: {
    setTimeout(() => {
     document.querySelector('.adder_input_title').focus()
   }, 10)
  }
}

function closeTaskAdder() {
  change_height:{
     task_adder_container.style.height = "0px"
     task_body.style.height = "93%"
  }

  change_plus: {
    task_plus1.style.transform = "scaleY(1)"
  }

  reset_input: {
    setTimeout(() => {
      document.querySelector(".adder_input_title").value = ""
      document.querySelector('.adder_input_title').blur()
    }, 500)
  }
}

task_adder_add.addEventListener('click', createNewTask)
document.addEventListener('keydown',(e)=> {
  if (e.keyCode == 13 &&  task_adder_container.style.height == "100px") {
    createNewTask()
  } else if (e.keyCode == 32) {
    openTaskAdder()
  } else if (e.keyCode == 27) {
    closeTaskAdder()
  } else if (e.keyCode == 9) {
    e.preventDefault()

    //Scroll to apropriate position
    let iScroll = {
      calender: document.querySelector("#calender"),
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
      scrollPX: 0
    }

    iScroll.scrollPX = iScroll.time.hours * 140

    if (iScroll.time.minutes > 29) {
      iScroll.scrollPX += 70
    }

    iScroll.calender.scrollTo({
      left: 0,
      top: iScroll.scrollPX - 70,
      behavior: "smooth"
    })
  }
})

function createNewTask() {
  let title = document.querySelector('.adder_input_title').value
  if (title.trim() == "") {
    return
  }
  new Task(title, 30, colorselector.design_backgroundcolor)
  closeTaskAdder()
  document.querySelector('.adder_input_title').value = ""
}

// CHANGE COLOR //

var colorselector = {
  container: document.querySelector('.colorselector'),
  colors: [
    document.querySelector('.color_yellow'),
    document.querySelector('.color_green'),
    document.querySelector('.color_pink'),
    document.querySelector('.color_blue'),
  ],
  design: document.querySelector('#task_adder_design'),
  design_backgroundcolor: "blue",
  as_state: "closed",
}

colorselector.container.addEventListener('click',()=>{
  if (colorselector.as_state == "closed") {
    for (let x in colorselector.colors) {
      colorselector.colors[x].style.right = x*25 + "px"
    }
    colorselector.as_state = "open"
  }else {
    for (let x in colorselector.colors) {
      colorselector.colors[x].style.right = "0px"
    }
    colorselector.as_state = "closed"
  }
})

colorselector.colors[0].style.zIndex = "47"
colorselector.colors[1].style.zIndex = "47"
colorselector.colors[2].style.zIndex = "47"
colorselector.colors[3].style.zIndex = "48"

colorselector.colors[0].addEventListener('click', ()=>{
  colorselector.colors[0].style.zIndex = "47"
  colorselector.colors[1].style.zIndex = "47"
  colorselector.colors[2].style.zIndex = "47"
  colorselector.colors[3].style.zIndex = "48"
  colorselector.design.style.background = "linear-gradient(27deg, rgba(252,246,189,1) 0%, rgba(255,245,140,1) 100%)"
  colorselector.colors[0].style.zIndex = "51"
  colorselector.design_backgroundcolor = "yellow"
})

colorselector.colors[1].addEventListener('click', ()=>{
  colorselector.colors[0].style.zIndex = "47"
  colorselector.colors[1].style.zIndex = "47"
  colorselector.colors[2].style.zIndex = "47"
  colorselector.colors[3].style.zIndex = "48"
  colorselector.design.style.background = "linear-gradient(27deg, rgba(208,244,222,1) 0%, rgba(115,249,167,1) 100%)"
  colorselector.colors[1].style.zIndex = "51"
  colorselector.design_backgroundcolor = "green"
})

colorselector.colors[2].addEventListener('click', ()=>{
  colorselector.colors[0].style.zIndex = "47"
  colorselector.colors[1].style.zIndex = "47"
  colorselector.colors[2].style.zIndex = "47"
  colorselector.colors[3].style.zIndex = "48"
  colorselector.design.style.background = "linear-gradient(27deg, rgba(255,185,217,1) 0%, rgba(255,153,200,1) 100%)"
  colorselector.colors[2].style.zIndex = "51"
  colorselector.design_backgroundcolor = "pink"
})

colorselector.colors[3].addEventListener('click', ()=>{
  colorselector.colors[0].style.zIndex = "47"
  colorselector.colors[1].style.zIndex = "47"
  colorselector.colors[2].style.zIndex = "47"
  colorselector.colors[3].style.zIndex = "48"
  colorselector.design.style.background = "linear-gradient(27deg, rgba(205,236,251,1) 0%, rgba(169,222,249,1) 30%)"
  colorselector.colors[3].style.zIndex = "51"
  colorselector.design_backgroundcolor = "blue"
})
