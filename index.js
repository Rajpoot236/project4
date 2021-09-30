
// const h = document.querySelector(".time-hour");
// const m = document.querySelector(".time-min");
// const s = document.querySelector(".time-sec");
// const a =document.querySelector("#am-time");

// setInterval(time,1000);
// function time(){
//     let tim=new Date();
//     h.textContent=tim.getHours()-12;
//     m.textContent=tim.getMinutes();
//     s.textContent=tim.getSeconds();
//     if(tim.getHours()>=12){
//         a.textContent="PM";
//     }
//     else{
//         a.textContent="AM";
//     }
// }

const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}

function time() {
  //clock
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();

  hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
  minTime.innerHTML  =    `${addZero(min)}`
  secTime.innerHTML  =    `${addZero(sec)}`
  aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`

}
setInterval(time, 1000);
const textUpdate = document.querySelector('#msg');
const clockIMG = document.querySelector('.right');
const textHeading = document.querySelector('.txt');
const wishHeadingBox = document.querySelector('.text');

//image change 
let d = new Date();
let h = d.getHours();

// morning function
function mng(){
    textUpdate.innerText = "Wake UP!!";
    textHeading.innerText = "Good Morning!!";
    wishHeadingBox.style.display="block";
    clockIMG.style.backgroundImage = "url('./images/3.png')";

}
//noon function 
function noon(){
    textUpdate.innerText = "Have Some Food!!";
    textHeading.innerText = "GOOD Afternoon!!";
    wishHeadingBox.style.display="block";
    clockIMG.style.backgroundImage = "url('./images/1.png')";
}
//night function
function night(){
    textUpdate.innerText = "Take A Nap!!";
    textHeading.innerText = "GOOD NIGHT!!";
    wishHeadingBox.style.display="block";
    clockIMG.style.backgroundImage = "url('./images/2.png')";
}

function realTimeFun(){
    if(h>=5 && h<12){
        mng();
    }else if(h>=12 && h<18){
        noon();
    }else if(h>=18 && h<24){
        night();
    }else{
        textUpdate.innerText = "enjoy";
        textHeading.innerText = "Chill";
        clockIMG.style.backgroundImage = "url('./images/default.svg')";
    }
};
realTimeFun();

function chillKaro(){
    textUpdate.innerText ="chill";
      textHeading.innerText ="";
      wishHeadingBox.style.display="none";
      clockIMG.style.backgroundImage = "url('./images/default.svg')";
    }
    chillKaro();

//party section

const partyBtn = document.querySelector('.wish-button');


partyBtn.addEventListener("click", ()=>{
      partyBtn.innerHTML ="Double Click to End Party";
      textUpdate.innerText ="PARTY BEGAINS!!";
      textHeading.innerText ="Let's Party";
      clockIMG.style.backgroundImage = "url(./images/party.svg)";
});

partyBtn.addEventListener("dblclick", ()=>{
    partyBtn.innerHTML ="Let's Party";
    realTimeFun();   

});
//time slot - morning
const morningSlot = document.querySelector('.mng-slot');



morningSlot.addEventListener("change", function (){ 


//   console.log(h);
//   console.log(this.value);

  if (this.value>=h && this.value<=h+1) {    
      mng();}

   else{
    textUpdate.innerText ="chill karo";
    wishHeadingBox.style.display="none";



    clockIMG.style.backgroundImage = "url('./images/default.svg')";
   }

});
// const morningSlot = document.querySelector('.mng-slot');


// morningSlot.addEventListener("change", function (){ 

//     if(this.value==="defaultvalue"){
//       realTimeFun();
//       console.log(this.value);
//     }
//     else{
//         mng();
//     }

// });

 
//time slot - noon
const noonSlot = document.querySelector('.noon-slot');
noonSlot.addEventListener("change", function (){
  if (this.value==h) {    
   noon();}

 else{
  textUpdate.innerText ="chill";
  textHeading.innerText ="";
  wishHeadingBox.style.display="none";
  clockIMG.style.backgroundImage = "url('./images/default.svg')";
 }

});

//time slot-night
const nightSlot = document.querySelector('.night-slot');

nightSlot.addEventListener("change", function (){
  if (this.value==h) {    
    night();}

 else{
  textUpdate.innerText ="chill";
  textHeading.innerText ="";
  wishHeadingBox.style.display="none";
  clockIMG.style.backgroundImage = "url('./images/default.svg')";
 }
});
























