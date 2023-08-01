const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor=getRandomColor();
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=getRandomColor();
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=getRandomColor();
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=getRandomColor();
    }
  })
})
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

