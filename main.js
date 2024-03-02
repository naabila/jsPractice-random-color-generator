let hexContainer = document.querySelector('.hex-color-container');
let hexBtn = document.querySelector('.hex-btn');
let hexTitle=document.querySelector('.hex-title')

//rgba===============
let rgbaContainer=document.querySelector('.rgba-color-container');
let rgbaBtn=document.querySelector('.rgba-btn');
let rgbaTitle=document.querySelector('.rgba-title')


function getColor(){
    let randomNumber=`#${Math.random().toString(16).slice(2,8)}`;
    hexContainer.style.backgroundColor=randomNumber;
    console.log(randomNumber);
    hexTitle.innerText=`Background Color: ${randomNumber}`;

}
getColor();
hexBtn.addEventListener('click',getColor)


//Hex Color Generator
function generateRgbaColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let a=Math.random().toFixed(2);

    let rgbaColor=`rgba(${r},${g},${b},${a})`
    rgbaContainer.style.backgroundColor=rgbaColor;
 rgbaTitle.innerText=`Background Color: ${rgbaColor}`


}
generateRgbaColor();

rgbaBtn.addEventListener('click',generateRgbaColor)
