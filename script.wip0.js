function unveilMark
(markId){
    let markElement =document.getElementById(markId);
    markElement.classList.remove('hidden');
}

function openNextButton(nextButtonId){
    let nextbuttonElement =document.getElementById(nextButtonId);nextbuttonElement.classList.remove('hidden');
}