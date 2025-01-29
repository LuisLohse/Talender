function checkDB(username, password) {


  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         if(xhttp.responseText == "doesnt exist") {
           newRegister(username, password)
         }else if (xhttp.responseText == "wrong password") {
           alert("wrong password")
           location.reload(true)
         }else if (xhttp.responseText == "access granted") {
           fetchFromDB(username)
         }
      }
  };
  xhttp.open("GET", "./php/checkDB.php?username=" + username + "&password=" + password, true);
  xhttp.send();

}

function newRegister(username, password) {
  let xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //        // Typical action to be performed when the document is ready:
  //        if(xhttp.responseText == "doesnt exist") {
  //          newRegister(username)
  //        }
  //     }
  // };
  xhttp.open("GET", "./php/newRegister.php?username=" + username + "&password=" + password, true);
  xhttp.send();
}
