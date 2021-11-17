class producto {
    constructor(nombre , cantidad , precio ) {
        this.nombre = nombre;  
        this.cantidad = cantidad;  
        this.precio = parseFloat (precio); 
    }

    precioFinal() {
        let iva = this.precio * 0.21
        return this.precio + iva
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



