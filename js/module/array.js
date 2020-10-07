const cars = [
    {
        id: 1,
        brand: 'Renault',
        model: 'Stepway',
        color: 'Gray',
        year: '2020/07/30',
        price: 45000000
    }
];

// recorrer tipo for pero con menos codigo
// users.forEach((user)=> console.log(user.name));

// filter (filtrar mediante codinciones) devuelve un array con las condiciones
// let academloUsers = users.filter((user) => user.email.endsWith('@academlo.com'));
// console.log(academloUsers);

// find (buscar algo especifico) y devuelve un objeto especifico
// const erik = users.find((user) => user.name === 'Erik');
// console.log(erik);

// Map devuelve un nuevo array con los datos solicitados
// const emails = users.map((user) => user.email);
// console.log(emails);

export default cars;
