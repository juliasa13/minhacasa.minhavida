
// script.js

// Lista de itens da casa
const products = [
    { id: 1, name: "Sofá 3 Lugares", description: "Confortável e estiloso.", price: 1200, image: "https://i.postimg.cc/GhtDRJ9y/real-estate-6893060-1280-1.jpg" },
    { id: 2, name: "Geladeira Frost Free", description: "Capacidade de 400L.", price: 2500, image: "https://i.postimg.cc/Pxfx4Tww/fridge-3475996-1280.jpg" },
    { id: 3, name: "Jogo de Panelas", description: "Conjunto de 5 peças antiaderentes.", price: 300, image: "https://i.postimg.cc/SQTXg2VN/cook-750142-1280.jpg" },
    { id: 4, name: "Cama Queen", description: "Estrutura em madeira maciça.", price: 1500, image: "https://i.postimg.cc/tCsswqmd/bedroom-5664221-1280.jpg" },
    { id: 5, name: "Mesa de Jantar", description: "Com 6 cadeiras estofadas.", price: 900, image: "https://i.postimg.cc/PrvqK6P2/living-room-8215136-1280.jpg" },
    { id: 6, name: "Cadeiras", description: "Conjunto de 4 cadeiras confortáveis.", price: 700, image: "https://i.postimg.cc/wM7jC2Fx/breakfast-7045227-1280.jpg" },
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
