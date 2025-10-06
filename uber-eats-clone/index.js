import { menuItems } from "./menu-items/menu-items.js"

const order = document.getElementById('chilaqueria-san-luis')
const homepage = document.getElementById('homepage')

const showMenu = () => {
    homepage.style.display = 'none'
    const menuHTML = `
        <div class="menu-page">
            <div class="menu-header">
                <button class="exit-button">X</button>
                <h2 style="font-size: 3rem;">Chilaquería San Luis</h2>
            </div>
            <div class="menu-items-grid">
                ${menuItems.map(item => `
                    <div class="menu-item">
                        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                        <div class="menu-item-details">
                            <h3 style="font-size: 2.5rem;">${item.name}</h3>
                            <p data-price-id="${item.id}" style="font-size: 2rem;">MXN${item.price}</p>
                        </div>
                        <div style="font-size: 2.5rem; display: flex;"><p style="display: inline; margin-right: 2rem;">Add </p><button class="add-item-btn" data-id="${item.id}" style="border: 2px solid gray; border-radius: 4rem; padding: 0 4rem; background: lightgrey; font-size: 3.5rem;">+</button></div>
                    </div>
                `).join('')}
            </div>
            <button class="checkout-button" style="background-color: black; color: white; padding: 2rem 3rem; margin: 2rem auto; border: none; border-radius: 0.5rem; font-size: 3.2rem; cursor: pointer; width: 95%; display: block;">Go to Checkout</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    const exitButton = document.querySelector('.exit-button');
    exitButton.addEventListener('click', () => {
        document.querySelector('.menu-page').remove();
        homepage.style.display = 'block';
    });

    const addItemButtons = document.querySelectorAll('.add-item-btn');
    addItemButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemId = event.target.dataset.id;
            const itemToUpdate = menuItems.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.pieces += 1;
                event.target.classList.add('add-item-btn-clicked');
                setTimeout(() => {
                    event.target.classList.remove('add-item-btn-clicked');
                }, 100); 
            }
        });
    });

    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', () => {
        document.querySelector('.menu-page').style.display = 'none'; // Hide instead of remove
        showCheckout();
    });
}

const showCheckout = () => {
    const selectedItems = menuItems.filter(item => item.pieces > 0);

    // If no items are selected, go back to the menu page
    if (selectedItems.length === 0) {
        const existingCheckoutPage = document.querySelector('#checkout-page');
        if (existingCheckoutPage) {
            existingCheckoutPage.remove();
        }
        const menuPage = document.querySelector('.menu-page');
        if (menuPage) {
            menuPage.style.display = 'block'; // Show the menu page
        } else {
            homepage.style.display = 'block'; // Fallback to homepage if menu page not found
        }
        return; // Exit the function
    }

    let subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.pieces), 0);
    const deliveryFee = 25; // Example fixed delivery fee
    const total = subtotal + deliveryFee;

    const checkoutHTML = `
        <div class="menu-page" id="checkout-page">
            <div class="menu-header">
                <button class="exit-button">X</button>
                <h2 style="font-size: 3rem;">Checkout</h2>
            </div>
            <div class="menu-items-grid" style="grid-template-columns: 1fr;">
                ${selectedItems.map(item => `
                    <div class="menu-item">
                        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                        <div class="menu-item-details">
                            <h3 style="font-size: 2.5rem;">${item.name}</h3>
                            <p style="font-size: 2rem; color: gray;">Quantity: ${item.pieces}</p>
                            <p style="font-size: 2rem;">MXN${item.price * item.pieces}</p>
                        </div>
                        <button class="remove-item-btn" data-id="${item.id}" style="background-color: lightgray; border: none; border-radius: 50%; width: 4rem; height: 4rem; font-size: 2.5rem; cursor: pointer; margin-left: 1rem;">-</button>
                    </div>
                `).join('')}
            </div>
            <div style="padding: 1rem; font-size: 2rem; width: calc(100% - 2rem); max-width: 500px; margin: 0 auto;">
                <p style="display: flex; justify-content: space-between;"><span>Subtotal:</span> <span>MXN${subtotal}</span></p>
                <p style="display: flex; justify-content: space-between;"><span>Delivery Fee:</span> <span>MXN${deliveryFee}</span></p>
                <p style="display: flex; justify-content: space-between; font-weight: bold;"><span>Total:</span> <span>MXN${total}</span></p>
            </div>
            <button class="checkout-button" id="place-order-btn" style="background-color: black; color: white; padding: 2rem 3rem; margin: 2rem auto; border: none; border-radius: 0.5rem; font-size: 3.2rem; cursor: pointer; width: 95%; display: block;">Place Order</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', checkoutHTML);

    const exitButton = document.querySelector('#checkout-page .exit-button');
    exitButton.addEventListener('click', () => {
        document.querySelector('#checkout-page').remove();
        const menuPage = document.querySelector('.menu-page');
        if (menuPage) {
            menuPage.style.display = 'block'; // Show the menu page
        } else {
            homepage.style.display = 'block'; // Fallback to homepage if menu page not found
        }
    });

    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemId = event.target.dataset.id;
            const itemToUpdate = menuItems.find(item => item.id === itemId);
            if (itemToUpdate && itemToUpdate.pieces > 0) {
                itemToUpdate.pieces -= 1;
                // Re-render the checkout page to reflect changes
                document.querySelector('#checkout-page').remove();
                showCheckout();
            }
        });
    });
};

order.addEventListener('click', showMenu)

