import cars from './module/array.js';

function printCars() {
    const tableBody = document.getElementById('table-users-body');
    tableBody.innerHTML = '';

    cars.forEach(car => {
        const tr = `<tr>
                        <td>${car.brand}</td>
                        <td>${car.model}</td>
                        <td>${car.color}</td>
                        <td>${car.year}</td>
                        <td>${car.price}</td>
                        <td>
                            <button onclick="removeCar(${car.id})" class="btn btn-danger">Eliminar</button>
                            <button onclick="editCar(${car.id})" class="btn btn-warning">Editar</button>
                        </td>
                    </tr>`;
        tableBody.innerHTML += tr;
    })
}
// esta variable se usa para almacenar el coche que se está editanto
// creo la variable globar para poder accederla en cualquier función
let editingCar = {} // por defecto es un objeto vacío porque no se ha seleccionado nada para editar

function editCar(idRecibido) {
    // Econtrar el elemento con el id que recibe la función
    editingCar = cars.find((car) => car.id === idRecibido);

    let date = editingCar.year;
    console.log(date)
    // ponemos los valores del elemento encontrado en el formulario

    // en el input para la marca debo de poner la marca del coche que encontré
    
    // para poner texto en un input lo hago a través de la propiedad value
        // 1. obtener el input
        // 1. poner el valor deseado
    document.getElementById('brand').value = editingCar.brand // con esto obtenemos un elemento de nuestro sitio web
    document.getElementById('model').value = editingCar.model
    document.getElementById('color').value = editingCar.color
    document.getElementById('year').value = date;
    document.getElementById('price').value = editingCar.price
    
    let buttonSave = document.getElementById('saveCar');
    buttonSave.style.display = "inline-block";
    alert("Por favor ingresa los nuevos datos del coche");
}

function saveCarEdited() {
    // Obtener la nueva marca que han ingresado en el input
    const newBrand = document.getElementById('brand').value

    // accedo al valor del input que tiene el id modelo
    // este valor es el que el usuario ingresó
    const newModel = document.getElementById('model').value

    const newColor = document.getElementById('color').value
    const newYear = document.getElementById('year').value
    const newPrice = document.getElementById('price').value

    // qué necesito para actualizar el coche con estos datos nuevos
    // ¿cómo se cuál es el coche? -> es el coche que está en la variable editing car
    editingCar.brand = newBrand;
    editingCar.model = newModel;
    editingCar.color = newColor;
    editingCar.year = newYear;
    editingCar.price = newPrice;

    printCars();
    let saveCar = document.getElementById('saveCar');
    saveCar.style.display = "none";

    setTimeout(() =>{
        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('color').value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';
        alert('Datos actualizados');
    }, 1000)

}

function addCar() {

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const id = getId();

    const newCar = { id, brand, model, color, year, price }
    // Es igual a la de arriba
    // const newCar = {
     //    id: id
    //     marca: marca,
    //     mode: modelo
    // }
    
    cars.push(newCar);
    // console.log(cars);
    printCars();
}

function getId() {
    let maxi = 0;
    for (let i=0; i < cars.length; i++) {
        if(cars[i].id > maxi){
            maxi = cars[i].id
        }
    }
    return maxi + 1;
}
function removeCar (id) {
    const index = cars.findIndex(car => car.id === id)
    cars.splice(index, 1);
    printCars();
}

window.printCars = printCars;
window.saveCarEdited = saveCarEdited;
window.editCar = editCar;
window.addCar = addCar;
window.removeCar = removeCar;

//invocacion
printCars();