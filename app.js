const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input' , function(){
    colorDisplay.style.backgroundColor = colorPicker.value;
})