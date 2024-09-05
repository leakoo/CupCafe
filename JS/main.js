// Navigation 
const scroll = () => {
    document.getElementById('locations-container').scrollIntoView({ behavior: "smooth" });
};
document.querySelector('.btn-1').addEventListener('click', scroll);

const toPage = () => {
    window.location.href = 'products.html';
};
document.querySelector('.btn-2').addEventListener('click', toPage);

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    this.reset();
    alert('Form submitted');
})
