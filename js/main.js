import cars from './module/array.js';


function removeCars(id){

    let carId = cars.find((car) => car.id === id);
    console.log(carId);
    cars.splice(carId, 1);
    printCars();
}

function addCars(){

    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let color = document.getElementById('color').value;
    let year = document.getElementById('year').value;
    let price = document.getElementById('price').value;

    let tableBody = document.getElementById('car-table-body');

    let id = 0;

    if(cars.length){
        id = cars[cars.length -1].id;
    }

    if(brand != '' && model != '' && color != '' && year != '' && price != ''){

        let modelCar = {
            
                id: id+1,
                brand: brand,
                model: model,
                color: color,
                year: year,
                price: price
        };

        cars.push(modelCar);
        console.log(cars);
        printCars();
        
    }else{
        alert('Todos los datos son obligatorios');
    }
}

function printCars(){

    let tableBody = document.getElementById('car-table-body');
    tableBody.innerHTML = '';

    cars.forEach((car) => {
       
        let row = `                
        <tr>
            <td>
                ${car.brand}
            </td>
            <td>
                ${car.model}
            </td>
            <td>
                ${car.color}
            </td>
            <td>
                ${car.year}
            </td>
            <td>
                ${car.price}
            </td>
            <td>
                <button class="btn btn-danger" onclick="removeCars(${car.id})">Eliminar</button>
            </td>
            <td>
                <button class="btn btn-warning" onclick="#">Editar</button>
            </td>
        </tr>`
        tableBody.innerHTML += row;
    });

}

// volvemos las funciones accesibles desde window
window.printCars = printCars;
window.removeCars = removeCars;
window.addCars = addCars;

//invocacion
printCars();