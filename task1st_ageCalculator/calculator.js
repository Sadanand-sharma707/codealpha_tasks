const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const submitBtn = document.querySelector('.submit-btn');
const quizInfo = document.querySelector('.quiz-section');
const okey = document.querySelector('.ok');
 
var d1 = document.getElementById('date').value;
var m1 = document.getElementById('month').value;
var y1 = document.getElementById('year').value;

function age(){
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 =date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31]
    if( d1,m1,y1=== ""){
        document.getElementById('age').innerHTML = "Plese Enter Your Date Of Birth";
        return;
    }
    if(d1 > d2){
     d2 = d2 + month[m2-1];
     m2 = m2-1;
   }  
    if(m1>m2){
       m2 = m2+12;
       y2 = y2-1;
    }
 
    var d = d2-d1;
    var m= m2-m1;
    var y = y2-y1;
    document.getElementById('age').innerHTML = 'your age is    '  +  y  +  'Years   '  + m + 'Month  '  +  d  +  'Days';
 }
 
 function goHome() {
    window.location.href = "index.html"; // Modify as needed for home URL
}


 
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
  
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
 }

submitBtn.onclick = () =>{
   quizInfo.classList.add('active');
   popupInfo.classList.remove('active');
   age();
  
   
}
okey.onclick = () =>{

   
    quizInfo.classList.remove('active');
    popupInfo.classList.add('active');
    goHome();
  
   
}