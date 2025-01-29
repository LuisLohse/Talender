var initScroll = {
  calender: document.querySelector("#calender"),
  time: {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  },
  scrollPX: 0
}

initScroll.scrollPX = initScroll.time.hours * 140

if (initScroll.time.minutes > 29) {
  initScroll.scrollPX += 70
}

// initScroll.calender.scrollTo(0, initScroll.scrollPX - 70)
initScroll.calender.scrollTo({
  left: 0,
  top: initScroll.scrollPX - 70,
})

// console.log(initScroll.time)
