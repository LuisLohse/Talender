var subs = [
  document.getElementById("main_1"),
  document.getElementById("main_2"),
  document.getElementById("main_3"),
  document.getElementById("main_4")
]
var navs = [
  document.querySelector(".nav_element_1"),
  document.querySelector(".nav_element_2"),
  document.querySelector(".nav_element_3"),
  document.querySelector(".nav_element_4")
]

for (let nav of navs) {
  nav.addEventListener("mouseenter", () => {
    if (nav.style.color != "var(--red)") {
      nav.style.color = "var(--blue)"
    }
  })

  nav.addEventListener("mouseleave", () => {
    if (nav.style.color != "var(--red)") {
      nav.style.color = "var(--black)"
    }
  })
}

for (let resp_nav of resp_nav_links) {
  resp_nav.addEventListener("mouseenter", () => {
    if (resp_nav.style.color != "var(--red)") {
      resp_nav.style.color = "var(--blue)"
    }
  })

  resp_nav.addEventListener("mouseleave", () => {
    if (resp_nav.style.color != "var(--red)") {
      resp_nav.style.color = "var(--white)"
    }
  })
}

function loadSub(num) {
  endNav()

  if (num == 1) {
    subs[0].style.transform = "translateX(0%)"
    subs[1].style.transform = "translateX(100%)"
    subs[2].style.transform = "translateX(200%)"
    subs[3].style.transform = "translateX(300%)"
  } else if (num == 2) {
    subs[0].style.transform = "translateX(-100%)"
    subs[1].style.transform = "translateX(0%)"
    subs[2].style.transform = "translateX(100%)"
    subs[3].style.transform = "translateX(200%)"
  } else if (num == 3) {
    subs[0].style.transform = "translateX(-200%)"
    subs[1].style.transform = "translateX(-100%)"
    subs[2].style.transform = "translateX(0%)"
    subs[3].style.transform = "translateX(100%)"
  } else if (num == 4) {
    subs[0].style.transform = "translateX(-300%)"
    subs[1].style.transform = "translateX(-200%)"
    subs[2].style.transform = "translateX(-100%)"
    subs[3].style.transform = "translateX(0%)"
  } else {
    console.log("OnPageLoad failed, return to basic")
    subs[0].style.transform = "translateX(0%)"
    subs[1].style.transform = "translateX(100%)"
    subs[2].style.transform = "translateX(200%)"
    subs[3].style.transform = "translateX(300%)"
  }

  paintNav(num)
}

function paintNav(num) {
  for (let nav of navs) {
    nav.style.color = "var(--black)"
  }
  for (let resp_nav of resp_nav_links) {
    resp_nav.style.color = "var(--white)"
  }

  navs[num - 1].style.color = "var(--red)"
  resp_nav_links[num - 1].style.color = "var(--red)"
}
