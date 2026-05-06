const cargar = document.getElementById("cargar");
const solucionar = document.getElementById("solucionar");
let elegidas = [];
let respuesta_correcta = [];
const categoria = document.getElementById("categoria");


const myHeaders = new Headers();

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

//Crear selector
  const categorias = ["Any Category", "General Knowledge", "Entertainment: Books", "Entertainment: Film", "Entertainment: Music", "Entertainment: Musicals &amp; Theatres",
    "Entertainment: Television", "Entertainment: Video Games", "Entertainment: Board Games", "Science &amp; Nature", "Science: Computers", "Science: Mathematics", "Mythology",
    "Sports", "Geography", "History", "Politics", "Art", "Celebrities", "Animals", "Vehicles", "Entertainment: Comics", "Science: Gadgets", "Entertainment: Japanese Anime &amp; Manga",
    "Entertainment: Cartoon &amp; Animations"
  ];
  const select = document.createElement("select");
  let i = 8;
  categorias.forEach(element => {
    const option = document.createElement("option");
    let txt = document.createTextNode(element);
    option.appendChild(txt);
    option.setAttribute("value", i);
    option.setAttribute("id", "id" + i);
    option.setAttribute("class", "option");
    categoria.appendChild(option);
    i++;

  });
categoria.addEventListener("change", cambioCategoria);
function cambioCategoria(evento){
    // const selector = this;
    // console.log(selector)
    // const categoriaSelect = selector.querySelector(".option");
    const opcionSeleccionada = this.options[this.selectedIndex];
    console.log(opcionSeleccionada);
}


       
//Seleccionar categoría
cargar.addEventListener("click", function () {
  let json = {
    categoria: categoria.value
  };
  let url = "";
  console.log(json)
  let categoriaValue = categoria.value;
  if(categoriaValue == 8){
    url = "https://opentdb.com/api.php?amount=10";
  }else{
    url = "https://opentdb.com/api.php?amount=10&category="+categoriaValue;
        
  }
      fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const respuestaApi = result.results;
        console.log("Result:")
        console.log(result);
        const contenedorJson = document.getElementById("contenedorJson");
        for (let i = 0; i < respuestaApi.length; i++) {
          // Pregunta
          
          const parrafo = document.createElement("p");
          const pregunta = document.createTextNode(respuestaApi[i].question);
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
          const selectRespuesta = document.createElement("select");
          const id = `id${i}`
          selectRespuesta.setAttribute("id", id);


            selectRespuesta.setAttribute("onclick", click());
            

            let respuestas = respuestaApi[i].incorrect_answers;
            respuestas.push(respuestaApi[i].correct_answer);
            console.log("Array que se va a mezclar")
            console.log(respuestas);
            function mezclarArray(array) {
            // Mezclar array
                const arrayMezclado = respuestas;
                for (let i = arrayMezclado.length - 1; i > 0; i--) {
                    // Genera un índice aleatorio entre 0 e i
                    const j = Math.floor(Math.random() * (i + 1));
                    
                    // Intercambia elementos usando sintaxis de desestructuración
                    [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
                }
                
                return arrayMezclado;
            }
            let respuestasMezcladas = mezclarArray(respuestas);
            console.log(respuestasMezcladas)
            
            respuestasMezcladas.forEach(respuesta => {
                
                const optionRespuesta = document.createElement("option");
                optionRespuesta.value = respuesta;
                optionText = document.createTextNode(respuesta);
                optionRespuesta.appendChild(optionText);
                selectRespuesta.appendChild(optionRespuesta);
          });



          contenedorJson.appendChild(selectRespuesta);
        }
      })
      .catch((error) => console.error(error));

// fetch("https://opentdb.com/api.php?amount=10", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {

//         console.log(result)
//         const contenedorJson = document.getElementById("contenedorJson");

//         for (let i = 0; i < result.length; i++) {
//           // Pregunta
//           const parrafo = document.createElement("p");
//           const pregunta = document.createTextNode(result[i].pregunta);
//           parrafo.appendChild(pregunta);
//           contenedorJson.appendChild(parrafo);
//           //Respuestas
//           /*
//           const parrafo2 = document.createElement("p");
//           const respuestas = document.createTextNode(result[i].respuestas);
//           parrafo2.appendChild(respuestas);
//           contenedorJson.appendChild(parrafo2);
//           */
//           //Respuestas select
//           const select = document.createElement("select");
//           const id = `id${i}`
//           select.setAttribute("id", id);


//           select.setAttribute("onclick", click());

//           result[i].respuestas.forEach(respuesta => {
//             const option = document.createElement("option");
//             option.value = respuesta;
//             optionText = document.createTextNode(respuesta);
//             option.appendChild(optionText);
//             select.appendChild(option);
//           });



//           contenedorJson.appendChild(select);

//           //Respuesta correcta
//           console.log(result[i].correct_answer);
//           respuesta_correcta.push(result[i].correct_answer);

//           console.log(respuesta_correcta)

//         }

//       })
//       .catch((error) => console.error(error));
    

});

  function click() {
    console.log("clickkkk")
  }