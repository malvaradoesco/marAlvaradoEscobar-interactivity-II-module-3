function unveilMark
(markId){
    let markElement =document.getElementById(markId);
    markElement.classList.remove('hidden');
}


let firstButton = document.getElementById('button0');

firstButton.style.backgroundColor = `rgba(${brightness},${brightness},${brightness})`;

brightness -=50;

function openNextButton(nextButtonId){
    let nextbuttonElement =document.getElementById(nextButtonId);nextbuttonElement.classList.remove('hidden');

    let color = `rgba(${brightness},${brightness},${brightness})`;

    nextButtonElement.style.backgroundColor = color;

    brightness -= 50;
}

function ummAlert(){
    alert("You don't have a say in this.");
}

function popitup(url,windowName) {
       newwindow=window.open(url,windowName,'height=200,width=150');
       if (window.focus) {newwindow.focus()}
       return false;
     }

function popitLarge(url,windowName) {
       newwindow=window.open(url,windowName,'height=400,width=300');
       if (window.focus) {newwindow.focus()}
       return false;
     }
