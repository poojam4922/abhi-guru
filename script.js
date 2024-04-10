// ***************** form section ************************


let form =  document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form input values
    const name = document.querySelector('.name').value.trim();
    const email = document.querySelector('.email').value.trim();
    const phone = document.querySelector('.phone').value.trim();

    // Basic validation
    if (!name || !email || !phone) {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.innerText = "Error: All fields are required.";
        return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.innerText = "Error: Invalid email format.";
        return;
    }

    // Phone number validation using regex
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.innerText = "Error: Invalid phone number format (10 digits only).";
        return;
    }

    // Clear error message
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.innerText = "";

    // If all validations pass, you can proceed with form submission or further actions
    console.log("Form submitted successfully!");
    // Here you can submit the form data to the server or perform any other actions
});


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
  


