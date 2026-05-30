
// LABORATORIO - PROPIEDADES Y OBJETOS



// EJERCICIO 1: Libro
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function() {
        if (this.prestado == false) {
            this.prestado = true;
            console.log("El libro " + this.titulo + " ha sido prestado.");
        } else {
            console.log("Error: El libro " + this.titulo + " ya esta prestado.");
        }
    }
}

console.log("--- Ejercicio 1: Libro ---");
var libro1 = new Libro("El Principito", "Antoine de Saint-Exupery");
libro1.prestar(); // El libro fue prestado
libro1.prestar(); // Error: ya esta prestado


// EJERCICIO 2: Lista de Compras
function ListaCompras() {
    this.productos = [];

    this.agregar = function(producto) {
        this.productos.push(producto);
    }

    this.mostrar = function() {
        console.log("Lista de compras:");
        for (var i = 0; i < this.productos.length; i++) {
            console.log((i + 1) + ". " + this.productos[i]);
        }
    }
}

console.log("--- Ejercicio 2: Lista de Compras ---");
var lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");
lista.mostrar();


// EJERCICIO 3: Reproductor de Musica
function Reproductor() {
    this.estado = "detenido";

    this.play = function() {
        if (this.estado == "detenido" || this.estado == "pausado") {
            this.estado = "reproduciendo";
            console.log("Reproduciendo musica...");
        } else {
            console.log("Ya se esta reproduciendo musica.");
        }
    }

    this.pausar = function() {
        if (this.estado == "reproduciendo") {
            this.estado = "pausado";
            console.log("Musica pausada.");
        } else {
            console.log("No hay musica reproduciendose.");
        }
    }

    this.detener = function() {
        this.estado = "detenido";
        console.log("Musica detenida.");
    }
}

console.log("--- Ejercicio 3: Reproductor de Musica ---");
var reproductor = new Reproductor();
reproductor.play();    // Reproduciendo musica...
reproductor.play();    // Ya se esta reproduciendo
reproductor.pausar();  // Musica pausada
reproductor.play();    // Reproduciendo musica...
reproductor.detener(); // Musica detenida


// EJERCICIO 4: Carrito de Compras con Descuentos
function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function(nombre, precio) {
        this.productos.push(nombre);
        this.total = this.total + precio;
        console.log("Producto agregado: " + nombre + " - $" + precio);
    }

    this.calcularDescuento = function() {
        if (this.total > 100) {
            var descuento = this.total * 0.10;
            var totalFinal = this.total - descuento;
            console.log("Total: $" + this.total + " - Descuento del 10%: $" + descuento + " - Total final: $" + totalFinal);
        } else if (this.total > 50 && this.total <= 100) {
            var descuento = this.total * 0.05;
            var totalFinal = this.total - descuento;
            console.log("Total: $" + this.total + " - Descuento del 5%: $" + descuento + " - Total final: $" + totalFinal);
        } else {
            console.log("Total: $" + this.total + " - Sin descuento.");
        }
    }
}

console.log("--- Ejercicio 4: Carrito de Compras ---");
var carrito = new Carrito();
carrito.agregarProducto("Camisa", 60);
carrito.agregarProducto("Zapatos", 50);
carrito.agregarProducto("Gorra", 15);
carrito.calcularDescuento();
