var timeStamp = document.getElementById("timeStamp_container")

setInterval(() => {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  // hours = 18
  // minutes = 0

  let offSet = (hours * 140) + (minutes * 2.33) + 15
  timeStamp.style.top = offSet + "px"
}, 10000)

once: {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let offSet = (hours * 140) + (minutes * 2.33) + 15
  timeStamp.style.top = offSet + "px"
}
