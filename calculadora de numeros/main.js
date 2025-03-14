let entradaUsuario = document.getElementById("entradaUsuario")
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salidaPar")
let numerosEjercicioEsPar = 0

entradaUsuario.addEventListener("input",(evento)=>{
    numerosEjercicioEsPar = evento.target.value
    console.log(numerosEjercicioEsPar)
})

// Función para calcular números impares en un rango dado
function esPar(entradaFuncion){
        if(entradaFuncion%2==0){
            return "es par"
        }else{
            return "no es par"
        }
    }

    btnCalcular.addEventListener("click",()=>{
        resultado = esPar(numerosEjercicioEsPar)
        console.log(resultado)
        let hijo = document.createElement("li")
        hijo.innerHTML = numerosEjercicioEsPar + " " + resultado
        salidaPar.appendChild(hijo)

    })
    
