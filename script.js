// ***************** form section ************************


let form =  document.querySelector('form');
form.addEventListener('click', (e) =>{
    e.preventDefault();
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const phone = document.querySelector('.phone');
    let isValid = false;

    if(!name.value || !email.value || !phone.value){
        alert('Please fill all the fields');
    }
    if(!isValid){
        alert('successfully');
        window.location.href = 'index.html'
    }
    
})


// **************************  explore technology section ****************************

$('#slider-1').owlCarousel({
  loop:true,
  margin:5,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText:['<i class="fa-solid fa-chevron-left"></i>',
  '<i class="fa-solid fa-chevron-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


// ***********************************  Popular courses section *****************************



$('.courseSlider').owlCarousel({
    loop:true,
    margin:33,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:['<i class="fa-solid fa-chevron-left"></i>',
  '<i class="fa-solid fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// ************************************ Tabbing on popular course *******************************


const tabsBtn1 = document.getElementById('tabsBtn-1')
const tabsBtn2 = document.getElementById('tabsBtn-2')
const tabsBtn3 = document.getElementById('tabsBtn-3')
tabsBtn1.addEventListener('click', () =>{
    tabsBtn1.classList.add('active');
    tabsBtn2.classList.remove('active');
    tabsBtn3.classList.remove('active');

    document.getElementById('tabs-1').classList.add('showCourseSlide');
    document.getElementById('tabs-2').classList.remove('showCourseSlide');
    document.getElementById('tabs-3').classList.remove('showCourseSlide');
   
})
tabsBtn2.addEventListener('click', () =>{
    tabsBtn1.classList.remove('active');
    tabsBtn2.classList.add('active');
    tabsBtn3.classList.remove('active');
    document.getElementById('tabs-1').classList.remove('showCourseSlide');
    document.getElementById('tabs-2').classList.add('showCourseSlide');
    document.getElementById('tabs-3').classList.remove('showCourseSlide');
   
})
tabsBtn3.addEventListener('click', () =>{
    tabsBtn1.classList.remove('active');
    tabsBtn2.classList.remove('active');
    tabsBtn3.classList.add('active');
    document.getElementById('tabs-1').classList.remove('showCourseSlide');
    document.getElementById('tabs-2').classList.remove('showCourseSlide');
    document.getElementById('tabs-3').classList.add('showCourseSlide');
   
})
  


