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
    if(playerPressed === 'Escape'){
        hidebyId('section2')
        hidebyId('section1')
        visiblebyId('section3') //make fun
        // resetValuebyId('fourteen', 0)b
    }
    // play again
    

    //console.log(playerPressed,expectedAlphabet)
    if(playerPressed === expectedAlphabet){
       //currentScore .innerText
        let currentScore = document.getElementById('count');
        let currentScore2 = currentScore.innerText
        //let current = currentScore2/// main result: 01111
        let current = parseInt( currentScore2) /// main make the 3 lines a reusable with return function and 2nd ruf is +1(2parameters)
        let newScore = current + 1

        currentScore.innerText= newScore
        //my invention
        let h =document.getElementById('fourteen')
        let h2 = h.innerText
        h.innerText = newScore

         removeBgbyId(expectedAlphabet)
        continueGame()
    }
    else if(playerPressed !== expectedAlphabet){
        let life = document.getElementById('life')
        let lifeText = life.innerText //=3
        let lifeRemain = parseInt(lifeText)

        const newLife = lifeRemain - 1 
        life.innerText = newLife
        if(newLife === 0){
            hidebyId('section2')
            visiblebyId('section3')

        }
    }
  
    
  
    
}
document.addEventListener('keyup', keyPressEvent )



function play1(){ //onclick
    hidebyId('section1');
    hidebyId('section3');

    visiblebyId('section2')
    //reset value
     resetValuebyId('life', 3)
     //score
     resetValuebyId('count', 0)
     //problem
     let expectedAlphabet = document.getElementById('yShow').innerText.toLowerCase();
     removeBgbyId(expectedAlphabet)
    continueGame()
}


        


