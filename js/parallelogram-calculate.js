/**
 


// parallelogram function
function calculateParallelogram() {
        //get the base input value by converting number;
        const baseInput = document.getElementById('parallelogram-base');
        const baseText = baseInput.value;
        const base = parseFloat(baseText);

        // get the height input value by converting number
        const heightInput = document.getElementById('parallelogram-height');
        const heightText = heightInput.value;
        const height = parseFloat(heightText);

        // calculate parallelogram area
        const area = base * height;
       // showing area calculate in webpage;
       const parallelogramAreaSpan = document.getElementById('parallelogram-area');
       parallelogramAreaSpan.innerText = area;


}

 */

// prottekta  id er er jonno alada alada function likha lagtese ,, bar bar eky kaj same same kora lagtese, but common ekta function likhte hobe jeno ekta function use kore sudu alada alada id bosiye same kaj tay kora jay;;

// uporer details function tike shortcut e likhe kivabe use kora jay ;


// for button onclick working
function calculateParallelogram(){
//set base id 
const base = getInputValueById('parallelogram-base');
//set height id
const height = getInputValueById('parallelogram-height');
//set parallelogram calculation formula
const calculate = base * height;
//set and showing display calculate result
setInnerTextById('parallelogram-area', calculate);



} 


// common function that will be work every input field
function getInputValueById(inputFieldId){
        //get every input field id
        const inputField = document.getElementById(inputFieldId);
        //get text from input filed by value
        const inputValueText = inputField.value;
        // input value text convert string to number
        const inputValue = parseFloat(inputValueText);
        return inputValue;

}

//set and showing webpage calculate area
//common function that will be set calculate area text;
function setInnerTextById(areaId, calculate){
        //get the area calculate id 
        const element = document.getElementById(areaId);
        //set result by inner text;
        element.innerText = calculate;
}

