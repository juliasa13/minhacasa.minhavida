// script.js

// Lista de itens da casa
const products = [
    { id: 1, name: "Sofá 3 Lugares", description: "Confortável e estiloso.", price: 1200, image: "https://i.postimg.cc/GhtDRJ9y/real-estate-6893060-1280-1.jpg", link: "https://mpago.la/2nnsbVJ" },
    { id: 2, name: "Geladeira Frost Free", description: "Capacidade de 400L.", price: 2500, image: "https://i.postimg.cc/Pxfx4Tww/fridge-3475996-1280.jpg", link: "https://mpago.la/1jM1jRz" },
    { id: 3, name: "Jogo de Panelas", description: "Conjunto de 5 peças antiaderentes.", price: 300, image: "https://i.postimg.cc/SQTXg2VN/cook-750142-1280.jpg", link: "https://mpago.la/15gTR9w" },
    { id: 4, name: "Cama Queen", description: "Estrutura em madeira maciça.", price: 1500, image: "https://i.postimg.cc/tCsswqmd/bedroom-5664221-1280.jpg", link: "https://mpago.la/27HKrJA" },
    { id: 5, name: "Mesa de Jantar", description: "Com 6 cadeiras estofadas.", price: 900, image: "https://i.postimg.cc/PrvqK6P2/living-room-8215136-1280.jpg", link: "https://mpago.la/1RoDpT7" },
    { id: 6, name: "Cadeiras", description: "Conjunto de 4 cadeiras confortáveis.", price: 700, image: "https://i.postimg.cc/wM7jC2Fx/breakfast-7045227-1280.jpg", link: "https://mpago.la/15sD4gZ" },
    { id: 7, name: "Talheres", description: "Conjunto de talheres de alta qualidade.", price: 450, image: "https://i.postimg.cc/j58j3mHk/cutlery-377700-1280.jpg", link: "https://mpago.la/1cGm7xN" },
    { id: 8, name: "Jogo de Toalhas", description: "Toalhas macias e absorventes.", price: 400, image: "https://i.postimg.cc/T14p1FhW/bathroom-1281614-1280.jpg", link: "https://mpago.la/2VHVete" },
    { id: 9, name: "Mesinha de Centro", description: "Design elegante para a sala.", price: 500, image: "https://i.postimg.cc/s2YQmTHt/living-room-8215143-1280.jpg", link: "https://mpago.la/1kHuoFM" },
    { id: 10, name: "Smart TV", description: "Alta resolução para momentos de lazer.", price: 1350, image: "https://i.postimg.cc/6q389t6X/tv-627876-1280.jpg", link: "https://mpago.la/14kkSo9" },
    { id: 11, name: "Conjunto Jogo Americano", description: "Estilo e proteção para sua mesa.", price: 250, image: "https://i.postimg.cc/FK5k0Mpy/dinner-table-4926854-1280.jpg", link: "https://mpago.la/1Ymkwqo" },
    { id: 12, name: "Faqueiro", description: "Facas de inox.", price: 380, image: "https://i.postimg.cc/R0BqWcCG/nanjing-10297-1280.jpg", link: "https://mpago.la/28JZ3PA" },
    { id: 13, name: "Mesa Lateral", description: "Compacta e prática para sua sala.", price: 620, image: "https://i.postimg.cc/vHKVZg6S/living-room-table-4037281-1280.jpg", link: "https://mpago.la/2zb6VSX" },
    { id: 14, name: "Tapete", description: "Grande e aconchegante.", price: 1900, image: "https://i.postimg.cc/RZcZxN1t/furniture-998265-1280.jpg", link: "https://mpago.la/18s6Zq3" },
    { id: 15, name: "Mesas de Cabeceira", description: "Conjunto de 2 mesas funcionais.", price: 1850, image: "https://i.postimg.cc/Twcbdtrr/in-the-morning-4652076-1280.jpg", link: "https://mpago.la/1YT2wKN" },
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
        <a class="button" href="${product.link}" target="_blank">
            Contribuir
        </a>
    `;
    productList.appendChild(productDiv);
});
