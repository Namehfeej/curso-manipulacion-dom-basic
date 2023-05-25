const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');

btn.addEventListener('click', btnClick)

function btnClick() {
    const sumaInputs =  input1.value + input2.value;
        pResult.innerText = "El resultado es:" +sumaInputs;
}


/*
console.log( {
    h1,
    p,
    parrafito,
    pid,
    input
    }

)

h1.innerHTML = " Modificar el HTML en la etiqueta <br> H1";
h1.getAttribute ('pantalla');
console.log(h1.getAttribute ('pantalla'));
h1.setAttribute('pantalla', 'television');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('azul');
//h1.classList.contains('black');

input.value = "abcde1234";

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/16676444/pexels-photo-16676444/free-photo-of-resfriado-nieve-invierno-animal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

pid.innerText = ""
pid.append(img);
*/
