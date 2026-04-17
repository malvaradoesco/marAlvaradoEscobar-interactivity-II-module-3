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

function openNextButton2(nextButtonId){
    let nextbuttonElement =document.getElementById(nextButtonId);nextbuttonElement.classList.remove('hidden');

    let color = `rgba(${brightness},${brightness},${brightness})`;

    nextButtonElement.style.backgroundColor = color;

    brightness -= 50;
}

function ummAlert(){
    alert("You don't have a say in this.");
}

function popitup(url,windowName) {
       newwindow=window.open(url,windowName,'height=200,width=150,screenX=1000,screenY=200');
       if (window.focus) {newwindow.focus()}
       return false;
     }

function popitup1(url,windowName) {
       newwindow=window.open(url,windowName,'height=200,width=150,screenX=325,screenY=600');
       if (window.focus) {newwindow.focus()}
       return false;
     }

function popitLarge(url,windowName) {
       newwindow=window.open(url,windowName,'height=400,width=500, screenX=325,screenY=200');
       if (window.focus) {newwindow.focus()}
       return false;
     }

function newWindow() {
 var winPop = new Array();
winPop[winPop.length] = 
window.open('prince is 0.html','window1','scrollbars=no,width=235,height=155,left=1000,top=200,screenX=1000,screenY=200');
window.open('prince is 1.html','window2','scrollbars=no,width=235,height=155,left=325,top=200,screenX=325,screenY=200');
window.open('prince is 2.html','window3','scrollbars=no,width=235,height=155,left=325,top=600,screenX=325,screenY=600');
window.open('prince is 3.html','window4','scrollbars=no,width=235,height=155,left=1000,top=600,screenX=1000,screenY=600');
window.open('prince is 4.html','window5','scrollbars=no,width=235,height=155,left=660,top=450,screenX=660,screenY=450');
}

onbeforeunload = function() {
    for (var index = 0; index < winPop.length; ++index)
        winPop[index].close();
}

function openPopup(howMany) {
    var popups = [];

    var temp;
    for (var index = 0; index < howMany; ++index) {
        popups.push(open('', '', 'height=500,width=500'));
        popups[index].document.write('popup ' + (index + 1) + ' of ' + howMany + '<br/>this will close on parent window close');
    }

    closeFunc = function() {
        for (var index = 0; index < popups.length; ++index)
            popups[index].close();
    };

    if (addEventListener)
        addEventListener('beforeunload', closeFunc, false);
    else
        attachEvent('onbeforeunload', closeFunc);
}



//---------modal experiment--------------//

const openModalButtons =document.querySelectorAll('[data-modal-target]')
const closeModalButtons =document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}