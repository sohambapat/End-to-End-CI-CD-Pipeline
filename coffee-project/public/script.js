document.addEventListener('DOMContentLoaded', () => {
    axios.get('/coffees')
        .then(response => {
            const coffeeList = document.getElementById('coffeeList');
            response.data.forEach(coffee => {
                const listItem = document.createElement('li');
                listItem.textContent = `${coffee.name} - $${coffee.price}`;
                const orderButton = document.createElement('button');
                orderButton.textContent = "Order";
                orderButton.onclick = () => placeOrder(coffee.id);
                listItem.appendChild(orderButton);
                coffeeList.appendChild(listItem);
            });
        });
});

function placeOrder(coffeeId) {
    axios.post('/order', { coffeeId: coffeeId, quantity: 1 })
        .then(response => {
            alert(`Ordered ${response.data.coffeeName}! Total: $${response.data.total}`);
        })
        .catch(error => {
            alert('Error placing order.');
        });
}
