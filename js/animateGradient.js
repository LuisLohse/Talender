var std = document.querySelector("body")

function transitionGradient(elem = std, gradient1_txt, gradient2_txt, duration) {
  let s1 = {
    deg: "",
    color: {
      red: "",
      green: "",
      blue: "",
      alpha: ""
    },
    pos: ""
  }

  let s2 = {
    color: {
      red: "",
      green: "",
      blue: "",
      alpha: ""
    },
    pos: ""
  }

  let e1 = {
    deg: "",
    color: {
      red: "",
      green: "",
      blue: "",
      alpha: ""
    },
    pos: ""
  }

  let e2 = {
    color: {
      red: "",
      green: "",
      blue: "",
      alpha: ""
    },
    pos: ""
  }

  //Parse gradient1_txt into s1,s2
  let states = {
    preBracket: true,
    postDeg: false,
    preSecBracket: true,
    postColor11: false,
    postColor12: false,
    postColor13: false,
    postColor14: false,
    prePercent: true,
    postPercent: false,
    firstGradient: true
  }

  for (let letter of gradient1_txt) {
    if (states.firstGradient == true) {
      //First RGBA VALUE FOR S1
      if (states.preBracket == true) {

        if (letter == "(") {
          states.preBracket = false
          continue
        } else {
          continue
        }
      } else if (states.postDeg == false) {
        if (letter == "d") {
          states.postDeg = true
          s1.deg = Number(s1.deg)
          continue
        } else {
          s1.deg = s1.deg + letter
          continue
        }
      } else if (states.preSecBracket == true) {
        if (letter == "(") {
          states.preSecBracket = false
          continue
        } else {
          continue
        }
      } else if (states.postColor11 == false) {
        if (letter == ",") {
          s1.color.red = Number(s1.color.red)
          states.postColor11 = true
          continue
        } else {
          s1.color.red = s1.color.red + letter
          continue
        }
      } else if (states.postColor12 == false) {
        if (letter == ",") {
          s1.color.green = Number(s1.color.green)
          states.postColor12 = true
          continue
        } else {
          s1.color.green = s1.color.green + letter
          continue
        }
      } else if (states.postColor13 == false) {
        if (letter == ",") {
          s1.color.blue = Number(s1.color.blue)
          states.postColor13 = true
          continue
        } else {
          s1.color.blue = s1.color.blue + letter
          continue
        }
      } else if (states.postColor14 == false) {
        if (letter == ")") {
          states.postColor14 = true
          s1.color.alpha = Number(s1.color.alpha)
          continue
        } else {
          s1.color.alpha = s1.color.alpha + letter
          continue
        }
      } else if (states.prePercent == true) {
        if (letter == " ") {
          continue
        } else {
          states.prePercent = false

          s1.pos = letter
          continue
        }
      } else if (states.postPercent == false) {
        if (letter == "%") {
          s1.pos = Number(s1.pos)
          states.postPercent = true

          states = {
            preBracket: true,
            postDeg: false,
            preSecBracket: true,
            postColor11: false,
            postColor12: false,
            postColor13: false,
            postColor14: false,
            prePercent: true,
            postPercent: false,
            firstGradient: false
          }
          continue
        } else {
          s1.pos += letter
          continue
        }
      }
    } else {
      //Second RGBA VALUE FOR S2
      if (states.preSecBracket == true) {
        if (letter == "(") {
          states.preSecBracket = false
          continue
        } else {
          continue
        }
      } else if (states.postColor11 == false) {
        if (letter == ",") {
          s2.color.red = Number(s2.color.red)
          states.postColor11 = true
          continue
        } else {
          s2.color.red = s2.color.red + letter
          continue
        }
      } else if (states.postColor12 == false) {
        if (letter == ",") {
          s2.color.green = Number(s2.color.green)
          states.postColor12 = true
          continue
        } else {
          s2.color.green = s2.color.green + letter
          continue
        }
      } else if (states.postColor13 == false) {
        if (letter == ",") {
          s2.color.blue = Number(s2.color.blue)
          states.postColor13 = true
          continue
        } else {
          s2.color.blue = s2.color.blue + letter
          continue
        }
      } else if (states.postColor14 == false) {
        if (letter == ")") {
          states.postColor14 = true
          s2.color.alpha = Number(s2.color.alpha)
          continue
        } else {
          s2.color.alpha = s2.color.alpha + letter
          continue
        }
      } else if (states.prePercent == true) {
        if (letter == " ") {
          continue
        } else {
          states.prePercent = false

          s2.pos = letter
          continue
        }
      } else if (states.postPercent == false) {
        if (letter == "%") {
          s2.pos = Number(s2.pos)
          states.postPercent = true
          continue
        } else {
          s2.pos += letter

          let states = {
            preBracket: true,
            postDeg: false,
            preSecBracket: true,
            postColor11: false,
            postColor12: false,
            postColor13: false,
            postColor14: false,
            prePercent: true,
            postPercent: false,
            firstGradient: false
          }

          continue
        }
      }
    }
  }

  //Parse gradient2_txt into e1,e2
  let states2 = {
    preBracket: true,
    postDeg: false,
    preSecBracket: true,
    postColor11: false,
    postColor12: false,
    postColor13: false,
    postColor14: false,
    prePercent: true,
    postPercent: false,
    firstGradient: true
  }

  for (let letter of gradient2_txt) {
    if (states2.firstGradient == true) {
      //First RGBA VALUE FOR S1
      if (states2.preBracket == true) {

        if (letter == "(") {
          states2.preBracket = false
          continue
        } else {
          continue
        }
      } else if (states2.postDeg == false) {
        if (letter == "d") {
          states2.postDeg = true
          e1.deg = Number(e1.deg)
          continue
        } else {
          e1.deg = e1.deg + letter
          continue
        }
      } else if (states2.preSecBracket == true) {
        if (letter == "(") {
          states2.preSecBracket = false
          continue
        } else {
          continue
        }
      } else if (states2.postColor11 == false) {
        if (letter == ",") {
          e1.color.red = Number(e1.color.red)
          states2.postColor11 = true
          continue
        } else {
          e1.color.red = e1.color.red + letter
          continue
        }
      } else if (states2.postColor12 == false) {
        if (letter == ",") {
          e1.color.green = Number(e1.color.green)
          states2.postColor12 = true
          continue
        } else {
          e1.color.green = e1.color.green + letter
          continue
        }
      } else if (states2.postColor13 == false) {
        if (letter == ",") {
          e1.color.blue = Number(e1.color.blue)
          states2.postColor13 = true
          continue
        } else {
          e1.color.blue = e1.color.blue + letter
          continue
        }
      } else if (states2.postColor14 == false) {
        if (letter == ")") {
          states2.postColor14 = true
          e1.color.alpha = Number(e1.color.alpha)
          continue
        } else {
          e1.color.alpha = e1.color.alpha + letter
          continue
        }
      } else if (states2.prePercent == true) {
        if (letter == " ") {
          continue
        } else {
          states2.prePercent = false

          e1.pos = letter
          continue
        }
      } else if (states2.postPercent == false) {
        if (letter == "%") {
          e1.pos = Number(e1.pos)
          states2.postPercent = true

          states2 = {
            preBracket: true,
            postDeg: false,
            preSecBracket: true,
            postColor11: false,
            postColor12: false,
            postColor13: false,
            postColor14: false,
            prePercent: true,
            postPercent: false,
            firstGradient: false
          }
          continue
        } else {
          e1.pos += letter
          continue
        }
      }
    } else {
      //Second RGBA VALUE FOR S2
      if (states2.preSecBracket == true) {
        if (letter == "(") {
          states2.preSecBracket = false
          continue
        } else {
          continue
        }
      } else if (states2.postColor11 == false) {
        if (letter == ",") {
          e2.color.red = Number(e2.color.red)
          states2.postColor11 = true
          continue
        } else {
          e2.color.red = e2.color.red + letter
          continue
        }
      } else if (states2.postColor12 == false) {
        if (letter == ",") {
          e2.color.green = Number(e2.color.green)
          states2.postColor12 = true
          continue
        } else {
          e2.color.green = e2.color.green + letter
          continue
        }
      } else if (states2.postColor13 == false) {
        if (letter == ",") {
          e2.color.blue = Number(e2.color.blue)
          states2.postColor13 = true
          continue
        } else {
          e2.color.blue = e2.color.blue + letter
          continue
        }
      } else if (states2.postColor14 == false) {
        if (letter == ")") {
          states2.postColor14 = true
          e2.color.alpha = Number(e2.color.alpha)
          continue
        } else {
          e2.color.alpha = e2.color.alpha + letter
          continue
        }
      } else if (states2.prePercent == true) {
        if (letter == " ") {
          continue
        } else {
          states2.prePercent = false

          e2.pos = letter
          continue
        }
      } else if (states2.postPercent == false) {
        if (letter == "%") {
          e2.pos = Number(e2.pos)
          states2.postPercent = true
          continue
        } else {
          e2.pos += letter

          let states2 = {
            preBracket: true,
            postDeg: false,
            preSecBracket: true,
            postColor11: false,
            postColor12: false,
            postColor13: false,
            postColor14: false,
            prePercent: true,
            postPercent: false,
            firstGradient: false
          }

          continue
        }
      }
    }
  }


  //HERE, EVERYTHING IS ALREADY PARSED!
  // console.log(s1)
  // console.log(s2)
  // console.log(e1)
  // console.log(e2)

  //PRECALCULATIONS
  let steps = duration * 100
  let diff1 = {
    deg: e1.deg - s1.deg,
    color: {
      red: e1.color.red - s1.color.red,
      blue: e1.color.blue - s1.color.blue,
      green: e1.color.green - s1.color.green,
      alpha: e1.color.alpha - s1.color.alpha
    },
    pos: e1.pos - s1.pos
  }

  let step1 = {
    deg: diff1.deg / steps,
    color: {
      red: diff1.color.red / steps,
      blue: diff1.color.blue / steps,
      green: diff1.color.green / steps,
      alpha: diff1.color.alpha / steps,
    },
    pos: diff1.pos / steps
  }

  let diff2 = {
    deg: e2.deg - s2.deg,
    color: {
      red: e2.color.red - s2.color.red,
      blue: e2.color.blue - s2.color.blue,
      green: e2.color.green - s2.color.green,
      alpha: e2.color.alpha - s2.color.alpha
    },
    pos: e2.pos - s2.pos
  }

  let step2 = {
    color: {
      red: diff2.color.red / steps,
      blue: diff2.color.blue / steps,
      green: diff2.color.green / steps,
      alpha: diff2.color.alpha / steps,
    },
    pos: diff2.pos / steps
  }


  let helperObj = {
    deg: s1.deg,
    color: {
      red: s1.color.red,
      green: s1.color.green,
      blue: s1.color.blue,
      alpha: s1.color.alpha,
    },
    pos: s1.pos
  }

  let secHelperObj = {
    color: {
      red: s2.color.red,
      green: s2.color.green,
      blue: s2.color.blue,
      alpha: s2.color.alpha,
    },
    pos: s2.pos
  }


  let current_step = 0
  let interv = setInterval(() => {
    if (current_step < steps) {

      //CHANGE HELPER OBJECT
      helperObj.deg += step1.deg
      helperObj.color.red += step1.color.red
      helperObj.color.green += step1.color.green
      helperObj.color.blue += step1.color.blue
      helperObj.color.alpha += step1.color.alpha
      helperObj.pos += step1.pos

      let buffer1 = `linear-gradient(${helperObj.deg}deg, rgba(${helperObj.color.red},${helperObj.color.green},${helperObj.color.blue},${helperObj.color.alpha}) ${helperObj.pos}%`

      //CHANGE SECOND HELPER OBJECT
      secHelperObj.deg += step2.deg
      secHelperObj.color.red += step2.color.red
      secHelperObj.color.green += step2.color.green
      secHelperObj.color.blue += step2.color.blue
      secHelperObj.color.alpha += step2.color.alpha
      secHelperObj.pos += step2.pos

      let buffer2 = `, rgba(${secHelperObj.color.red},${secHelperObj.color.green},${secHelperObj.color.blue},${secHelperObj.color.alpha}) ${secHelperObj.pos}%)`

      let changer = buffer1 + buffer2

      // console.log(changer)
      elem.style.background = changer

      current_step++
    } else {
      clearInterval(interv)

      elem.style.background = gradient2_txt
    }
  }, 10)
}
