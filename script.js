
function turno (nombre, apellido, telefono, mail, fecha, hora, servicios, precio){
    this.nombre= nombre;
    this.apellido= apellido;
    this.telefono= telefono;
    this.mail= mail;
    this.fecha= fecha;
    this.hora = hora;
    this.servicios= servicios;
    this.precio = precio;
}

const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");
const telefono = parseInt(prompt("Ingrese su nº de teléfono: "));
const mail = prompt("Ingrese su mail");
const fecha = prompt("Ingrese la fecha del turno: ");
const hora = prompt("Ingrese la hora seleccionada: ");
const servicios = [];
var precio = 0;

do{
const servicio = parseInt(prompt(`Ingrese el nº del servicio a elegir: 
1- Clasica 
2- Spa de manos
3- Gel break
4- Gel color
5- Nail art
6- Esculpidas`));

servicios.push(servicio);

switch (servicio) {
    case 1:
        alert("El servicio elegido es: Clasica y su precio es $1.000 ");
        precio+= 1000;
        break;
    case 2:
        alert("El servicio elegido es: Spa de manos y su precio es $800 ");
        precio+= 800;
        break;
    case 3:
        alert("El servicio elegido es: Gel break y su precio es $900 ");
        precio+= 900;
        break;    
    case 4:
        alert("El servicio elegido es: Gel color y su precio es $1.200 ");
        precio+= 1200;
        break;
    case 5:
        alert("El servicio elegido es: Nail art y su precio es $2.000 ");
        precio+= 2000;
        break;
    case 6:
        alert("El servicio elegido es: Esculpidas y su precio es $2.500 ");
        precio+= 2500;
        break;
    default:
        alert("Ingrese otro numero");
        break;
}
var otroServicio = prompt("Desea agregar otro servicio? si/no");
}while((servicio > 6) || (servicio <= 0) || (otroServicio == "si"));

const turno1 = new turno (nombre, apellido, telefono, mail, fecha, hora, servicios, precio);
console.log(turno1);
