/* It's declaring the variables. */
let tentativas = 6
let palavraSecretaCategoria
let palavraSecretaSorteada

/* It's an empty array that will be used to store the letters that the user has guessed. */
let listaDinamica = []

/* It's an array of objects. */
const palavras = [
  (palavra001 = {
    nome: 'IRLANDA',
    categoria: 'PAISES'
  }),
  (palavra002 = {
    nome: 'EQUADOR',
    categoria: 'PAISES'
  }),
  (palavra003 = {
    nome: 'CHILE',
    categoria: 'PAISES'
  }),
  (palavra004 = {
    nome: 'INDONESIA',
    categoria: 'PAISES'
  }),
  (palavra005 = {
    nome: 'ISRAEL',
    categoria: 'PAISES'
  }),
  (palavra006 = {
    nome: 'INGLATERRA',
    categoria: 'PAISES'
  }),
  (palavra007 = {
    nome: 'PORTUGAL',
    categoria: 'PAISES'
  }),
  (palavra008 = {
    nome: 'ALEMANHA',
    categoria: 'PAISES'
  }),
  (palavra009 = {
    nome: 'ARGENTINA',
    categoria: 'PAISES'
  }),
  (palavra010 = {
    nome: 'ESPANHA',
    categoria: 'PAISES'
  }),
  (palavra011 = {
    nome: 'BICICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra012 = {
    nome: 'LANCHA',
    categoria: 'TRANSPORTE'
  }),
  (palavra013 = {
    nome: 'NAVIO',
    categoria: 'TRANSPORTE'
  }),
  (palavra014 = {
    nome: 'TELEFERICO',
    categoria: 'TRANSPORTE'
  }),
  (palavra015 = {
    nome: 'MOTOCICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra016 = {
    nome: 'BARCO',
    categoria: 'TRANSPORTE'
  }),
  (palavra017 = {
    nome: 'AERONAVE',
    categoria: 'TRANSPORTE'
  }),
  (palavra018 = {
    nome: 'TREM',
    categoria: 'TRANSPORTE'
  }),
  (palavra019 = {
    nome: 'CAIAQUE',
    categoria: 'TRANSPORTE'
  }),
  (palavra020 = {
    nome: 'FUNICULAR',
    categoria: 'TRANSPORTE'
  }),
  (palavra021 = {
    nome: 'XICARA',
    categoria: 'OBJETOS'
  }),
  (palavra022 = {
    nome: 'MOEDA',
    categoria: 'OBJETOS'
  }),
  (palavra023 = {
    nome: 'ESPARADRAPO',
    categoria: 'OBJETOS'
  }),
  (palavra024 = {
    nome: 'SINO',
    categoria: 'OBJETOS'
  }),
  (palavra025 = {
    nome: 'CHUVEIRO',
    categoria: 'OBJETOS'
  }),
  (palavra026 = {
    nome: 'TAMBORETE',
    categoria: 'OBJETOS'
  }),
  (palavra027 = {
    nome: 'LAMPADA',
    categoria: 'OBJETOS'
  }),
  (palavra028 = {
    nome: 'BOCAL',
    categoria: 'OBJETOS'
  }),
  (palavra029 = {
    nome: 'CORTINA',
    categoria: 'OBJETOS'
  }),
  (palavra030 = {
    nome: 'LAPIS',
    categoria: 'OBJETOS'
  }),
  (palavra031 = {
    nome: 'MELANCIA',
    categoria: 'ALIMENTOS'
  }),
  (palavra032 = {
    nome: 'AMENDOIM',
    categoria: 'ALIMENTOS'
  }),
  (palavra033 = {
    nome: 'ESFIRRA',
    categoria: 'ALIMENTOS'
  }),
  (palavra034 = {
    nome: 'GOROROBA',
    categoria: 'ALIMENTOS'
  }),
  (palavra035 = {
    nome: 'JANTAR',
    categoria: 'ALIMENTOS'
  }),
  (palavra036 = {
    nome: 'SABOROSO',
    categoria: 'ALIMENTOS'
  }),
  (palavra037 = {
    nome: 'DESJEJUM',
    categoria: 'ALIMENTOS'
  }),
  (palavra038 = {
    nome: 'MASTIGAR',
    categoria: 'ALIMENTOS'
  }),
  (palavra039 = {
    nome: 'ENGOLIR',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'DOCERIA',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'DRAGAO',
    categoria: 'ANIMAIS'
  }),
  (palavra041 = {
    nome: 'GALINHA',
    categoria: 'ANIMAIS'
  }),
  (palavra042 = {
    nome: 'PAVAO',
    categoria: 'ANIMAIS'
  }),
  (palavra043 = {
    nome: 'CAMELO',
    categoria: 'ANIMAIS'
  }),
  (palavra044 = {
    nome: 'PERU',
    categoria: 'ANIMAIS'
  }),
  (palavra045 = {
    nome: 'ZEBRA',
    categoria: 'ANIMAIS'
  }),
  (palavra046 = {
    nome: 'DROMEDARIO',
    categoria: 'ANIMAIS'
  }),
  (palavra047 = {
    nome: 'CALANGO',
    categoria: 'ANIMAIS'
  }),
  (palavra048 = {
    nome: 'SAGUI',
    categoria: 'ANIMAIS'
  }),
  (palavra049 = {
    nome: 'LAGARTIXA',
    categoria: 'ANIMAIS'
  }),
  (palavra050 = {
    nome: 'HIPOPOTAMO',
    categoria: 'ANIMAIS'
  })
]

