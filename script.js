
// script.js

// Lista de itens da casa
const products = [
    { id: 1, name: "Sofá 3 Lugares", description: "Confortável e estiloso.", price: 1200, image: "https://via.placeholder.com/400x200" },
    { id: 2, name: "Geladeira Frost Free", description: "Capacidade de 400L.", price: 2500, image: "https://via.placeholder.com/400x200" },
    { id: 3, name: "Jogo de Panelas", description: "Conjunto de 5 peças antiaderentes.", price: 300, image: "https://via.placeholder.com/400x200" },
    { id: 4, name: "Cama Queen", description: "Estrutura em madeira maciça.", price: 1500, image: "https://via.placeholder.com/400x200" },
    { id: 5, name: "Mesa de Jantar", description: "Com 6 cadeiras estofadas.", price: 900, image: "https://via.placeholder.com/400x200" },
];

// Renderizar os produtos na página
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
        <a class="button" href="https://www.paypal.com/donate?hosted_button_id=EXAMPLE123&amount=${product.price}" target="_blank">
            Contribuir
        </a>
    `;
    productList.appendChild(productDiv);
});
