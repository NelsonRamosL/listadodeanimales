
// Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    // Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
    // accedido desde las clases inferiores.
    datosPropietario() {
        return `El Nombre del dueño es : ${this.nombre}, El domicilio es : ${this.direccion}, y el número telefonico de contacto : ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }


    tipoAnimal() {
        return `“El tipo de animal es un: ${this.tipo}”`;
    }


}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }


    // Crear los métodos get y set para la clase de mascota
    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nombreMascota_nuevo) {
        this._nombreMascota = nombreMascota_nuevo;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(enfermedadnuevo) {
        this._enfermedad = enfermedadnuevo;
    }

}



// funciones

let ingresar = (e) => {
    e.preventDefault();
    let mascota;
    /** 
   5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal
   para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el
   usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el
   nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse
   “Perro”.
   */
    switch (tipo.value) {
        case 'perro':
            let perro = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mascota = perro;
            break;
        case 'gato':
            let gato = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mascota = gato;
            break;
        case 'conejo':
            let conejo = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mascota = conejo;
            break;
        default:
            break;
    }



    // let mascota = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
    console.log(mascota);


    /** 6. Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario”
cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
de las clases Animal y Mascota, concatenando todo en un solo mensaje  */
    resultado.innerHTML = `
                  <h2>Datos Agregados</h2>
                  <ul>
                   <li>${mascota.datosPropietario()}</li>
                   <li>${mascota.tipoAnimal()}, Mientras que el nombre de la mascota es : ${mascota.nombreMascota} y la enfermedad es : ${mascota.enfermedad}</li>
                  </ul>
                  `;

}





//main

// Captura de bariables del DOM
let propietario = document.getElementById('propietario');
let telefono = document.getElementById('telefono');
let direccion = document.getElementById('direccion');
let nombreMascota = document.getElementById('nombreMascota');
let tipo = document.getElementById('tipo');
let enfermedad = document.getElementById('enfermedad');
let resultado = document.getElementById('resultado');
let boton = document.getElementById('boton');





// Evento click al precionar el boton "Agregar" ejecuta la funcion ingresar
boton.addEventListener('click', ingresar);


