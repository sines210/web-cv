//dark-mode button
var button1 = document.querySelector('.butt');

button1.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode")
    });


//scorll-top button
var btnScroll = document.querySelector("#btn-scroll");

btnScroll.addEventListener('click', ()=>
{
    window.scrollTo({top: 0, behavior: 'smooth'});})




 
// ScrollReveal().reveal('header');
       
//         ScrollReveal().reveal('#top-left', { delay: 500 });
        
//          ScrollReveal().reveal('#right1-5', { delay: 1000 });
//          ScrollReveal().reveal('#right3', { delay: 1150 });
//          ScrollReveal().reveal('#right4', { delay: 1300 });

//          ScrollReveal().reveal('#s1', { delay: 1000 });
//          ScrollReveal().reveal('#s1-5', { delay: 1100 });
//          ScrollReveal().reveal('#s2', { delay: 1200 });
//          ScrollReveal().reveal('#s3', { delay: 1300 });
//          ScrollReveal().reveal('#s3-5', { delay: 1400 });
//          ScrollReveal().reveal('#s4', { delay: 1500 });
//          ScrollReveal().reveal('#s5', { delay: 1600 });
//           ScrollReveal().reveal('#s6', { delay: 1700 });

        //   ScrollReveal().reveal('#bottom-left', { delay: 500 });