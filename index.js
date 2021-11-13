
class producto {
    constructor(nombre , cantidad , precio , categoria , stock) {
        this.nombre = nombre;  
        this.cantidad = cantidad;  
        this.precio = precio; 
        this.categoria = categoria; 
        this.stock = stock; 
    }

    precioFinal() {
        let iva = this.precio * 0.21
        return this.precio + iva
    }
    updateStock(){
        this.stock = this.stock - 1 ; 
    }
}

let muerde = new producto ("MUERDE MUERDE" , 1 , 50 , "Juguete" , 20 ) ; 
console.log ("Gracias por comprar " + muerde.nombre + " tu precio final es " + muerde.precioFinal()  );

let chow = new producto ("CHOW CHOW" , 1 , 70 , "Juguete" , 20 ) ; 
console.log ("Gracias por comprar " + chow.nombre + " tu precio final es " + chow.precioFinal()  );

let tira = new producto ("TIRA TIRA" , 1 , 80 , "Juguete" , 20 ) ;
console.log ("Gracias por comprar " + tira.nombre + " tu precio final es " + tira.precioFinal()  ); 

let soguita = new producto ("SOGUITA" , 1 , 90 , "Juguete" , 20 ) ;
console.log ("Gracias por comprar " + soguita.nombre + " tu precio final es " + soguita.precioFinal()  );

let buzito = new producto ("BUZITO" , 1 , 100 , "Ropa" , 10 ) ;
console.log ("Gracias por comprar " + buzito.nombre + " tu precio final es " + buzito.precioFinal()  );

let perritos = new producto ("PERRITOS" , 1 , 100 , "Juguete" , 30 ) ; 
console.log ("Gracias por comprar " + perritos.nombre + " tu precio final es " + perritos.precioFinal()  );


