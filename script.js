const redelement = window.document.getElementById("circulo1");
const yellowelement = window.document.getElementById("circulo2");
const greenelement = window.document.getElementById("circulo3");
const redbutton = window.document.getElementById("buttonred");
let ativo = false;

function toggle() {
  ativo = !ativo;
  auto();
}

function red() {
  redelement.style.backgroundColor = "red";
  setTimeout(() => {
    redelement.style.backgroundColor = "rgb(135, 0, 0)";
  }, 2000);
}

function yellow() {
  yellowelement.style.backgroundColor = "yellow";
  setTimeout(() => {
    yellowelement.style.backgroundColor = "rgb(156, 156, 0)";
  }, 2000);
}

function green() {
  greenelement.style.backgroundColor = "green";
  setTimeout(() => {
    greenelement.style.backgroundColor = "rgb(0, 91, 0)";
  }, 2000);
}

function auto() {
  if (ativo) {
    greenelement.style.backgroundColor = "green";
    setTimeout(() => {
      greenelement.style.backgroundColor = "rgb(0, 91, 0)";
      yellowelement.style.backgroundColor = "yellow";
      setTimeout(() => {
        yellowelement.style.backgroundColor = "rgb(156, 156, 0)";
        redelement.style.backgroundColor = "red";
        setTimeout(() => {
          redelement.style.backgroundColor = "rgb(135, 0, 0)";
          auto();
        }, 2000);
      }, 2000);
    }, 2000);
  }
}
