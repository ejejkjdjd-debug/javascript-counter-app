const increase = document.querySelector(".btnInc");
const decrease = document.querySelector(".btnDec");
const resetbutton = document.querySelector(".reset");
let display = document.querySelector(".display")
// define state
let count =0;
//let step = 5;
// render function
function render(){
  if (count === 0){
    decrease.disabled = true;
  }else {
    decrease.disabled = false;
  }
  if (count > 0){
    display.style.color = "green";
  } 
  if (count == 0){
    display.style.color = "black";
  }
  if (count < 0){
    display.style.color = "red";
    }   
        display.textContent = count;
}
// increase event
increase.addEventListener("click", function(event) {
      event.preventDefault();
      //count+=step;
      count++;
      render();
});
// decrease event
decrease.addEventListener("click", function(event) {
      event.preventDefault();
      //count-=step;
      count--;
      render();
});
// reset event
resetbutton.addEventListener("click", function(event) {
      event.preventDefault();
      count = 0;
      render();
});
