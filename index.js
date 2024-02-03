let heading= document.querySelector('h4');
let user=[];
let comp=[];
let level=0;
let start=false;
let highscore=-Infinity;
document.addEventListener('keydown', function(){
    // now game has started and will continue until restarted
    if(start== false){
        start= true;
        levelup();
        let button= document.querySelectorAll('.box');
for(btn of button){
    btn.addEventListener('click', btnclick);
}
    }
});
let array=["one", "two", "three", "four"];
function getrandom(){
    let num= Math.floor(Math.random()*4);
    return array[num];
};
function levelup(){
    let str= getrandom();
    comp.push(str);
    console.log(comp);
    level++;
    heading.innerText="Level" + level;
    let btn= document.querySelector('.' + str);
    btnflash(btn);
    user=[];
}
function btnflash(btn){
    btn.classList.add('anime');
    setTimeout(function(){
        btn.classList.remove('anime')
    }, 500);
}
function btnclick(){
    user.push(this.classList[1]);
    gameflash(this);
    check(user.length-1);
}
function check(idx){
    if(user[idx]==comp[idx]){
        if(user.length==comp.length){
         setTimeout(levelup, 1000);  
        }
    }
    else{
        if(highscore<level-1){
            highscore= level-1;
        }
        heading.innerText= `Game over your score is ${level-1} Press any key restart the game and your highscore is ${highscore}`;
        start=false;
        level=0;
        user=[];
        comp=[];
    }
}
function gameflash(btn){
    btn.classList.add('game');
    setTimeout(function(){
        btn.classList.remove('game')
    }, 500);
}