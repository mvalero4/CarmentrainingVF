const hamburguerMenu = document.querySelector('.hamburguer-menu');
const navMenu = document.querySelector(".nav-menu");

hamburguerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('inactive');
});


/* Calculadora de IMC */

function calcularImc(peso, estatura){
    return peso / ((estatura / 100) ** 2);
}

function imc(){
    
    const peso = document.getElementById("Peso");
    const estatura = document.getElementById("Estatura");
    
    const value1 = parseInt(peso.value);
    const value2 = parseInt(estatura.value);

    const calculo = document.getElementById("Resultado");
    calculo.innerText = "Tu I.M.C es: " + calcularImc(value1, value2).toFixed(2);

    let operacion = value1 / ((value2 / 100) ** 2);

    const explicar = document.getElementById("Explicacion");

        if(operacion < 18.5){
            explicar.innerText = "Tu I.M.C se encuentra dentro del rango de peso insuficiente";
        }
        else if(operacion >= 18.5 && operacion <= 24.9){
            explicar.innerText = "Tu I.M.C se encuentra dentro del rango de peso normal o saludable";
        }
        else{
            explicar.innerText = "Tu I.M.C se encuentra dentro del rango de sobrepeso";
        }
}





/* Calculadora de TMB */

/* Hombres TMB = (10 x peso de Kg) + (6,25 x altura en cm) – (5 x edad en años) + 5. */
/* Mujeres TMB = (10 x peso en kg) + (6,25 x altura en cm) – (5 x edad en años) – 161. */


function calcularTmb(peso, estatura, edad){
    if(sexo  && sexo.value === 1){
        return ((10 * peso) + (6.25 * estatura) - (5 * edad)) + 5;
    }
    else{
        return ((10 * peso) + (6.25 * estatura) - (5 * edad)) - 161;
    }
}


function tmb(){

    const sexo = document.getElementById("Sexo");
    const peso1 = document.getElementById("Peso1");
    const estatura1 = document.getElementById("Estatura1");
    const edad = document.getElementById("Edad");
    
    const valuetmb1 = parseInt(sexo.value);
    const valuetmb3 = parseInt(peso1.value);
    const valuetmb4 = parseInt(estatura1.value);
    const valuetmb2 = parseInt(edad.value);

    
    const operacion1 = ((10 * valuetmb3) + (6.25 * valuetmb4) - (5 * valuetmb2)) + 5;
    const operacion2 = ((10 * valuetmb3) + (6.25 * valuetmb4) - (5 * valuetmb2)) - 161;

    const calculo1 = document.getElementById("Resultado1");

    if(valuetmb1 === 1){
        calculo1.innerText = `Tu Metabolismo basal es: ${operacion1} kcal \n Calorias para aumentar de peso basado en el metabolismo basal sin actividad física (TMB + 10%): ${((0.10 * operacion1) + operacion1)} kcal \n Calorias para bajar de peso basado en el metabolismo basal sin actividad física (TMB - 20%): ${operacion1 - ((20 / 100) * operacion1)} kcal`;
    }

    else{
        calculo1.innerText = `Tu Metabolismo basal es: ${operacion2} kcal \n Calorias para aumentar de peso basado en el metabolismo basal sin actividad física (TMB + 10%): ${((0.10 * operacion2) + operacion2)} kcal \n Calorias para bajar de peso basado en el metabolismo basal sin actividad física (TMB - 20%): ${operacion2 - ((20 / 100) * operacion2)} kcal`;
    }
    

    const explicar1 = document.getElementById("Explicacion1");

    if(valuetmb1 === 1){
        explicar1.innerText = `Gasto energético total: \n Si haces poco o ningún ejercico: ${(operacion1 * 1.2).toFixed(2)} kcal \n Si haces ejercicio ligero de 1 a 3 dias a la semana: ${(operacion1 * 1.375).toFixed(2)} kcal \n Si es moderado de 3 a 5 dias a la semana: ${(operacion1 * 1.55).toFixed(2)} kcal \n Si es fuerte 6 dias a la semana: ${(operacion1 * 1.725).toFixed(2)} kcal \n Si es a nivel profesional: ${(operacion1 * 1.9).toFixed(2)} kcal`;
    }
    else{
        explicar1.innerText = `Gasto energético total: \n Si haces poco o ningún ejercico: ${(operacion2 * 1.2).toFixed(2)} kcal \n Si haces ejercicio ligero de 1 a 3 dias a la semana: ${(operacion2 * 1.375).toFixed(2)} kcal \n Si es moderado de 3 a 5 dias a la semana: ${(operacion2 * 1.55).toFixed(2)} kcal \n Si es fuerte 6 dias a la semana: ${(operacion2* 1.725).toFixed(2)} kcal \n Si es a nivel profesional: ${(operacion2 * 1.9).toFixed(2)} kcal`;
    }

}


/* Scroll */
// window.addEventListener('scroll', function()  {
//     let element = document.getElementById('scroll-content');
//     let screenSize = window.innerHeight;
    
//       if(element.getBoundingClientRect().top < screenSize) {
//         element.classList.add('visible');
//       } else {
//         element.classList.remove('visible');
//       }
//   });

/* Scroll varios elementos */
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });



/* Boot */
function enviar_mensaje(){
	var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,c = document.getElementById("chat-input").value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
    }
}
 
const whatsapp_chat =document.getElementById("whatsapp-chat");
   
function cerrar_chat(){
    whatsapp_chat.classList.add("hide");
    whatsapp_chat.classList.remove("show");
    
}
   
function mostrar_chat(){
    whatsapp_chat.classList.add("show");
    whatsapp_chat.classList.remove("hide");
}



/*******************Scroll Top**************************/

const button = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || documentElement.scrollTop;
    if (scrollTop > 600) {
        button.classList.remove('hidden');
    }
});

function scrollTopButton() {
    window.scrollTo({
        behavior:"smooth",
        top: 0,
    })
}

button.addEventListener('click', scrollTopButton);


