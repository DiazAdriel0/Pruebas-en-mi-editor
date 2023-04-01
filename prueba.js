/* numeros = [1,2,5,8,15,2]
let menor = numeros[0];
let mayor = numeros[0];
numeros.forEach(element => {
    for (let i = 0; i < numeros.length; i++) {
        const element = array[i];
        
    }
});
console.log(menor);
console.log(mayor);
array.forEach(element => {
    
}); */

/* let numeros = [1,2,5,8,15,2]
console.log(Math.min(...numeros));
console.log(Math.max(...numeros)); */
/* numeros.forEach(element => {
    Math.min(element)
});
console.log(numeros); */

/* for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element < numeroMenor){
        numeroMenor = element;
    }else if (element > numeroMayor){
        numeroMayor = element
    }
} */


/* class Profesor {
    constructor(nombre, edad, cursos, certificados) {
        // Inicializar las propiedades del Profesor con los valores recibidos como argumento
        // tu código aquí
        this.nombre = nombre;
        this.edad = edad;
        this.cursos = cursos;
        this.certificados = certificados;
    }

    getCursos() {
        // tu código aquí
        return this.cursos;
    }
    addCurso(curso) {
        // tu código aquí
        this.cursos.push(curso)
    }
    countCertificados() {
        // tu código aquí
        return this.certificados.length
    }
}

const prof1 = new Profesor("adri",27,["JS","HTML","CSS"],[{nombre: "asd", entidad: "tal entidad", anio: 1995}, {nombre: "asd 2", entidad: "tal entidad 2", anio: 1999}])

console.log(prof1.getCursos())
console.log(prof1);
prof1.addCurso("React")
console.log(prof1);
console.log(prof1.countCertificados()); */

/* let persona1 = {
    nombre: "Lionel",
    apellido: "Messi",
    invitado: true,
};

function bienvenidoSr(persona) {
    //Tu código aquí
    if(persona.hasOwnProperty("nombre") && persona.hasOwnProperty("apellido") && persona.hasOwnProperty("invitado") && persona.invitado === true){
        return (persona.nombre + " " + persona.apellido + ', un gusto tenerlo nuevamente! Bienvenido')
    }
}

console.log(bienvenidoSr(persona1)); */

/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

/* let asda = [];
console.log(asda.length); */

/* let array = ["Dobby", "loves", "socks!"];

console.log(array.join(" ")); */

/* let array = [2,13,1,26,8];
let arrayDeDobles = array.map((x) => x * 2)

console.log(array);
console.log(arrayDeDobles); */