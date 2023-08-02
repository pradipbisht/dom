const clock=document.getElementById('clock');
 
setInterval(function() {
    let date =new Date();
   // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
    clock.style.backgroundColor=getRandomColor();
},1000);

// setTimeout((item) => {
//     clock.style.backgroundColor=getRandomColor();
// }, 2000);


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   // const intervalId = setInterval(getRandomColor(), 2000);
    return color;
  }