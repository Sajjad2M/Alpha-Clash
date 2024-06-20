function continueGame(){
    let alpha = getAlphabet()
     let show = document.getElementById('yShow')
     show.innerText = alpha
     //set backgroundColor
     setBgbyId(alpha)
   
}

function play1(){ //onclick
    hidebyId('section1');
    visiblebyId('section2')
    continueGame()
}



