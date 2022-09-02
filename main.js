class bmiDetail{
  constructor(heightFeet,heightInches,weight){
    this.heightFeet= +heightFeet;
    this.heightInches = +heightInches;
    this.weight = +weight;
  }
  calculateBmiMetric(){
    // let heightM = this.heightFeet/3.281  (heightM*heightM)
    const bmiMetric = this.weight/((this.heightFeet/3.281)*(this.heightFeet/3.281))
    return bmiMetric.toFixed(2);
  }
  calculateBmiImperial(){
    // let weightImperial = weightImperial 
    const bmiImperial = 703 *(this.weight/2.205)/ (this.heightInches*this.heightInches)
    return bmiImperial.toFixed(2);
    
  }  
}

let heightFeet = (document.querySelector('#heightFeet'));
let heightInches = (document.querySelector('#heightInches'));
let weight = (document.querySelector('#weight'));
let resultPlacement = document.querySelector('.resultPlace')
let resultPlace1 = document.createElement('p')
let resultPlace2 = document.createElement('p')
// grabbing the input
document.querySelector("#heightFeet").addEventListener('input',function(e){
  heightFeet= e.target.value
  
})
document.querySelector("#heightInches").addEventListener('input',function(e){
  heightInches= e.target.value
})
document.querySelector("#weight").addEventListener('input',function(e){
  weight= e.target.value
})
// button event listener
document.getElementById('button').addEventListener("click",btn);
function btn(){ 
  

  // if (heightFeet,heightInches,weight == '' || isNaN(heightFeet,heightInches,weight) || heightFeet,heightInches,weight <= 0){
  //   alert('Invalid Input');
  //   return;
  // } 
      
   
  let bmiResult = new bmiDetail (heightFeet,heightInches,weight);
  let bmiMetric = bmiResult.calculateBmiMetric()
  let bmiImperial = bmiResult.calculateBmiImperial()
  resultPlace1.textContent = "The Metric Result is : " +"<br>"+
  bmiMetric +"<br>"
  resultPlace2.textContent = "The Imperial Result is : "+"<br>"+
  bmiImperial
  // resultPlacement.append(resultPlace1)
  // resultPlacement.append(resultPlace2)

  document.querySelector('.resultPlace').innerHTML = resultPlace1.textContent + resultPlace2.textContent
};
// btn.addeventlistener('click', calculate);
