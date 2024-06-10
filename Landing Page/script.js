function atualizarQuantidade(itemNome, quantidade) {
   let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
   const itemIndex = carrinho.findIndex(i => i.nome === itemNome);
    
   //quando o carrinho estiver vazio ele o itemIndex retorna -1
   if (itemIndex !== -1) {
       // Atualiza a quantidade do item no carrinho
       carrinho[itemIndex].quantidade += quantidade;
       if (carrinho[itemIndex].quantidade <= 0) {
           // Se a quantidade for menor ou igual a zero, remove o item do carrinho
           carrinho.splice(itemIndex, 1);
       }
   }

   // Atualiza o LocalStorage
   localStorage.setItem('carrinho', JSON.stringify(carrinho));

   // Redireciona de volta para o carrinho
   window.location.href = "carrinho.html";
}

function exibirCarrinho() {
   const carrinhoDiv = document.getElementById('carrinho');
   carrinhoDiv.innerHTML = '';

   const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

   carrinho.forEach(item => {
       const itemDiv = document.createElement('div');
       itemDiv.textContent = `${item.nome} - Quantidade: ${item.quantidade}`;

       const aumentarBtn = document.createElement('button');
       aumentarBtn.textContent = '+';
       aumentarBtn.onclick = () => atualizarQuantidade(item.nome, 1);

       const diminuirBtn = document.createElement('button');
       diminuirBtn.textContent = '-';
       diminuirBtn.onclick = () => atualizarQuantidade(item.nome, -1);

       const removerBtn = document.createElement('button');
       removerBtn.textContent = 'Remover';
       removerBtn.onclick = () => atualizarQuantidade(item.nome, -item.quantidade);

       itemDiv.appendChild(aumentarBtn);
       itemDiv.appendChild(diminuirBtn);
       itemDiv.appendChild(removerBtn);

       carrinhoDiv.appendChild(itemDiv);
   });
}

// Exibe o carrinho ao carregar a página
exibirCarrinho();
