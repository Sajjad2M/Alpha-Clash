function continueGame(){
    let alpha = getAlphabet()
     let show = document.getElementById('yShow')
     show.innerText = alpha
     //set backgroundColor
     setBgbyId(alpha)
   
}
function keyPressEvent(event){
    //  console.log(event)***
    let playerPressed = event.key;
    //console.log('playPressed', playerPressed)
    let expectedAlphabet = document.getElementById('yShow').innerText.toLowerCase();//imp

    //console.log(playerPressed,expectedAlphabet)
    if(playerPressed === expectedAlphabet){
       //currentScore .innerText
        let currentScore = document.getElementById('count');
        let currentScore2 = currentScore.innerText
        //let current = currentScore2/// main result: 01111
        let current = parseInt( currentScore2) /// main 
        let newScore = current + 1

        currentScore.innerText= newScore

         removeBgbyId(expectedAlphabet)
        continueGame()
    }
  
    
  
    
}
document.addEventListener('keyup', keyPressEvent )


function play1(){ //onclick
    hidebyId('section1');
    visiblebyId('section2')
    continueGame()
}

        


