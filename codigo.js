//? Sistema creado con axios (async y await) y manejo de errores.

const getInfo = async ()=>{
      let aprobados = document.querySelector(".num-aprobados");
      let desaprobados = document.querySelector(".num-desaprobados");
      try {
            resultado = await axios("informacion.txt");
            aprobados.innerHTML = resultado.data.aprobados;
            desaprobados.innerHTML = resultado.data.desaprobado;
      } catch (e){
            aprobados.innerHTML = "Fallo la API";
            desaprobados.innerHTML = "Fallo la API";
      }      
}

document.getElementById("getInfo").addEventListener("click",getInfo);