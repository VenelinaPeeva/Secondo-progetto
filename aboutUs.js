let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let teach = [
    {name: 'Matteo', description: 'Front-end developer', url: './media/Matteo.jpeg'},
    {name: 'Marco', description: 'Back-end developer', url: './media/Marco.jpg'},
    {name: 'Nicola', description: 'Social Media Manager', url: './media/Nicola.jpg'},
];

teach.forEach( (doce)=> {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${doce.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');

let check = false;

let flipCard = document.querySelector('.flip-card');

let cardWrapper = document.querySelector('#cardWrapper');

opener.addEventListener('click', ()=>{
    if(check == false){
        opener.style.transform = 'rotate(45deg)';
        movedDivs.forEach( (moved, i)=> {
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = '';
        movedDivs.forEach( (moved, i)=> {
        moved.style.transform = ``;
        });
        cardWrapper.innerHTML = '';
    }
});

let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');

movedDivs.forEach( (moved, i)=> {
    moved.addEventListener( 'click', ()=>{
        let doce = teach[i];
        cardWrapper.innerHTML = '';
        let div = document.createElement('div');
        div.classList.add('flip-card');
        div.innerHTML = `
        <div class="inner">
        <div class="inner-face"></div>
        <div class="inner-back">
        <p id="cardName" class="h4">${doce.name}</p>
        <p id="cardDescription" class="lead">${doce.description}</p>
        </div>
        </div>
        `;
        
        cardWrapper.appendChild(div);
        
        let innerFace = document.querySelector('.inner-face');
        innerFace.style.backgroundImage = `url(${doce.url})`;
    } );
});