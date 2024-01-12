
var ansList = null;
var dictLp={
  1 : {
  "question" : "who is found america?",
  "a" : "marko polo",
  "b" : "Thomas Alva Edison",
  "c" : "Columbus",
  "d" : "parthalomiyo",
  "answer" : "Columbus"},
  2 : {
  "question": "who is found america?",
  "a": "marko polo",
  "b": "Thomas Alva Edison",
  "c": "Columbus",
  "d": "parthalomiyo",
  "answer": "Columbus"},
  3 : {
  "question": "world biggest country ?",
  "a": "america",
  "b": "russia",
  "c": "india",
  "d": "japan",
  "answer": "russia"},
  4 : {
  "question": "titanic destroyed ocean ?",
  "a": "artic ocean",
  "b": "antarctic ocean",
  "c": "indian ocean",
  "d": "pacific ocean",
  "answer": "artic ocean"},
  5 : {
  "question": "world number one billionaire",
  "a": "elon musk",
  "b": "mukesh ambani",
  "c": "jack ma",
  "d": "bill gates",
  "answer": "bill gates"}
};
var dictv = null;

function optiont() {
  let value = Math.floor((Math.random() * 5) + 1);
  for(let i = 1; 6 >= i; i++){
    if(value == i){
      dictv = dictLp[i];
    }
  }
}
optiont();
function questionGen(){
  document.getElementById("ques").innerHTML = dictv["question"];
  const option = document.getElementById('btn');
  option.remove();
  optionGen();
  
}

function optionGen(){
  const mainO = document.getElementById('ansp');
  const mainT = document.getElementById('ansq');
  const mainTh = document.getElementById('ansr');
  const mainF = document.getElementById('anss');
 
  const oneLabel = document.createElement('p');
  oneLabel.textContent = dictv["a"];
  oneLabel.style.marginLeft = "10px";
  oneLabel.id = "feone";
  const twoLabel = document.createElement('p');
  twoLabel.textContent = dictv["b"];
  twoLabel.style.marginLeft = "10px";
  twoLabel.id = "fetwo";
  const threeLabel = document.createElement('p');
  threeLabel.textContent = dictv["c"];
  threeLabel.style.marginLeft = "10px";
  threeLabel.id = "fethree";
  const fourLabel = document.createElement('p');
  fourLabel.textContent = dictv["d"];
  fourLabel.style.marginLeft = "10px";
  fourLabel.id = "fefour";

  mainO.appendChild(oneLabel);
  mainT.appendChild(twoLabel);
  mainTh.appendChild(threeLabel);
  mainF.appendChild(fourLabel);

}
function art(value){
  var opt = value;
  ansList = opt
  
  if (opt == "a"){
    const mainO = document.getElementById('ansp');
    const mainOn = document.getElementById('feone');
    mainO.style.backgroundColor = "rgb(156, 35, 210)";
    mainOn.style.color = "rgb(255, 255, 255)";
  }
  else if (opt == "b") {
    const mainT = document.getElementById('ansq');
    const mainTn = document.getElementById('fetwo');
    mainT.style.backgroundColor = "rgb(156, 35, 210)";
    mainTn.style.color = "rgb(255, 255, 255)";
  }
  else if (opt == "c") {
    const mainTh = document.getElementById('ansr');
    const mainThn = document.getElementById('fethree');
    mainTh.style.backgroundColor = "rgb(156, 35, 210)";
    mainThn.style.color = "rgb(255, 255, 255)";
    }
  else if (opt == "d") {
    const mainF = document.getElementById('anss');
    const mainFn = document.getElementById('fefour');
    mainF.style.backgroundColor = "rgb(156, 35, 210)";
    mainFn.style.color = "rgb(255, 255, 255)";
    }
  else {
    console.log('something went wrong !');
  }
}
function sub() {
  var stillAns = ansList;
  if (dictv[stillAns] == dictv["answer"]){
    if(stillAns == "a"){
      const mainO = document.getElementById('ansp');
      mainO.style.backgroundColor = "rgb(0, 255, 0)";
      mainO.style.animationName = "emp";
      mainO.style.animationDuration = "3s";
    }
    else if (stillAns == "b") {
      const mainT = document.getElementById('ansq');
      mainT.style.backgroundColor = "rgb(0, 255, 0)";
    mainT.style.animationName = "emp";
    mainT.style.animationDuration = "3s";
    }
    else if (stillAns == "c") {
      const mainTh = document.getElementById('ansr');
      mainTh.style.backgroundColor = "rgb(0, 255, 0)";
      mainTh.style.animationName = "emp";
      mainTh.style.animationDuration = "3s";
    }
    else if (stillAns == "d") {
      const mainF = document.getElementById('anss');
      mainF.style.backgroundColor = "rgb(0, 255, 0)";
      mainF.style.animationName = "emp";
      mainF.style.animationDuration = "3s";
    }
  }
  else if (dictv[stillAns] != dictv["answer"]) {
    if (stillAns == "a") {
      const mainO = document.getElementById('ansp');
      mainO.style.backgroundColor = "rgb(255, 0, 0)";
      mainO.style.animationName = "rmp";
      mainO.style.animationDuration = "3s";
     }
    else if (stillAns == "b") {
      const mainT = document.getElementById('ansq');
      mainT.style.backgroundColor = "rgb(255, 0, 0)";
      mainT.style.animationName = "rmp";
      mainT.style.animationDuration = "3s";
     }
    else if (stillAns == "c") {
      const mainTh = document.getElementById('ansr');
      mainTh.style.backgroundColor = "rgb(255, 0, 0)";
      mainTh.style.animationName = "rmp";
      mainTh.style.animationDuration = "3s";
     }
    else if (stillAns == "d") {
      const mainF = document.getElementById('anss');
      mainF.style.backgroundColor = "rgb(255, 0, 0)";
      mainF.style.animationName = "rmp";
      mainF.style.animationDuration = "3s";
     }
  }
  else {
    alert(" feel unhappy !");
  }
}



