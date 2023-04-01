document.querySelectorAll('button').forEach( btn => btn.addEventListener('click', (e) => {  
    e.preventDefault();
    computer ()
}
));  

function computer () {
    const img = document.querySelectorAll("img");

let randomchoose = img [Math.floor(Math.random( ) * img.length) ];
let computerchoose = randomchoose.id;
document.querySelector('#computerchoise').innerHTML = computerchoose;
}

const pcscorediv = Number(document.querySelector('.computerscore'));
const userscorediv = Number(document.querySelector('.yourscore'));


const button = document.querySelectorAll("button");

button.forEach(function(user) {
    user.addEventListener("click", showUserchoose)
})
function showUserchoose(event) {
    let userchoose = event.target.id;
    console.log(userchoose);
    let Pcchoose = document.querySelector('#computerchoise').innerHTML;
    console.log(Pcchoose);
if (
    (userchoose.includes ("rock") && Pcchoose.includes ("scissors")) ||
    (userchoose.includes ("paper") && Pcchoose.includes ("rock")) ||
    (userchoose.includes ("scissors") && Pcchoose.includes ("paper"))
) {
    document.querySelector('.yourscore').innerHTML ++ ;
} else if (
    (userchoose.includes ("paper") && Pcchoose.includes ("scissors")) ||
    (userchoose.includes ("scissors") && Pcchoose.includes ("rock")) ||
    (userchoose.includes ("rock") && Pcchoose.includes ("paper"))
 ) {
    document.querySelector('.computerscore').innerHTML ++ ;

 } else {
    alert ("Your choice was equal")
 }


}


    

        














