let contrastToggle = false;
let isModalOpen = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
   isModalOpen = true; 
   document.body.classList += " modal--open" 
}

function exitSuccess() {
   const success = document.querySelector('.contact__overlay--success')
   success.classList.remove("contact__overlay--visible") 
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.contact__overlay--loading')
    const success = document.querySelector('.contact__overlay--success')
    loading.classList += " contact__overlay--visible"

    emailjs
     .sendForm(
        'service_jfcdtnl',
        'template_lv7yvan',
        event.target,
         'vcffZtLfc9UKX7XCR'
     ).then(() => {
        loading.classList.remove("contact__overlay--visible")
        success.classList += " contact__overlay--visible"
     }).catch(() => {
        loading.classList.remove("contact__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on amirkhaynir@gmail.com"
        );
     })
    
}


