const container = document.querySelector('.container');

let url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;

function getProdutos() {
    fetch(url)
        .then(async resp => await resp.json())
        .then(r => {
            url = `https://${r.nextPage}`;
            createCardProduct(r.products);
        });
}

function createCardProduct(products) {
    products.forEach(produto => {



        const card = document.createElement('div');

        const cardImage = document.createElement('img');
        cardImage.src = produto.image;


        //inserting each element inside another or assibling together
        container.insertAdjacentElement("beforeend", card);
        card.insertAdjacentElement("afterbegin", cardImage);
    })
}

getProdutos()