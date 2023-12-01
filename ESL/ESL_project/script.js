//Home Page
const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll",updateImage);
 
function updateImage() {
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset /10+ "%";
}

//login 
var btn = document.getElementById('btn1');
       
btn.addEventListener('click', Myfunction);

function Myfunction(){
    var code1 = document.getElementById('code').value;
   var link = document.getElementById('link');
  
    if(code1 === '123456789'){
        link.href = 'file:///Users/kelly/Desktop/Year%209/Web-Fuchsia/WIT/student_home.html';
        return false;
    } 
}

//Grading
function myMarks(){
    const marks = document.getElementById("marks").value;
    if(marks>=90){
        document.getElementById("grade").innerHTML = "A+";
    }

    else if(marks>=80){
        document.getElementById("grade").innerHTML= "A-";
    }

    else if(marks>=70){
        document.getElementById("grade").innerHTML= "B+";
    }

    else if(marks>=60){
        document.getElementById("grade").innerHTML= "B-";
    }

    else if(marks>=50){
        document.getElementById("grade").innerHTML= "C";
    }

    else{
        document.getElementById("grade").innerHTML= "F";
    }
}

