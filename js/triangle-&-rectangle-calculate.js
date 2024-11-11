/**
 * Objective : get basw, hieght of a triangle. Calculate the area by using the provided formula. and then display the area.
 * 
 * step -1: get base value of the triangle,
 * step 2 : added an id in the base input field
 * step 3 : use getElementById to access the input field,
 * step 4 : get value from the  input field . (value is string now),
 * step 5 : convert the value to a number, use parseFloat
 * 
 * 
 * note: input field theke jokhun kono kta kisu neya hoy seta by defalt text akare thake number hisabe thake na,, tay input er value take number hisabe pete hole setake string to number e convert korte hoy;
 * 
 * note : perseInt dile dosomik number ke dosomik bad diye purno songkha banaye fele,  parseFloat dile je number deye jay setay ney dosomik dile o dosomik e return kore;
 * 
 * note : kono tag ke target kore jodi take niye kaj korte hoy tahole input field hole tar value take set korte hobe ,, ar jodi onno kono teg hoy jemon paragrap, span, div, heading etc tahole tar tex ke target kore kaj korte hoy set korte hoy text hisabe;
 */


// triangle Calculation function
function calculateTriangleArea(){
        // get triangle base value;
       const triangleBaseInput = document.getElementById('triangle-base');//get input placeholder b id
       const triangleBaseText = triangleBaseInput.value;//get triangle input text er value
       const base =parseFloat(triangleBaseText)//convert string value to number
//       console.log(base); 

//get triangle height value;
const triangleHeightInput = document.getElementById('triangle-height');//get input placeholder h id
const triangleHeightText = triangleHeightInput.value; //get triangle input text value;
const height = parseFloat(triangleHeightText);
// console.log(height);

// calculate triangle area
const area = 0.5 * base * height;
// console.log('area of the triangle :' , area);


// display triangle area; result showing in web page
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;
       
       
}


//Rectangle Calculation function
function calculateRectangle(){
// get the rectangle width part

        //get the id rectangle-width
        const rectangleWidthInput = document.getElementById('rectangle-width');
        // get the rectangle-width  text value 
        const rectangleWidthText = rectangleWidthInput.value;
        //convert rectangle-width string to number
        const width = parseFloat(rectangleWidthText);
        // console.log(width);

        
        // get the rectangle length part

        // get the id rectangle-length
        const rectangleLengthInput = document.getElementById('rectangle-length');
        // get the rectangle-length value;
        const rectangleLengthText = rectangleLengthInput.value;
        //conver rectangle string value to number
        const length = parseFloat(rectangleLengthText);
        // console.log(length);

        //calculate rectangle area
        const area = width * length;
        //  

        //displaying Rectangle area. result showing in web page;
        //get the span  id rectangle-area
        const rectangleDisplayAreaSpan = document.getElementById('rectangle-area');
        rectangleDisplayAreaSpan.innerHTML = area; // innerText and innerHTML same as


}

