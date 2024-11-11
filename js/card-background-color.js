/** 

// set triangle background color
document.getElementById('triangle-background').addEventListener('click', function(){
        document.getElementById('triangle-background').style.backgroundColor = 'violet';
})

//set rectangle background color
document.getElementById('rectangle-background').addEventListener('click', function(){
        document.getElementById('rectangle-background').style.backgroundColor = 'orange';
})

*/

//common function for multiple div id background color
function changeDivBackgroundOnClick(targetId, color){
        document.getElementById(targetId).addEventListener('click', function(){
                document.getElementById(targetId).style.backgroundColor = color;
        });
}

changeDivBackgroundOnClick('triangle-background', 'violet');
changeDivBackgroundOnClick('rectangle-background', 'orange');
changeDivBackgroundOnClick('parallelogram-background', 'goldenRod');
changeDivBackgroundOnClick('rhombus-background', 'mediumSlateBlue');
changeDivBackgroundOnClick('pentagon-background', 'plum');
changeDivBackgroundOnClick('ellipse-background', 'springGreen');
