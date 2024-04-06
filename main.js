import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove, } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

var count = 0;
var Task;
var datec;
var edited;
var id;
var val;

const firebaseConfig = {
  apiKey: "AIzaSyBN_SrmEmRHkvOoPdb67ZgQUSFFPSbjp5M",
  authDomain: "gestionnaire-des-taches-5d6c3.firebaseapp.com",
  databaseURL: "https://gestionnaire-des-taches-5d6c3-default-rtdb.firebaseio.com",
  projectId: "gestionnaire-des-taches-5d6c3",
  storageBucket: "gestionnaire-des-taches-5d6c3.appspot.com",
  messagingSenderId: "41300216664",
  appId: "1:41300216664:web:0905d58575590eb566b32d",
  measurementId: "G-QRK4DBYJB0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

document.querySelector("#sub").addEventListener("click", () => {
  const TaskList = document.querySelector("#tasks");

  var houres = new Date().getHours();
  var minutes = new Date().getMinutes();
  datec = `${houres}:${minutes}`;
  console.log("date creation " + datec);

  var lies = TaskList.childElementCount;
  if (lies > 5) {
    document.querySelector('.tl').style.overflowY = 'scroll';
    document.querySelector('.tl').style.overflowY = 'scroll';
  }

  Task = document.querySelector("#task");
  if (Task.value !== "") {
    if (Task.value.length <= 12) {
      const li = document.createElement("li");
      count++;
      li.innerHTML = `
                    <input type="text" value="${Task.value}" disabled class="trans" id="task${count}">
                    <div class="is">
                      <i class="nedit fi fi-rr-heart hearts light under" id="heart${count}" onclick="FillHeart()"></i>
                      <i class="nedit fi fi-rr-edit under editee" id="edit${count}" onclick={console.log('hi');edited = true;var clicked = event.target;var elid = clicked.id;var id = '';for (let y = 4; y < elid.length; y++) {  id = id + elid[y];}document.querySelector('#task'+id).classList.remove('trans');document.querySelector('#task'+id).classList.add('place');document.querySelector('#task'+id).removeAttribute('disabled');document.querySelector('#edit'+id).classList.remove('under');document.querySelector('#del'+id).classList.remove('under');document.querySelector('#edit'+id).classList.add('disgard');document.querySelector('#del'+id).classList.add('disgard');document.querySelector('#heart'+id).classList.remove('under');document.querySelector('#heart'+id).classList.add('disgard');document.querySelector('#check'+id).classList.remove('disgard');document.querySelector('#check'+id).classList.add('under');document.querySelector('#cross'+id).classList.add('under');val = document.querySelector('#task'+id).value;document.querySelector('#task'+id).focus();document.querySelector('#task'+id).style.color = '#000';update(ref(db, 'The Tasks/' + id), {  Id_task : id,  task_description : Task,  Date_creation: datec,  edited: true}).then(() => {    alert('The data updated successfuly');}).catch((error) => {    console.error('Error: '+error);})}></i>
                      <i class="nedit fi fi-sr-trash under" id="del${count}"></i>
                      <i class="edited fi fi-rr-check disgard" id="check${count}" onclick="vrai()"></i>
                      <i class="edited fi fi-rr-cross disgard" id="cross${count}" onclick="faux()"></i>
                    </div>
                    `;

      TaskList.append(li);
      InsertData();
      document.querySelector("#task").value = "";

      if (document.body.classList.contains("bg-dark")) {
        document.querySelector(`#task${count}`).style.color = "#fff";
      } else {
        document.querySelector(`#task${count}`).style.color = "#000";
      }
    } else {
      Task.value = '';
      alert("the Task shouldn't pass 12 caracters");
    }
  } else {
    alert("Add a Task First");
  }
});

/////////////////////////////////

function updatedata() {

}
//////////////////////////////////

////////////////////////////////////////////////////////////
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 10000);
  const uniqueId = `Task-${timestamp}-${randomNumber}`;
  return uniqueId;
}

function InsertData() {
  id = generateUniqueId();
  set(ref(db, `The Tasks/` + `Task${count}`), {
    Id_task: id,
    task_description: Task.value,
    Date_creation: datec,
    edited: false,
  })
    .then(() => {
      console.log("The data stored successfuly");
    })
    .catch((error) => {
      console.error(error);
    });
}

