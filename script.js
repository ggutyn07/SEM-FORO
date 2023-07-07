const redelement = window.document.getElementById('circulo1')
const yellowelement = window.document.getElementById('circulo2')
const greenelement = window.document.getElementById('circulo3')
const auto = window.document.getElementById('buttonauto')

function ligar(corelement) {
  corelement.style.opacity = "1";
}
function desligar(corelement) {
  corelement.style.opacity = '0.2'
}

function ligaEDesliga(corelement) {
  ligar(corelement)
  setTimeout(() => {
    desligar(corelement)
  }, 2000);
}

function red() {
  ligaEDesliga(redelement)
}

function yellow() {
  ligaEDesliga(yellowelement)
}

function green() {
  ligaEDesliga(greenelement)
}

function toggle() {
  ligar(redelement)
  setTimeout(() => {
    desligar(redelement) 
    ligar(yellowelement)
    setTimeout(() => {
      desligar(yellowelement) 
      ligar(greenelement)
      setTimeout(() => {
        desligar(greenelement)
      }, 2000);
    }, 2000); 
  }, 2000) 
}