const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
const scrollAmount = -800;
const imageChange = document.getElementById('.section-b-falcon9')
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);
window.addEventListener('scroll', (event) =>{
 const { top } = imageChange.getBoundingClientRect();
 if (top - window.innerHeight < scrollAmount) {
    imageChange.style.opacity = 1;
 }
});

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}


function scrollPage(){
  const scrollPos = window.scrollY;
  if(scrollPos > 100 && !scrollStarted){
    countUp();
    scrollStarted = true;
  }
  else if (scrollPos < 100 && scrollStarted){
    reset();
    scrollStarted = false;
  }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            //Get current counter value
            const c = +counter.innerText;
            //Create Increment
            const increment = target / 100;
            //Add increment
            if (c < target) {
                //Set Counter Value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else{
              counter.innerText = target;
            }

        };
        updateCounter();
    });
}

function reset(){
  counters.forEach((counter) => (counter.innerHTML = '0')
  );
}

scrollPage();