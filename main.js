//sincrono 
//esperamos a que se termine de ejectar la primera accion
//No podemos hacer otra cosa 
//asincrona async
//Poder hacer varias cosas simultaneamente
// promesa 

function cartaDeclaracion (){

    const nuevaPromesa = new Promise(function (resolve,reject){
        resolve("Te contesta la carta y se van tomados de la mano")
    
    });
    return nuevaPromesa;

}
// promesa 
const declaracionPromise= cartaDeclaracion()
//console.log(declaracionPromise)

declaracionPromise
    // si se realiza exitosamente entonces ->
    .then(function(){
        //Ejecuta esta parte 
        console.log("Ya me dio una respuesta")
    })
    //catch -> Si no se cumple exitosamente 
    .catch(error=>{
        console.log(error)
    })

    // const element = [1,2,4,5,6,7]
    // element
    //     .split()
    //     .join()

    //API -> aplication programming interface
    //Nos traemos informacion 
    //Consultamos informacion 
    //
// Formas de hacer peticiones al servidor
//-ajax -> es el estandar para Asynchronous javascript and xml \
//-fetch -> Es un estandar para hacer peticiones asincronas

//Nos lo traemos asincronamente

//xml -> es un tipo de dato con el cual se puede recibir data 
//retrive data
//Es como tu puedes mandar informacion por el servidor

// json -> javascript object notation

//endpoint es una palabra fancy para la URL que necesitas para visitar 
//para taer api, servidor
const endpoint = 'https://fakestoreapi.com/products';
//const endpoint = 'https://pokeapi.co/api/v2/pokemon/ditto'
//promesa
const promise = fetch(endpoint);
console.log(`Estado de la promesa : ${promise}`)
//Status 200 -> ok 
promise
    //Si me promesa es
    .then(function( data)  {
        //json
        //console.log(data)
        //Convertilo
       // console.log(data.json())
       //convierte los datos que traes en .json
       // convierte a algo que yo pueda interpretar
        return data.json()
    })
    .then(function (data){
        //Ejecuta estas instrucciones
        //imprime en consola
        console.log(data)
    })
    //Si sucede un error
    .catch(function(error){
        console.log(error)
    })