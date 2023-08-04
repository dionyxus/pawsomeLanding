function myFunction() {
    var x = document.getElementById("menu-items");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      x.style.flexFlow = "column nowrap";
      x.style.textAlign = "center";
      x.style.gap = "1.5rem";
      x.style.backgroundColor = "white";
      x.style.position = "absolute";
      x.style.left = "0";
      x.style.width = "100%";
      x.style.zIndex = "1000";
      x.style.paddingTop = "3rem";
      x.style.paddingBottom = "3rem";
      event.target.classList.add('burgerClicked');
    }
  }