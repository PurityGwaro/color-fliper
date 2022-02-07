const colors = ['green', 'red', 'rgba(133,122,200', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //used the log below to confirm that i can access the body
    //console.log(document.body);
    //below, the goal is to get a random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})