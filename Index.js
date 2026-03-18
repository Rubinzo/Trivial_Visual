const myHeaders = new Headers();

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};





/*
const cargar = document.getElementById("cargar");


const contenedor2 = document.getElementById("contenedor2");
cargar.addEventListener("click",function(){
contenedorJson.innerHTML = `
    <p>${result}</p>
`
contenedor2.innerHTML = `
    <p>asdasd</p>
`
});*/

const cargar = document.getElementById("cargar");
const solucionar = document.getElementById("solucionar");
let elegidas = [];
let respuesta_correcta = [];

cargar.addEventListener("click",function(){
fetch("http://localhost:8080/trivia/easy", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  
    console.log(result)
    const contenedorJson = document.getElementById("contenedorJson");
    
    for(let i = 0; i < result.length; i++){
        // Pregunta
        const parrafo = document.createElement("p");
        const pregunta = document.createTextNode(result[i].pregunta);
        parrafo.appendChild(pregunta);
        contenedorJson.appendChild(parrafo);
        //Respuestas
        /*
        const parrafo2 = document.createElement("p");
        const respuestas = document.createTextNode(result[i].respuestas);
        parrafo2.appendChild(respuestas);
        contenedorJson.appendChild(parrafo2);
        */
        //Respuestas select
        const select = document.createElement("select");
        const id = `id${i}` 
        select.setAttribute("id", id);
        
        
        select.setAttribute("onclick", click());

        result[i].respuestas.forEach(respuesta => {
            const option = document.createElement("option");
            option.value = respuesta;
            optionText = document.createTextNode(respuesta);
            option.appendChild(optionText);
            select.appendChild(option);
        });
        
        
    
        contenedorJson.appendChild(select);

        //Respuesta correcta
        console.log(result[i].correct_answer);
        respuesta_correcta.push(result[i].correct_answer);  
        
        console.log(respuesta_correcta)

    }
    //EventListener de los selectores
        const selector = document.getElementById("id0");
        selector.addEventListener("change", function(){
          console.log(this.value);
          elegidas.splice(0,0,this.value)  
        });

        const selector1 = document.getElementById("id1");
        selector1.addEventListener("change", function(){
          console.log(this.value);  
          elegidas.splice(1,0,this.value)
        });

        const selector2 = document.getElementById("id2");
        selector2.addEventListener("change", function(){
          console.log(this.value);
          elegidas.splice(2,0,this.value)  
        });

        const selector3 = document.getElementById("id3");
        selector3.addEventListener("change", function(){
          console.log(this.value);  
          elegidas.splice(3,0,this.value)
        });

         const selector4 = document.getElementById("id4");
        selector.addEventListener("change", function(){
          console.log(this.value);
          elegidas.splice(4,0,this.value)  
        });

        const selector5 = document.getElementById("id5");
        selector1.addEventListener("change", function(){
          console.log(this.value);  
          elegidas.splice(5,0,this.value)
        });

        const selector6 = document.getElementById("id6");
        selector2.addEventListener("change", function(){
          console.log(this.value);
          elegidas.splice(6,0,this.value)  
        });

        const selector7 = document.getElementById("id7");
        selector3.addEventListener("change", function(){
          console.log(this.value);  
          elegidas.splice(7,0,this.value)
        });

        const selector8 = document.getElementById("id8");
        selector2.addEventListener("change", function(){
          console.log(this.value);
          elegidas.splice(8,0,this.value)  
        });

        const selector9 = document.getElementById("id9");
        selector3.addEventListener("change", function(){
          console.log(this.value);  
          elegidas.splice(9,0,this.value)
        });
  })
  .catch((error) => console.error(error));
 
});

function click(){
  console.log("clickkkk")
}

// let respuesta_correcta = [];
solucionar.addEventListener("click", function(){
    console.log(elegidas);
    const correcto = "correcto";
    const incorrecto = "incorrecto"
    let solucion = [];
    let k = 0;
    respuesta_correcta.forEach(element => {
      
      if(element == elegidas[k]){
        solucion.push(element);
      }else{
        solucion.push("Incorrecta: "+ element);
      }

      k++;
    });
    console.log(solucion);
});

const back = document.getElementById("back");
back.addEventListener("click", function(){
    let json =  {
      respuestas: elegidas,
      correct_answer: respuesta_correcta
    };
    console.log(json)
    let body = JSON.stringify(json);
    console.log(body)
    
    const sendOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify(json)
    };
  
      send(sendOptions)
});

function send (sendOptions){
  fetch("http://localhost:8080/trivia/response", sendOptions)
    // .then((response) => response.json())
    
}
