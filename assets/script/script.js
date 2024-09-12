const cardsMain = document.querySelector(".cards-containers")

fetch("data.json").then(response => {
    response.json().then(produtos =>{
        produtos.forEach(produto=>{
            cardsMain.innerHTML += `<div class="card">
        <div class="card-top">
          <picture>
            <img class="imagem-produto" src="${produto.image.desktop}" alt="Imagem de ${produto.name}">
          </picture>
          <button class="btn-add-produto">
            <img src="assets/images/icon-add-to-cart.svg" alt="icon de adicionar o carrinho">
            Adicionar ao carrinho
          </button>
        </div>
        <div class="card-bottom">
          <p class="categoria-produto">${produto.category}</p>
          <p class="nome-produto">${produto.name}</p>
          <p class="preco-produto">R$${produto.price}</p>
        </div>
      </div>`
        })
    })
})