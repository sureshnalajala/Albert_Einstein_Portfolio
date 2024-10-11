function responsiveMenu() {
    var element = document.getElementById("navigation");
    if (element.className === "headernav") {
        element.className += " responsive";
    } else {
        element.className = "headernav";
    }
  }

