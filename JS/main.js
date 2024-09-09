//Navigation 

const toLocations = () => {
    const locationButton = document.getElementById('btn-1');
    const locations = document.getElementById('locations-container');

    locationButton?.addEventListener('click', () => {
        locations.scrollIntoView();
    });
};

const toProducts = () => {
    const productButton = document.getElementById('btn-2');

    productButton?.addEventListener('click', () => {
        location.replace('./products.html');
    });
};


// Products Page Pop-Up

const products = [
    {
        title: 'Espresso',
        description: ' A rich and bold shot of finely ground coffee beans, delivering an intense flavor and a caffeine kick.',
        img: '/Images/espresso.jpg'
    },
    {
        title: 'Iced Latte',
        description: 'A refreshing blend of chilled espresso and creamy milk, perfect for a cool and smooth coffee experience.',
        img: '/Images/icedLatte.jpg'
    },
    {
        title: 'Matcha Green Tea',
        description: 'A vibrant green tea made from powdered matcha, offering a unique, earthy flavor and a boost of antioxidants.',
        img: '/Images/matchaGreenTea.jpg'
    },
    {
        title: 'Croissant',
        description: 'Flaky, buttery pastry with a golden, crisp exterior and a soft, airy interior.',
        img: '/Images/croissant.jpg'
    },
    {
        title: 'Blueberry Muffin',
        description: 'Moist and fluffy muffin studded with juicy blueberries, ideal for a sweet breakfast or snack.',
        img: '/Images/blueberryMuffin.jpg'
    },
    {
        title: 'Chocolate Eclair',
        description: 'A delicate pastry filled with rich custard and topped with a glossy chocolate glaze.',
        img: '/Images/chocolateEclair.jpg'
    },
    {
        title: 'Avocado Toast',
        description: 'Toasted bread topped with creamy avocado spread, seasoned with salt, pepper, and optional extras like tomatoes or eggs.',
        img: '/Images/avocadoToast.jpg'
    },
    {
        title: 'Yogurt Parfait',
        description: 'A layered treat featuring creamy yogurt, fresh fruit, and crunchy granola for a balanced and delicious breakfast.',
        img: '/Images/yogurtParfait.jpg'
    },
    {
        title: 'Omelette',
        description: 'A savory egg dish cooked to perfection and filled with your choice of ingredients such as cheese, vegetables, and meats.',
        img: '/Images/omelette.jpg'
    },
];

const showProduct = () => {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-heading');
    const description = document.getElementById('popup-description');
    const img = document.getElementById('popup-img');
    const close = document.getElementById('close-btn');

    document.querySelectorAll('.product-info button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];

            title.textContent = product.title;
            description.textContent = product.description;
            img.src = product.img;

            popup.style.display = 'block';
        });
    });

    close?.addEventListener('click', () => {
        popup.style.display = 'none';
    });
};

showProduct();
toLocations();
toProducts();

//const resetForm = () => {
   // document.getElementById('contact-form').addEventListener('submit', function(e) {
        //e.preventDefault();
        //this.reset();
        //alert('Form submitted');
     //})
//}