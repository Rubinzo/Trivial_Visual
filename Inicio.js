const myHeaders = new Headers();

const boton1 = document.getElementById("boton1");

let nombres = [];
let dnis = [];
let apellidos = [];
let edades = [];
let emails = [];
let contraseñas = [];

boton1.addEventListener("click", registrarse);

/*    const nombre = document.getElementById("nombre1");
    const contraseña = document.getElementById("contraseña1");
    const contraseña2 = document.getElementById("contraseña2");


    if(contraseña.value == contraseña2.value){
        let flag = false;
        nombres.forEach(element => {
            if(element == nombre.value){
                flag = true;
            }
        });
        if(!flag){
            console.log("Usuario registrado");
            nombres.push(nombre.value);
            contraseñas.push(contraseña.value);
            console.log(nombres);
            console.log(contraseñas);
        }else{
            console.log("El nombre ya existe");
        }
    }else{
        console.log("La contraseña tiene que ser igual");
    }
        */
function registrarse() {
    const nombre = document.getElementById("nombre1");
    const contraseña = document.getElementById("contraseña1");
    const contraseña2 = document.getElementById("contraseña2");
    const dni = document.getElementById("dni");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");
    const email = document.getElementById("email1");

    if (contraseña.value == contraseña2.value) {
        nombres.push(nombre.value);
        dnis.push(dni.value);
        apellidos.push(apellido.value);
        edades.push(edad.values)
        emails.push(email.value);
        contraseñas.push(contraseña.value);
        console.log("Nombres: " , nombres);
        console.log("Contraseñas: " , contraseñas);
        let json = {
            nombre: nombre.value,
            dni: dni.value,
            apellido: apellido.value,
            edad: edad.value,
            email: email.value,
            contraseña: contraseña.value
        };
        console.log(json)
        const sendRegistro = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(json)
        };
        fetch("http://localhost:8080/usuario/register", sendRegistro)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.error(error));

    } else {
        console.log("La contraseña tiene que ser igual");
    }



}



const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", iniciarSesion);

let email2 = [];
let contraseña2 = [];
function iniciarSesion() {
    const contraseña = document.getElementById("contraseña3");
    const email = document.getElementById("email2");

        email2.push(email.value);
        contraseña2.push(email2.value);
        let json = {
            email: email.value,
            contraseña: contraseña.value
        };
        console.log(json)
        const sendRegistro = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(json)
        };
        fetch("http://localhost:8080/usuario/login", sendRegistro)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.error(error));



}