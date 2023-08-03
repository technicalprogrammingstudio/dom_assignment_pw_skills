let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')
inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})