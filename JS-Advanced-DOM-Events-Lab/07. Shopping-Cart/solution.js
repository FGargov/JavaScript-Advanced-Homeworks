function solve() {
    const products = {};
    const textarea = document.querySelector('textarea');
    const checkoutButton = document.querySelector('.checkout');

    document.querySelectorAll('.add-product').forEach(button => {
        button.addEventListener('click', addProduct);
    });

    checkoutButton.addEventListener('click', checkout);

    function addProduct(event) {
        const product = event.target.parentNode.parentNode;
        const title = product.querySelector('.product-title').textContent;
        const price = parseFloat(product.querySelector('.product-line-price').textContent).toFixed(2);

        if (!products[title]) {
            products[title] = 0;
        }
        products[title] += parseFloat(price);

        textarea.value += `Added ${title} for ${price} to the cart.\n`;
    }

    function checkout() {
        const total = Object.values(products).reduce((t, c) => t + c, 0).toFixed(2);
        const productList = Object.keys(products).join(', ');

        textarea.value += `You bought ${productList} for ${total}.`;

        document.querySelectorAll('button').forEach(button => button.disabled = true);
    }
}

