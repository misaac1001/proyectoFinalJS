class producto {
    constructor(nombre , cantidad , precio ) {
        this.nombre = nombre;  
        this.cantidad = cantidad;  
        this.precio = parseFloat (precio);
        this.disponible = true; 
    }

    precioFinal() {
        let iva = this.precio * 0.21
        return this.precio + iva
    }
    vender () {
        this.disponible = false;
    }
}

let arrayProductos = [];

do {
    let product = prompt ("Ingrese el producto que desea comprar o fin para terminar de agregar"); 
    if (product === "fin" || product === "FIN" || product ==="Fin"){
        break;
    }
    else {
        const nombreP = product;
        const cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        const precioP = prompt ("Ingrese el precio del producto");
        arrayProductos.push(new producto(nombreP, cantidadP, precioP));
    }
    
} while (producto != "fin" || producto != "FIN" || producto !="Fin")

console.log (arrayProductos);

for (let producto of arrayProductos) {
    console.log (producto.nombre);
    console.log (producto.cantidad);
    console.log (producto.precio);
    console.log (producto.precioFinal());
}

//poco stock
const pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
console.log (`Productos con poco stock, queda ${pocoStock}`);

for (let producto of pocoStock){
    console.log (`el producto que queda con poco stock es ${producto.nombre} con una cantidad de ${producto.cantidad}`); 

}

//sin stock

const sinStock = arrayProductos.filter (producto => producto.cantidad == 0 || producto.disponible == false)
console.log(`nos quedamos sin stock ${sinStock}`);


// ordenados por precio 

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



