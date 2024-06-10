// Adicionando um evento de clique a todos os botões com a classe 'button'
var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Desativa o botão
            //button.disabled = true;

            var h2 = this.closest('.card-conteudo').querySelector('h2');
            var itemName = h2.textContent;

            // Cria o objeto do item
            const item = { nome: itemName, quantidade: 1 };

             // Verifica se já existe o item no carrinho
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            const itemExistenteIndex = carrinho.findIndex(i => i.nome === itemName);

            if (itemExistenteIndex !== -1) {
                // Se o item já existe, incrementa a quantidade
                carrinho[itemExistenteIndex].quantidade++;
            } else {
                // Se o item não existe, adiciona ao carrinho
                carrinho.push(item);
            }

            // Atualiza o LocalStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

        });
    });