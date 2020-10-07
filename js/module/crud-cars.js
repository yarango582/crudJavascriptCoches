const cars = [
    { id: 1, marca: 'Tesla', modelo: 'Tesla X' },
    { id: 2, marca: 'BMW', modelo: 'iX3' }
];

function printCars() {
    const tableBody = document.getElementById('table-users-body');
    tableBody.innerHTML = '';

    cars.forEach(car => {
        const tr = `<tr>
                        <td>${car.marca}</td>
                        <td>${car.modelo}</td>
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

    // ponemos los valores del elemento encontrado en el formulario

    // en el input para la marca debo de poner la marca del coche que encontré
    
    // para poner texto en un input lo hago a través de la propiedad value
        // 1. obtener el input
        // 1. poner el valor deseado
    const inputMarca = document.getElementById('marca') // con esto obtenemos un elemento de nuestro sitio web
    inputMarca.value = editingCar.marca;
    
    // const inputModel = document.getElementById('modelo');
    // inputModel.value = car.modelo;
    // esto es el equivalente a las dos líneas de arriba
    document.getElementById('modelo').value = editingCar.modelo

}

function saveCarEdited() {
    // Obtener la nueva marca que han ingresado en el input
    const newBRand = document.getElementById('marca').value

    // accedo al valor del input que tiene el id modelo
    // este valor es el que el usuario ingresó
    const newModel = document.getElementById('modelo').value

    // qué necesito para actualizar el coche con estos datos nuevos
    // ¿cómo se cuál es el coche? -> es el coche que está en la variable editing car
    editingCar.marca = newBRand;
    editingCar.modelo = newModel;

    printCars();
}


function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const id = getId();

    const newCar = { id, marca, modelo }
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

// Ejecuciones
printCars();
