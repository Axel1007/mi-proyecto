let entradaUsuario = document.getElementById("entradaUsuario")
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salidaPar")
let numerosEjercicioEsPar = 0
let numeroMultiplo = 1
entradaUsuario.addEventListener("input",(evento)=>{
    numerosEjercicioEsPar =evento.target.value
    console.log(numerosEjercicioEsPar)
})

entradaMultiplo.addEventListener("input",(evento)=>{
    numeroMultiplo = evento.target.value
    console.log(numeroMultiplo)

})

// Función para calcular números impares en un rango dado
function esPar(entradaFuncion){
        if(entradaFuncion%numeroMultiplo2==0){
            return " es multiplo de " + numeroMultiplo
        }else{
            return " no es multiplo de " + numeroMultiplo
        } 
    }

  