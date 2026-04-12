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
