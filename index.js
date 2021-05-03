let Arrow = document.querySelectorAll('.arrow');
let Topic = document.querySelectorAll('.topic');
let Answer = document.querySelectorAll('.answer');
let Heading = document.querySelectorAll('.heading');

for (let i = 0; i < Topic.length; i++){
    Topic[i].addEventListener('click', function(){
        Answer[i].classList.toggle('visible');
        Heading[i].classList.toggle('bold');
        Arrow[i].classList.toggle('arrow-up');

        closePreviously(i);
    });
}

function closePreviously(i){
    for (let k = 0; k < Topic.length; k++){
        if (k !== i){
            Arrow[k].classList.remove('arrow-up');
            Answer[k].classList.remove('visible');
            Heading[k].classList.remove('bold');
        }
    }
}