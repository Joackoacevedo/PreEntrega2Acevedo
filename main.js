const listaClientes = [
  { numero: 1, nombre: "alonso", apellido: "acevedo" , edad: 18 },
  { numero: 2, nombre: "vicente", apellido: "araya", edad: 16 },
  { numero: 3, nombre: "catalina", apellido: "castillo", edad: 37},
  { numero: 4, nombre: "abraham", apellido: "sanchez", edad: 38 },
];

let nombre= prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let edad =parseInt(prompt("Ingrese su Edad")) ;

let cliente = {
  numero: listaClientes.length + 1,
  nombre: nombre,
  apellido: apellido,
  edad: edad,
};
listaClientes.push(cliente);
console.log(listaClientes);

alert("Bienvenido" + " " + nombre + " a JV SNEAKERS");

let pais = prompt("¿De que país está comprando?");

while (pais.toLocaleLowerCase() != "chile"){
  alert("No vendemos en este pais");
  pais = prompt("¿De que país está comprando?");
}
alert("País correcto");

const productos = [
    { id: 1, nombre: "polera", precio: 15000 },
    { id: 2, nombre: "zapatilla", precio: 25000 },
    { id: 3, nombre: "gorro", precio: 10000 },
    { id: 4, nombre: "calcetines", precio: 2500 },
  ];
  
  let precio = parseInt(prompt("Ingrese el precio minimo a pagar"));
  
  let filtrados = productos.filter((item) => item.precio > precio); 
  
  filtrados.forEach((item) => {
    let mensaje = `
      Id: ${item.id}
      Nombre: ${item.nombre}
      Precio: $${item.precio}
    `;
  
    alert(mensaje);
  });
  
let venta = prompt("Que producto va a comprar");

if ( venta.toLocaleLowerCase() === 'polera' ){
    let precioProducto = 15000;
    let precioIva = precioProducto * 1.19 ;
    alert("El valor a pagar es:" + " " + "$" + precioIva);
}else if(venta.toLocaleLowerCase() === 'zapatilla') {
    let precioProducto = 25000;
    let precioIva = precioProducto * 1.19 ;
    alert("El valor a pagar es:" + " " + "$" + precioIva);
}else if(venta.toLocaleLowerCase() === 'gorro') {
  let precioProducto = 10000;
  let precioIva = precioProducto * 1.19 ;
  alert("El valor a pagar es:" + " " + "$" + precioIva);
}else if(venta.toLocaleLowerCase() === 'calcetines') {
  let precioProducto = 2500;
  let precioIva = precioProducto * 1.19 ;
  alert("El valor a pagar es:" + " " + "$" + precioIva);
}else{
  alert(`No vendemos ${venta}`)
}