/**
 * It creates a random number between 0 and the length of the array, then uses that number to select a
 * random word from the array.
 */
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
}
/**
 * It creates a div for each letter of the word to be guessed, and if the letter has been guessed, it
 * displays it, otherwise it displays a blank space.
 */

function criarPalavraTela() {
  const categoria = document.getElementById('categoria')
  categoria.innerHTML = palavraSecretaCategoria

  const palavraTela = document.getElementById('palavra-secreta')
  palavraTela.innerHTML = ''

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = '&nbsp'
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        '</div>'
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        '</div>'
    }
  }
}

/**
 * It takes a letter as an argument, disables the button, and then calls three other functions.
 * @param letra - the letter that was pressed
 */
function verificaLetraEscolhida(letra) {
  document.getElementById('tecla-' + letra).disabled = true
  if (tentativas > 0) {
    mudarStyleLetra('tecla-' + letra)
    comparaLista(letra)
    criarPalavraTela()
  }
}


/**
 * When the user clicks on a button, change the background color of the button to green and the text
 * color to white.
 * @param tecla - the key that was pressed
 */
function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = 'rgba(65, 184, 131, 1) 0%'
  document.getElementById(tecla).style.color = '#ffffff'
}

/**
 * It compares the letter that the user has typed with the letters in the secret word, and if it finds
 * a match, it replaces the underscore with the letter.
 * @param letra - the letter that the user typed
 */
function comparaLista(letra) {
  const posicao = palavraSecretaSorteada.indexOf(letra)
  if (posicao < 0) {
    tentativas--

    carregaImagemForca()
    if (tentativas == 0) {
      abreModal(
        'OPS!',
        'Não foi dessa vez... A palavra secreta era <br>' +
          palavraSecretaSorteada
      )
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra
      }
    }
  }

  let vitoria = true

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false
    }
  }

  if (vitoria == true) {
    abreModal('Parabéns!!', 'Você venceu!! :)')
    tentativas = 0
  }
}

/**
 * If the number of attempts is 5, then change the background image to forca01.png, otherwise if the
 * number of attempts is 4, then change the background image to forca02.png, otherwise if the number of
 * attempts is 3, then change the background image to forca03.png, otherwise if the number of attempts
 * is 2, then change the background image to forca04.png, otherwise if the number of attempts is 1,
 * then change the background image to forca05.png, otherwise if the number of attempts is 0, then
 * change the background image to forca06.png, otherwise change the background image to forca.png.
 */
function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca01.png)'
      break
    case 4:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca02.png)'
      break
    case 3:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca03.png)'
      break
    case 2:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca04.png)'
      break
    case 1:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca05.png)'
      break
    case 0:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca06.png)'
      break
    default:
      document.getElementById('imagem').style.background =
        'url(./imagens/forca.png)'
      break
  }
}


/**
 * It takes two parameters, a title and a message, and then it sets the title and message of the modal,
 * shows the modal, and then adds an event listener to the close button that reloads the page when
 * clicked.
 * @param titulo - The title of the modal
 * @param mensagem - The message that will be displayed in the modal.
 */

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById('modal-titulo')
  modalTitulo.innerText = titulo

  let modalMensagem = document.getElementById('modal-mensagem')
  modalMensagem.innerHTML = mensagem

  $('#myModal').modal({
    show: true
  })

  let btnFechar = document.getElementById('btn-fechar')

  btnFechar.addEventListener('click', function () {
    location.reload()
  })
}


let btnReiniciar = document.querySelector('#btnReiniciar')

btnReiniciar.addEventListener('click', function () {
  location.reload()
})
criarPalavraSecreta()
criarPalavraTela()
