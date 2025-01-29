function uploadDataToDB(username, data) {

  let dataString = JSON.stringify(data)

  let xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //        // Typical action to be performed when the document is ready:
  //        console.log(xhttp.responseText)
  //     }
  // };
  xhttp.open("GET", "./php/uploadData.php?data='" + dataString + "'&username=" + username, true);
  xhttp.send();
}
