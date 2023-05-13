// making a reference of checkbox into the const toggle_btn
const toggle_btn = document.querySelector('#checkbox');

//adding an event listener upon click and an if condition for checked and unchecked state of the toggle
toggle_btn.addEventListener('change' , () => {
if(toggle_btn.checked){
  document.body.classList.add('dark-mode');

}
else{
  document.body.classList.remove('dark-mode');
    }
  })