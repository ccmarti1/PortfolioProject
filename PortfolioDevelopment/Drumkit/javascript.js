window.addEventListener('keydown',function(e){

    //select the corresponding audio
    const audio = document.querySelector(`audio[data-key = "${e.keycode}"]`)

    //select the corresponding key
    const key = document.querySelector(`.key[data-key = "${e.keycode}"]`)

    if(!audio){
        return //this willl stop the function

    }
    audio.currentTime = 0 //restart
    audio.play()
    key.classList.add('playing')

})


const removeTransition = function(e){
    if(e.propertyName !== 'transform') //skipping if it is not a transform
        return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(function(key){
    key.addEventListener('transitioned',removeTransition)
})
