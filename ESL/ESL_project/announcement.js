const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");


let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach(toDoList);
}

formEl.addEventListener("submit", function(){
  toDoList();
});

function toDoList(task) {
   //date
   const date = new Date();
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const day = String(date.getDate()).padStart(2, '0');
   const hour =  String(date.getHours()).padStart(2, '0');
   const min =  String(date.getMinutes()).padStart(2, '0');
 
   const joined1 = [hour, min]. join(':');
   const joined2 = [day, month, year].join('/');
   const joined = [joined1, joined2].join(' ');
  
  let ntask = inputEl.value;
  let newTask = ntask + " " + joined;
    if (task) {
    newTask = task.name;
  }
  const liEl = document.createElement("p");
  //liE1.setAttribute("class", 'note');
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
 
/*
  const cdate = document.createElement("div");
 
  cdate.innerHTML = joined;
  liEl.removeChild(liEl.firstChild);
  liEl.appendChild(cdate);

 */ 

//delete button
const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML =  `  
  <i class="bi bi-x-square-fill"></i>
  `;
  
  liEl.appendChild(trashBtnEl);

  trashBtnEl.addEventListener("click", function() {
  liEl.remove();
   liEl.remove(this.lastChild);
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
 
  const liEls = document.querySelectorAll("p");
  list = [];
    liEls.forEach(Myfunction);
    function Myfunction(liEl){
    list.push({
      name: liEl.innerText,
      //checked: liEl.classList.contains("checked"),
    });
    
  };
  localStorage.setItem("list", JSON.stringify(list));
}
//links
const announcement = document.getElementById("announcement-id");
const assignment = document.getElementById("assignment-id");
const quiz = document.getElementById("quiz-id");
var link1 = document.getElementById("link-1");
var link2 = document.getElementById("link-2");
var link3 = document.getElementById("link-3");
var link4 = document.getElementById("link-4");
var link5 = document.getElementById("link-5");
 
window.addEventListener("load", function(){
  announcement.style.display = "block";
})

function My_announcement(){ 
  
  announcement.style.display = "block";
  assignment.style.display = "none";
  quiz.style.display = "none";
  link1.classList.add("active-page");
  link2.classList.remove("active-page");
  link3.classList.remove("active-page");
  link4.classList.remove("active-page");
  link5.classList.remove("active-page");
}

function My_assignment(){  
  announcement.style.display = "none";
  assignment.style.display = "block";
  quiz.style.display = "none";
  link2.classList.add("active-page");
  link1.classList.remove("active-page");
  link3.classList.remove("active-page");
  link4.classList.remove("active-page");
  link5.classList.remove("active-page");
}

function My_quiz(){ 
  announcement.style.display = "none";
  assignment.style.display = "none";
  quiz.style.display = "block";
  link3.classList.add("active-page");
  link1.classList.remove("active-page");
  link2.classList.remove("active-page");
  link4.classList.remove("active-page");
  link5.classList.remove("active-page");
}

function My_home() {
  link3.classList.remove("active-page");
  link1.classList.remove("active-page");
  link2.classList.remove("active-page");
  link4.classList.add("active-page");
  link5.classList.remove("active-page");
}

function My_mail() {
  link3.classList.remove("active-page");
  link1.classList.remove("active-page");
  link2.classList.remove("active-page");
  link4.classList.remove("active-page");
  link5.classList.add("active-page");
}