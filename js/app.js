
//Antes de ejecutar Javascript espera que toda la página se dibuje
document.addEventListener("DOMContentLoaded", function () {
    //Variables
  let jugador = 0
  let triunfos = 0
  let perdidas = 0
  let nulo=0
  nodoUsuario=document.querySelector("#jugador");
  nodoPc = document.querySelector("#pc");
  imagen_jugador=document.querySelector("#imagenJugador");
  imagen_pc=document.querySelector("#imagenPc");
  nodoResultado=document.querySelector("#resultado");

  



  
    //====================================================================
    //Inicio

    function iniciar() {
      document.getElementById("r").addEventListener("click", () => {
          jugador = "r";
          console.log(jugador)
          batalla();
      });

      document.getElementById("p").addEventListener("click", () => {
          jugador = "p";
          batalla();
         
      });

      document.getElementById("t").addEventListener("click", () => {
          jugador = "t";
          batalla();
        
      });
  }



  function aleatorio() {
    const eleccion = ["r", "p", "t"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return eleccion[numeroAleatorio];
}

   
function convertir_a_palabra(letra) {
  if (letra === "r") return "roca";
  if (letra === "p") return "papel";
  return "tijera";
}

function batalla() {

  if (triunfos < 3 && perdidas < 3) {
    const pc = aleatorio();
      switch (jugador + pc) {
          //Roca-tijera tijera-papel papel-roca
          case "rt":
          case "pr":
          case "tp":
             
              ganar(jugador,pc);
              console.log("ganaste" + triunfos);
              break;
          case "rp":
          case "pt":
          case "tr":
              perder(jugador,pc);
              console.log("perdiste" + perdidas);
              break;
          case "rr":
          case "pp":
          case "tt":
              empates(jugador,pc);
              console.log("empataste" + nulo);

              break;
      }
  }else{
    nodoResultado.innerHTML = "Juego terminado :)";
    nodoResultado.style.color="#9A1663";

  }
}

function ganar(jugador, pc) {
  triunfos += 1;
  
  const text =
      "Ganaste :)";
  dibujar(jugador, text, '#68B984',pc);

}

function perder(jugador,pc) {
  perdidas += 1;
  const text =
  "Perdiste :(";
      dibujar(jugador, text, '#FF7D7D',pc);
}

function empates(jugador,pc) {
  nulo += 1;
  const text =
      "Empate"
      dibujar(jugador, text, '#DC3535',pc);
}



function dibujar(jugador, text, color,pc) {
  nodoUsuario.textContent = triunfos;
  nodoPc.textContent=perdidas;
  valorJugador=convertir_a_palabra(jugador)+".png";
  valorPc=convertir_a_palabra(pc)+".png";
  console.log(valorPc);
  imagen_jugador.setAttribute("src", "images/" +valorJugador);
  imagen_pc.setAttribute("src", "images/" +valorPc);
  nodoResultado.innerHTML = text;
  nodoResultado.style.color=color;
  //agregarEfecto(clase, opcionjugador);
}


    //====================================================================
  
    iniciar();
  });
  