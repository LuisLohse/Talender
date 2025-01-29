var trash_can = document.querySelector("#delete_button")
var trash_can_done = document.querySelector("#delete_done_button")

trash_can.addEventListener("click", () => {
  for (let task of tasks)
  {
    if (task.calender_task)
    {
      if (task.calender_task.querySelector(".tic_close") != null)
      {
        task.calender_task.querySelector(".tic_close").click()
      }
    }
    task.delete()
  }
})

trash_can_done.addEventListener("click", () => {
  for (let task of tasks)
  {
    if (task.is_finished == false) continue
    
    if (task.calender_task)
    {
      if (task.calender_task.querySelector(".tic_close") != null)
      {
        task.calender_task.querySelector(".tic_close").click()
      }
    }
    task.delete()
  }
})
