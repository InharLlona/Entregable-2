/*var hotel = {
  Nombre : {
     Parador:"Paradors",
     Palace:"Palaces",
    },
 Direccion:"C/ San Juan 55, Granada(18008)",
 Puntuacion:undefined,
 Anonimato:undefined,
 foto:undefined,
}*/
var oNombre = {
    Palace:"Palace",
    Parador:"Parador",
};
var oLocation = {
    Palace:"Madrid",
    Parador:"Granada",
}
var oImg ={
    Palace:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ac/91/83/facade-daylight.jpg?w=900&h=-1&s=1",
    Parador:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYxz9-quUQN0FwaY2zfOMZ-D-Z8nh8B02fQ&usqp=CAU",
}
var oEstrellas = {
    1:"&#9733"+"&#9734"+"&#9734"+"&#9734"+"&#9734",
    2:"&#9733"+"&#9733"+"&#9734"+"&#9734"+"&#9734",
    3:"&#9733"+"&#9733"+"&#9733"+"&#9734"+"&#9734",
    4:"&#9733"+"&#9733"+"&#9733"+"&#9733"+"&#9734",
    5:"&#9733"+"&#9733"+"&#9733"+"&#9733"+"&#9733",
}


 
sNombre = prompt("¿Cómo se llama el hotel?");

document.getElementById("idNombre").innerHTML = oNombre[sNombre];
document.getElementById("idLocation").innerHTML = oLocation[sNombre]; 
sPuntuacion = prompt ("¿Podría valorar su estancia en el hotel del 1 al 5?");

document.getElementById("idEstrellas").innerHTML = oEstrellas[sPuntuacion];

vAnonimato = confirm("¿Quiere que su reseña sea anonima?");
document.getElementById("idAnonimous").checked = vAnonimato;

//document.getElementById("IdImg").textContent= oImg[sNombre];
document.images["nImagen"].src = oImg[sNombre];