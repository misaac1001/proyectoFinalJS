// ARRAYS DE PRODUCTOS
const productos = {
    producto1: {
      nombre: 'MUERDE MUERDE',
      precio: '800',
      descripcion: 'Para los dientes',
      srcImg: 'images/juguete1.jpg'
    },
    producto2: {
      nombre: 'CHOW CHOW',
      precio: '1000',
      descripcion: 'El mejor juguete',
      srcImg: 'images/juguete2.jpg'
    },
    producto3: {
      nombre: 'TIRA TIRA',
      precio: '500',
      descripcion: 'Entretenimiento.',
      srcImg: 'images/juguete3.jpg'
    },
    producto4: {
      nombre: 'SOGUITA',
      precio: '900',
      descripcion: 'Nunca falla.',
      srcImg: 'images/juguete4.jpg'
    }
}


 // PRODUCTOS
 const tProd = document.getElementById('tprod').content
 const contenedorProd = document.querySelector('.contenedor-productos')
 const fragment = document.createDocumentFragment()
 
 
 // AGREGAR LOS PRODUCTOS
 Object.values(productos).forEach( producto => {
   tProd.querySelector('.info .nombre-prod').textContent = producto.nombre
   tProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
   tProd.querySelector('.info .descripcion-prod').textContent = producto.descripcion
   tProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
   tProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
   const clone = tProd.cloneNode(true)
   fragment.appendChild(clone)
 })
 contenedorProd.appendChild(fragment)
 
 // CARRITO DE COMPRA
 let carrito = {}
 const templateTabla = document.getElementById('agregar-producto-al-carro').content
 const tbodyCarrito = document.getElementById('carrito-body')
 const fragmentTabla = document.createDocumentFragment()
 const templateFoot = document.getElementById('tfooter').content
 const tfootCarrito = document.getElementById('footer')
 
 contenedorProd.addEventListener('click', e => {
   
   if(e.target.textContent === "Agregar") {
     setCarrito(e.target.parentElement.parentElement)
   }
   e.stopPropagation();
 })
 const setCarrito = e => {
   const pivoteCarrito = {
     nombre: e.querySelector('.info .nombre-prod').textContent,
     precio: e.querySelector('.div-precio-boton .precio').textContent,
     cantidad: 1
   }
   if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
     carrito[pivoteCarrito.nombre].cantidad += 1
   } else {
     carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
   }
   pintarTabla(carrito)
 }
 
 const pintarTabla = objetoCarrito => {
   Object.values(objetoCarrito).forEach( objeto => {
     const cloneTabla = templateTabla.cloneNode(true)
     cloneTabla.getElementById('producto').textContent = objeto.nombre
     cloneTabla.getElementById('cant').textContent = objeto.cantidad
     cloneTabla.getElementById('precio-uni').textContent = objeto.precio
     let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
     cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
     fragmentTabla.appendChild(cloneTabla)
   })
   tbodyCarrito.innerHTML = ''
   tbodyCarrito.appendChild(fragmentTabla)
   pintarFooter()
 }
 const pintarFooter = () => {
   tfootCarrito.innerHTML = ''
   if(Object.keys(carrito).length === 0) {
     tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningún elemento en el carrito!</td></tr>'
   } else {
     const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
     templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
     const cloneFoot = templateFoot.cloneNode(true)
     fragment.appendChild(cloneFoot)
     tfootCarrito.appendChild(fragment)
     //Boton Vaciar carrito
     const botonVaciar = document.getElementById('vaciar-tabla')
 botonVaciar.addEventListener('click', () => {
       carrito = {}
       pintarTabla(carrito)
       pintarFooter()
     })
     

     
   }
 }




//Variables globales


let botonesCompras = document.querySelectorAll(".botonCompra");
let arrayProductos = [];



for( let boton of botonesCompras){

    boton.addEventListener("click" , agregarCarrito); 

}

console.log(botonesCompras); 

function agregarCarrito (e) {


    console.log(e.target); 
    let prod = e.target;
    let produ = prod.parentNode.parentNode; 
    let titulo = produ.querySelector("h5").textContent; 
    let parrafo = produ.querySelector("p").textContent; 
    let imagen = produ.querySelector("img").src;

    let productos = {
        nombre: titulo,
        texto: parrafo,
        img: imagen,
    };

    arrayProductos.push(productos);
    console.log(produ);
    console.log(titulo);


    for (let Producto of arrayProductos) {
        let contenedor = document.createElement("p"); 
        //Inner
        contenedor.innerHTML = `<h5> Nombre: ${Producto.nombre}</h5>
                                <p> Precio: ${Producto.precio} </p>
                                <p> Cantidad: ${Producto.cantidad} </p>`;
    
        document.body.appendChild (contenedor); 
    }


}





/* 

let product = 0 ; 

do {
    let product = prompt ("Ingrese el producto que desea comprar o fin para terminar de agregar"); 
    if (product === "fin" || product === "FIN" || product ==="Fin"){
        break;
    }
    else {
        const nombreP = product;
        const precioP = prompt ("Ingrese el precio del producto");
        const cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP ));
    }
    
} 

while (product != "fin" || product != "Fin" || product != "FIN" );

console.log (arrayProductos);

for (let Producto of arrayProductos) {
    let contenedor = document.createElement("p"); 
    //Inner
    contenedor.innerHTML = `<h5> Nombre: ${Producto.nombre}</h5>
                            <p> Precio: ${Producto.precio} </p>
                            <p> Cantidad: ${Producto.cantidad} </p>`;

    document.body.appendChild (contenedor); 
}

//poco stock
const pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
document.write ("<h5> Lista de productos con poco stock (menos de 3 unidades): </h5> ");

for (let Producto of pocoStock){
    let contenedor = document.createElement("p");
    //Inner
    contenedor.innerHTML = `<h5> Nombre: ${Producto.nombre}</h5>
                            <p> Precio: ${Producto.precio} </p>
                            <p> Cantidad: ${Producto.cantidad} </p>`;

    document.body.appendChild(contenedor); 

}

//sin stock

const sinStock = arrayProductos.filter (producto => producto.cantidad === 0 || producto.disponible === false);
console.log(sinStock);
document.write ("<h5> Lista de productos sin stock (cantidad = 0 o disponible = false): </h5>");
for ( let Producto of sinStock){
    document.write ("<h5> Lista de productos sin stock: </h5> ");
    let contenedor = document.createElement("p"); 
    contenedor.innerHTML = `<h5> Nombre: ${Producto.nombre}</h5>
                            <p> Precio: ${Producto.precio} </p>
                            <p> Cantidad: ${Producto.cantidad} </p>`;

    document.body.appendChild(contenedor);
}
 */

// ordenados por precio 
/* 
let ordenadosPrecio = []; 

ordenadosPrecio = arrayProductos.map(elemento => elemento); 

ordenadosPrecio.sort (function(a,b){
    return a.precio - b.precio ;
});

console.log (`Ordenados por precios ascendentes`); 
console.log (ordenadosPrecio); 

for (let producto of ordenadosPrecio) {
    console.log ("Ordenados de manera ascendente");
};
 */


