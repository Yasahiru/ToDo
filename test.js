var datee;
var dated;

//////////////// VRAI ///////////
// function vrai(){
//   var clicked = event.target;
//   var elid = clicked.id 
//   var id='';
//   for(let y=5;y<elid.length;y++){
//       id = id+ elid[y];
//   }
//   document.querySelector(`#task${id}`).classList.add('trans');
//   document.querySelector(`#task${id}`).setAttribute('disabled','true');   
//   document.querySelector(`#cross${id}`).classList.add('disgard');
//   document.querySelector(`#check${id}`).classList.add('disgard');
//   document.querySelector(`#check${id}`).classList.remove('under');
//   document.querySelector(`#cross${id}`).classList.remove('under');
//   document.querySelector(`#edit${id}`).classList.add('under');
//   document.querySelector(`#edit${id}`).classList.remove('disgard');
//   document.querySelector(`#del${id}`).classList.add('under');
//   document.querySelector(`#del${id}`).classList.remove('disgard');
//   document.querySelector(`#heart${id}`).classList.add('under');
//   document.querySelector(`#heart${id}`).classList.remove('disgard');
//   document.querySelector(`#task${id}`).style.color='#fff';
//   var houres = new Date().getHours();
//   var minutes = new Date().getMinutes();
//   datee = `${houres}:${minutes}`;
// }

///////////////// FAUX ///////////
// function faux(){
//   var clicked = event.target;
//   var elid = clicked.id 
//   var id='';
//   for(let y=5;y<elid.length;y++){
//       id = id+ elid[y];
//   }
//   document.querySelector(`#task${id}`).value = val ;
//   document.querySelector(`#task${id}`).classList.add('trans');
//   document.querySelector(`#task${id}`).setAttribute('disabled','true');   
//   document.querySelector(`#cross${id}`).classList.add('disgard');
//   document.querySelector(`#check${id}`).classList.add('disgard');
//   document.querySelector(`#check${id}`).classList.remove('under');
//   document.querySelector(`#cross${id}`).classList.remove('under');
//   document.querySelector(`#edit${id}`).classList.add('under');
//   document.querySelector(`#edit${id}`).classList.remove('disgard');
//   document.querySelector(`#del${id}`).classList.add('under');
//   document.querySelector(`#del${id}`).classList.remove('disgard');
//   document.querySelector(`#heart${id}`).classList.add('under');
//   document.querySelector(`#heart${id}`).classList.remove('disgard');
//   document.querySelector(`#task${id}`).style.color='#fff';
// }

//////////////////////// DEL ////////////////////
// function del(){
//   var clicked = event.target;
//   var elid = clicked.id ;
//   var id='';
//   for(let y=3;y<elid.length;y++){
//       id = id+ elid[y];
//   }
//   var child = document.querySelector(`#task${id}`);
//   var parent = child.parentNode;
//   var parent2 = parent.parentNode;
//   parent2.removeChild(parent);
//   var houres = new Date().getHours();
//   var minutes = new Date().getMinutes();
//   dated = `${houres}:${minutes}`
// }

/////////////////////// Dark MODE ///////////////////////////
document.querySelector("#dark").addEventListener("click", () => {
  document.querySelector('#styletag').innerHTML= `::-webkit-scrollbar-thumb {  background: #3498db;     border-radius: 6px;}::-webkit-scrollbar-thumb:hover {  background: #2b2f32; }`;
    const body = document.body;
    body.classList.remove("bg-light");
    body.classList.add("bg-dark");
    body.classList.remove("text-dark");
    body.classList.add("text-light");
    document.querySelector("#dark").style.color = "#fff";
    document.querySelector("#light").classList.remove("disgard");
    document.querySelector("#dark").classList.add("disgard");
    document.querySelector("#dl").innerHTML = `&ensp; Light mode`;
    document.querySelector('input[type="submit"]').classList.add("btn-primary");
    document.querySelector('input[type="submit"]').classList.remove("btn-danger");
    document.querySelectorAll(".trans").forEach((el) => {
      el.style.color = "#fff";
    });
  });

  ////////////////////////// Light MODE //////////////////////
  document.querySelector("#light").addEventListener("click", () => {
    document.querySelector('#styletag').innerHTML= `::-webkit-scrollbar-thumb {  background: #dc3545;     border-radius: 6px;}::-webkit-scrollbar-thumb:hover {  background: #c20c1e; }`;

    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");
    document.body.classList.remove("text-light");
    document.body.classList.add("text-dark");
    document.querySelector(".fi").style.color = "black";
    document.querySelectorAll(".trans").forEach((el) => {
      el.style.color = "black";
    });
    const input = document.querySelector('input[type="text"]');
    input.classList.add("border");
    input.classList.add("border-dark");
    document.querySelector("#light").classList.add("disgard");
    document.querySelector("#dark").classList.remove("disgard");
    document.querySelector("#dl").innerHTML = "&ensp;Dark mode";
    document
      .querySelector('input[type="submit"]')
      .classList.remove("btn-primary");
    document.querySelector('input[type="submit"]').classList.add("btn-danger");
  });

///////////////////////// FILL THE HEART //////////////////
function FillHeart() {
    var clickedElement = event.target;
    if (clickedElement.classList.contains("fi-rr-heart")) {
        clickedElement.classList.remove("fi-rr-heart");
        clickedElement.classList.add("fi-sr-heart");
    } else {
        clickedElement.classList.remove("fi-sr-heart");
        clickedElement.classList.add("fi-rr-heart");
    }
}