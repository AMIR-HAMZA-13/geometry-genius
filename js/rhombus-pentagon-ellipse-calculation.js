
//give  rhombus all id in this  function and get  result
function calculateRhombus(){
        const diagonals1 = getInputValueById2('rhombus-diagonals-1');
        const diagonals2 = getInputValueById2('rhombus-diagonals-2');
        const area = 0.5 * diagonals1 * diagonals2;

        setInnerTextById2('rhombus-area', area);     
}

//give Pentagon all id  in this function and get result
function calculatePentagon(){
        const perimeter = getInputValueById2('pentagon-perimeter');
        const apothem = getInputValueById2('pentagon-apothem');
        const area = 0.5 * perimeter * apothem;
         
        setInnerTextById2('pentagon-area', area);
}

// give Ellipse all id in the function and get result
function calculateEllipse(){
        const lengthMajor = getInputValueById2('ellipse-length-major');
        const lengthMinor = getInputValueById2('ellipse-length-minor');
        const area = 3.1416 * lengthMajor * lengthMinor;

        setInnerTextById2('ellipse-area', area);
}

// common calculate function every input field
function getInputValueById2(inputFieldId2){
const inputField2 = document.getElementById(inputFieldId2);
const inputValueText2 = inputField2.value;
const inputValue2 = parseFloat(inputValueText2);
return inputValue2; 
}

//showing result in display common  function that will be work every area;
function setInnerTextById2(elementId, area){
        const element = document.getElementById(elementId);
        element.innerText = area;
}