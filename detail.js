//const { default: Swal } = require("sweetalert2");

function searchOnUrl(){
    let url = location.search;
    let params = new URLSearchParams(url);
    let idParam = params.get("id");
    return idParam;
}
function searchOnDatabase(idProducto){
    //array
    const arregloProductos = JSON.parse( window.localStorage.getItem('items'));
    //Filtramos 
   const productoFiltrado = arregloProductos.find( producto =>{
        return producto.id === parseInt(idProducto)
    } )
    return productoFiltrado;


}
function creaProducto(productoEncontrado){
    console.log(productoEncontrado)
    const parentElement = document.getElementById('product-info');
    const plantilla = `
    <div class ="col-6">
        <img src="${productoEncontrado.image}" class="img-fluid" >
    </div>
    <div class ="col-6">
        <h3> ${productoEncontrado.title}</h3>
        <p>Price = $${productoEncontrado.price}</p>
        <p>${productoEncontrado.description}</p>
        <button class="btn btn-primary" id="btn-add-car">Add car</button>
    </div>
    `
    parentElement.innerHTML = plantilla;
}
window.onload = function(){
    // 1. Obtenemos el valor del parametro
   const idParamProduct= searchOnUrl();
   //2. Buscar en mi base de datos
   const productoEncontrado = searchOnDatabase(idParamProduct);
   //3.- Pintarlo en el DOM
   creaProducto(productoEncontrado)
   const btnAgregar = document.getElementById('btn-add-car');

   btnAgregar.addEventListener('click', function (){
       //alert('Agregado al carrito');
    //    new Swal(
    //        'Echo',
    //        'Agregado correctamente al carrito!',
    //        'success'
    //    )
      new Swal({
        icon: 'success',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })
   })



}