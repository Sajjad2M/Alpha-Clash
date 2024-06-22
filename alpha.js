function hidebyId(x){
     const p = document.getElementById(x)
     p.classList.add('hidden')
    
 return p
}
function visiblebyId(x){
     const p = document.getElementById(x)
     p.classList.remove('hidden')
    
 return p
}
function setBgbyId(x){
    elementId = document.getElementById(x)
    elementId.classList.add('bg-orange-400')
    
}
function removeBgbyId(x){
    elementId = document.getElementById(x)
    elementId.classList.remove('bg-orange-400')
    
}
function resetValuebyId(x, value){
      let h = document.getElementById(x)
      h.innerText = value //make reusable

}
function getAlphabet(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let split = alphabet.split('')

    let r = Math.random(split)*25
    let rounded = Math.round(r)
    let randomAlpha = split[rounded]
   return randomAlpha
    
}

//-----play again---

