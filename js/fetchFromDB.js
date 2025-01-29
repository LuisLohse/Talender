function fetchFromDB(username, password) {

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         translateResults(xhttp.responseText)
      }
  };
  xhttp.open("GET", "./php/requestData.php?username=" + username, true);
  xhttp.send();

}

function translateResults(res) {
  let results = JSON.parse(res)

  for (let result of results) {
    // console.log(result)
    if (!result.isDeleted) {
      new Task(result.title, result.dedicated_duration, result.current_color, result.is_in_calendar, result.start_time, result.is_finished)
    }
  }
}
