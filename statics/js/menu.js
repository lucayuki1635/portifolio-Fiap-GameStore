let mostrando = false;

document.querySelector(".hamburguer").addEventListener("click", mostrar_menu)
document.addEventListener("scroll",esconder_menu)

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("show-menu")
    if(mostrando==false){
        mostrando= true

    }else{
        mostrando = false
    }
    console.log("Mostrar menu")
}


function esconder_menu() {
  if(mostrando==true){
    document.querySelector(".menu").classList.toggle("show-menu")
    mostrando = false
  }
}


