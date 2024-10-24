//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43]

const copiedList1 = [...pointsList1];
console.log(copiedList1)

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiedToy = {...toy};
console.log(copiedToy)

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54,87,99,65,32];

const combinatedLists = [...pointsList1, ...pointsList2];
console.log(combinatedLists)

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const combinatedToys = {...toy1, ...toyUpdate};
console.log(combinatedToys)

//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

function newColors(color1, color2, color3, color4, color5) {
    return `Colores: ${color1}, ${color2}, ${color4} y ${color5}`;
  }
  
  console.log(newColors(...colors)); 