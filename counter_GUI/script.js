let count = 0;
const counterDisplay = document.querySelector('.counter');
const inButton = document.querySelector('.btn-i');
const deButton = document.querySelector('.btn-d');
const reButton = document.querySelector('.btn-r');
const milestoneDisplay = document.querySelector('.milestone');

inButton.addEventListener("click", () => {
    count ++ ;
    if (count === 11) {
        milestoneDisplay.style.visibility = "visible";
    }
    updateDisplay();
});

deButton.addEventListener("click", () => {
    count -- ;
    if (count !== 11) {
        milestoneDisplay.style.visibility = "hidden";
    }
    updateDisplay();
});

reButton.addEventListener("click", () => {
    count = 0;
    milestoneDisplay.style.visibility = "hidden";
    updateDisplay();
});


function updateDisplay() {
  counterDisplay.textContent = count;
}