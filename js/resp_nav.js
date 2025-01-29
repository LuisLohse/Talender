var nav_button = document.getElementById("nav_resp_burger_container")
var fake_click_field = document.getElementById("resp_nav_nav_overlay_clickField")
var burger_stripes = [
  document.getElementById("burger_stripe_1"),
  document.getElementById("burger_stripe_2"),
  document.getElementById("burger_stripe_3")
]
var f_burger_stripes = [
  document.getElementById("f_burger_stripe_1"),
  document.getElementById("f_burger_stripe_2"),
  document.getElementById("f_burger_stripe_3")
]
var resp_nav_links = [
  document.getElementById("resp_nav_link_1"),
  document.getElementById("resp_nav_link_2"),
  document.getElementById("resp_nav_link_3"),
  document.getElementById("resp_nav_link_4"),
]

var resp_nav_screen = document.getElementById("resp_nav")

var navState = "ready"


nav_button.addEventListener("click", initMobileNav)
fake_click_field.addEventListener("click", initMobileNav)

function initMobileNav() {
  if (navState == "ready") {
    navState = "inUse"
    startNav()
  } else if (navState == "finished") {
    navState = "inUse"
    endNav()
  }
}

function startNav() {
  // animate Stripes to converge
  burger_stripes[0].style.top = "calc(50% - 2.5px)"
  burger_stripes[1].style.top = "calc(50% - 2.5px)"
  burger_stripes[2].style.bottom = "calc(50% - 2.5px)"

  f_burger_stripes[0].style.top = "calc(50% - 2.5px)"
  f_burger_stripes[1].style.top = "calc(50% - 2.5px)"
  f_burger_stripes[2].style.bottom = "calc(50% - 2.5px)"

  // animate Stripes to form X
  setTimeout(() => {
    burger_stripes[0].style.transform = "rotate(45deg)"
    burger_stripes[1].style.transform = "rotate(45deg)"
    burger_stripes[2].style.transform = "rotate(-45deg)"

    f_burger_stripes[0].style.transform = "rotate(45deg)"
    f_burger_stripes[1].style.transform = "rotate(45deg)"
    f_burger_stripes[2].style.transform = "rotate(-45deg)"

    // Let resp_nav get display:flex
    setTimeout(() => {
      resp_nav_screen.style.display = "flex"
    }, 1)

    // animate Darkening of Screen and management of burger button
    setTimeout(() => {
      resp_nav_screen.style.opacity = "1"

      setTimeout(() => {

        resp_nav_links[3].style.opacity = "1"
        setTimeout(() => {
          resp_nav_links[2].style.opacity = "1"
          setTimeout(() => {
            resp_nav_links[1].style.opacity = "1"
            setTimeout(() => {
              resp_nav_links[0].style.opacity = "1"

              // Change Nav state after all action performed
              setTimeout(() => {
                navState = "finished"
              }, 500)
            }, 150)
          }, 150)
        }, 150)

      }, 400)
    }, 300)
  }, 600)
}

function endNav() {
  resp_nav_screen.style.opacity = "0"

  burger_stripes[0].style.transform = "rotate(0deg)"
  burger_stripes[1].style.transform = "rotate(0deg)"
  burger_stripes[2].style.transform = "rotate(0deg)"

  f_burger_stripes[0].style.transform = "rotate(0deg)"
  f_burger_stripes[1].style.transform = "rotate(0deg)"
  f_burger_stripes[2].style.transform = "rotate(0deg)"

  setTimeout(() => {
    burger_stripes[0].style.top = "0%"
    burger_stripes[1].style.top = "calc(50% - 2.5px)"
    burger_stripes[2].style.bottom = "0%"

    f_burger_stripes[0].style.top = "0%"
    f_burger_stripes[1].style.top = "calc(50% - 2.5px)"
    f_burger_stripes[2].style.bottom = "0%"
  }, 600)

  // Reset all conditions to base value
  setTimeout(() => {
    resp_nav_screen.style.display = "none"
    resp_nav_links[0].style.opacity = "0"
    resp_nav_links[1].style.opacity = "0"
    resp_nav_links[2].style.opacity = "0"
    resp_nav_links[3].style.opacity = "0"
  }, 500)

  setTimeout(() => {
    navState = "ready"
  }, 1400)
}
