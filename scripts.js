const inputProduto = document.getElementById('produto')

const respostah4 = document.getElementById('resposta')


function consultarPreco() {
    const produto = inputProduto.value.toLocaleLowerCase();
    switch (produto) {
        
        case 'morango':

          respostah4.innerText = 'R$ 5,99/Kg'
            break;
        
        case 'laranja':
        
            respostah4.innerText = 'R$ 7,99/Kg'
            break;
        
        case 'sair':
        case '0':
            respostah4.innerText = 'Programa Encerrado'
            break;
            continua = false; 
    
        default:
            respostah4.innerText = 'Produto não cadastrado'
            break;
      }
    }