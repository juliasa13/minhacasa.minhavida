
// script.js

// Lista de itens da casa
const products = [
    {
        id: 1,
        name: "Sofá 2 Lugares",
        description: "Confortável e estiloso.",
        price: 1200,
        image: "https://i.postimg.cc/fJ4yjdcz/sofa.jpg",
        link: "https://mpago.la/2nnsbVJ"
    },
    {
        id: 2,
        name: "Geladeira Frost Free",
        description: "Capacidade de 400L.",
        price: 2500,
        image: "https://i.postimg.cc/bGMpYXLy/geladeira.jpg",
        link: "https://mpago.la/1jM1jRz"
    },
    {
        id: 3,
        name: "Jogo de Panelas",
        description: "Conjunto de 5 peças antiaderentes.",
        price: 300,
        image: "https://i.postimg.cc/9z9FMfvv/panelas.jpg",
        link: "https://mpago.la/15gTR9w"
    },
    {
        id: 4,
        name: "Cama Queen",
        description: "Espaçosa e macia.",
        price: 1500,
        image: "https://i.postimg.cc/tYHRVjb7/cama.jpg",
        link: "https://mpago.la/27HKrJA"
    },
    {
        id: 5,
        name: "Mesa de Jantar",
        description: "Para refeições deliciosas.",
        price: 900,
        image: "https://i.postimg.cc/QKZD5pRv/mesa.jpg",
        link: "https://mpago.la/1RoDpT7"
    },
    {
        id: 6,
        name: "Cadeiras",
        description: "Conjunto de 4 cadeiras confortáveis.",
        price: 700,
        image: "https://i.postimg.cc/wM7jC2Fx/breakfast-7045227-1280.jpg",
        link: "https://mpago.la/15sD4gZ"
    },
    {
        id: 7,
        name: "Talheres",
        description: "Conjunto de talheres de alta qualidade.",
        price: 450,
        image: "https://i.postimg.cc/j58j3mHk/cutlery-377700-1280.jpg",
        link: "https://mpago.la/1cGm7xN"
    },
    {
        id: 8,
        name: "Jogo de Toalhas",
        description: "Toalhas macias e absorventes.",
        price: 400,
        image: "https://i.postimg.cc/T14p1FhW/bathroom-1281614-1280.jpg",
        link: "https://mpago.la/2VHVete"
    },
    {
        id: 9,
        name: "Mesinha de Centro",
        description: "Design elegante para a sala.",
        price: 500,
        image: "https://i.postimg.cc/s2YQmTHt/living-room-8215143-1280.jpg",
        link: "https://mpago.la/1kHuoFM"
    },
    {
        id: 10,
        name: "Smart TV",
        description: "Alta resolução para momentos de lazer.",
        price: 1350,
        image: "https://i.postimg.cc/6q389t6X/tv-627876-1280.jpg",
        link: "https://mpago.la/14kkSo9"
    },
    {
        id: 11,
        name: "Conjunto Jogo Americano",
        description: "Estilo e proteção para sua mesa.",
        price: 250,
        image: "https://i.postimg.cc/FK5k0Mpy/dinner-table-4926854-1280.jpg",
        link: "https://mpago.la/1Ymkwqo"
    },
    {
        id: 12,
        name: "Faqueiro",
        description: "Completo com 24 peças em inox.",
        price: 380,
        image: "https://i.postimg.cc/R0BqWcCG/nanjing-10297-1280.jpg",
        link: "https://mpago.la/28JZ3PA"
    },
    {
        id: 13,
        name: "Mesa Lateral",
        description: "Compacta e prática para sua sala.",
        price: 620,
        image: "https://i.postimg.cc/vHKVZg6S/living-room-table-4037281-1280.jpg",
        link: "https://mpago.la/2zb6VSX"
    },
    {
        id: 14,
        name: "Tapete",
        description: "Grande e aconchegante.",
        price: 1900,
        image: "https://i.postimg.cc/RZcZxN1t/furniture-998265-1280.jpg",
        link: "https://mpago.la/18s6Zq3"
    },
    {
        id: 15,
        name: "Mesas de Cabeceira",
        description: "Conjunto de 2 mesas funcionais.",
        price: 1850,
        image: "https://i.postimg.cc/Twcbdtrr/in-the-morning-4652076-1280.jpg",
        link: "https://mpago.la/1YT2wKN"
    }
];

// Renderizar os produtos na página
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-md-6', 'col-lg-4'); // Classes Bootstrap para responsividade
    productDiv.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="text-success fw-bold">R$ ${product.price.toFixed(2)}</p>
                <a class="btn btn-success w-100" href="${product.link}" target="_blank">
                    Contribuir
                </a>
            </div>
        </div>
    `;
    productList.appendChild(productDiv);
});
