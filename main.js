let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let collapse = document.querySelector('#collapse');
let check = false;

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height= '70px';
        links.forEach( (link)=>{
            link.style.color = 'var(--black)';
        } );
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-b.png';
    } else{
        navbar.classList.add('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.add('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height= '140px';
        links.forEach( (link)=>{
            link.style.color = 'var(--yellow)';
        } );
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-y.png';
    }
});

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time){
    let counter = 0;

    let interval = setInterval( ()=>{
        if(counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);

}

let observer = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=> {

        if(entry.isIntersecting && confirm){
            createInterval(99, firstNumber, 100);
            createInterval(178, secondNumber, 100);
            createInterval(255, thirdNumber, 50);
            confirm = false;
        }

    });

} );

observer.observe(firstNumber);

