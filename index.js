let text = "Are you ready to play?"
let i = 0;
let speed = 100;

function type (){
  if (i< text.length){
    document.querySelector("#heading").textContent += text.charAt(i);
    i++;
    setTimeout(type,speed);
  }
}
type();


const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*15)+1;

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
      play();
    }
  })


button.addEventListener("click",play);



function play() {
    const userNumber = document.querySelector("#guess").value;

if(userNumber <1 || userNumber >15){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! I need the number from 1 to 15!',
        
      })
}

else if (isNaN(userNumber)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! I need the NUMBER from 1 to 15!',
        
      })
}
else 
if (userNumber < answer){
    Swal.fire('Type higher number')
}
else if (userNumber > answer){
    Swal.fire('Type lower number')
}
else{
    Swal.fire({
        title: 'Congratulation!!!',
        imageUrl: 'https://d1ubgs8wr0w9oe.cloudfront.net/uploads/2015/12/winner.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
}
}


