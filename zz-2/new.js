const form=document.querySelector('form');


form.addEventListener("submit", function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')
    const bmi=(weight/(height*2/100).toFixed(2));
    
    if(height==='' || height <0 || isNaN(height)){
        results.innerHTML=`please give a valid height ${height}`;
    }
    else if(weight ==='' || weight <0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`;
    }
    else {
        bmi
        //const bmi=(weight/(height*2/10000).toFixed(2))
    }
    ////////////////////////////////////////////////////////
    const newele=document.createElement("p");
//newele.innerHTML=bmi;
//console.log(bmi)
//  if (bmi < 18.6) {
//     newele.innerHTML="UNDERWEGHT";
//  }else if (18.6<bmi>24.9 ) {
//     newele.innerHTML="healthy person";
//  } else {
//     newele.innerHTML="OVERWEIGHT";
//  }
switch (true) {
    case bmi <= 18.6:
        newele.innerHTML="underweight";
        break;
    case bmi >= 18.6 && bmi <=24.9:
        newele.innerHTML="healthy person";
        break;    
    case bmi >= 24.9:
        newele.innerHTML="Overweight";
        break;
    default:
        break;
}

form.appendChild(newele);

////////////////////////////////////////////////////////////////
    //console.log(bmi);
    results.innerHTML=`<span>${bmi}</span>`
});
