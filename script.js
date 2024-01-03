let counter = 0;

let countDisplay = document.getElementById("counter");




const plusButton = document.getElementById("plus");

const minusButton = document.getElementById("minus");




const plusCounter = function () {
	counter = counter + 1;
	countDisplay.textContent = counter;
}

const minusCounter = function () {
	counter = counter - 1;
	countDisplay.textContent = counter;
}




plusButton.onclick = plusCounter;

minusButton.onclick = minusCounter;






// issues faced:
// - I had declared 'countDisplay' with 'const'
// - threw an error every time i tried to append to 'countDisplay'
// Resolution
// - embed the appendment(?) within the function
