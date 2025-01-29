// var description_firms = [
//   document.querySelector("#projekt1 .description_firm"),
//   document.querySelector("#projekt2 .description_firm"),
//   document.querySelector("#projekt3 .description_firm"),
//   document.querySelector("#projekt4 .description_firm"),
//   document.querySelector("#projekt5 .description_firm"),
//   document.querySelector("#projekt6 .description_firm"),
// ]



 var projects =   document.getElementsByClassName("projektx")
// var description_firms = document.getElementsByClassName('description_firm')
// var close_description = document.querySelector("#close_description")
// var red_desc_field = document.querySelector("#extended_description")
// var ex_desc_text = document.querySelector("#ex_desc_text")
//
// for (let description_firm of description_firms)  {
//  description_firm.addEventListener("click", ()=>{
//     // alert(description_firm.dataset.text)
//     show_extended_description(description_firm.dataset.text)
//  })
// }
//
// close_description.addEventListener("click", ()=>{
//   close_description.style.display = "none"
// })
//
// red_desc_field.addEventListener("click", (e) => {
//   e.stopPropagation()
// })
//
// function show_extended_description(x) {
//   close_description.style.display = "flex"
//   ex_desc_text.innerText = x
//
// }


for (let project of projects)  {

  project.addEventListener("click", ()=> {
    if (project.style.height == "10rem") {
      project.style.height = "20rem"
    } else if (project.style.height == "20rem") {
      project.style.height = "10rem"
    } else {
      project.style.height = "20rem"
    }
  })
}
