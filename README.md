
# Jogo da forca / Hangman game

# [PT-BR]

- O código começa criando as variáveis, sendo "tentativas" o máximo que o usuário pode tentar advinhar.
- Em seguida, é criado uma array vazia que será usada para armazenar as letras que o usuário adivinhou.
- Uma outra array de objetos é criada, esses são as palavras e categoria que podem ser sorteadas.
- A função criarPalavraSecreta(), cria um número aleatório entre 0 e o comprimento do array, então usa esse número para selecionar uma
  palavra aleatória da array.
- A função criaPalavraTela(), cria uma div para cada letra da palavra a ser adivinhada, e caso a letra tenha sido adivinhada,
  exibe, caso contrário, exibe um espaço em branco.
- A função mudarStyleLetra(tecla), quando o usuário clicar em um botão, altere a cor de fundo do botão para verde e o texto
  cor para branco. @parametro tecla - a tecla que foi pressionada.
- A função comparaLista(tecla), compara a letra que o usuário digitou com as letras da palavra secreta, e se encontrar
  uma correspondência, substitui o sublinhado pela letra. @parametro tecla - a tecla que foi pressionada.
- A função verificaLetraEscolhida(letra), recebe uma letra como argumento, desabilita o botão e então chama três outras funções: mudarStyleLetra, comparaLista, criaPalavraTela.
  @parametro letra - a letra que foi pressionada.
- A função carregaImagemForca(), carrega as imagens correspondentes ao número de tentativas. Exemplo: se o número de tentativas for 5, altere a imagem de fundo para forca01.png.
- A função abreModal(titulo, mensagem), leva dois parâmetros, um título e uma mensagem, e então define o título e a mensagem do modal, mostra o modal e, em seguida, adiciona um ouvinte de evento ao botão Fechar que recarrega a página quando
  clicado. @parametro titulo - O título do modal. @parametro mensagem - A mensagem que será exibida no modal.
- O código finaliza criando uma variável btnReiniciar, e adicionando um evento de click chamando a função de reload da pagina.
- E para iniciar o jogo, chama as funções: criarPalavraSecreta(), criarPalavraTela()

# [EN]

- The code starts as variables, with "tentativas" being the most the user can try to guess.
- Next, an empty array is created that will be used to store the letters that the user guessed.
- Another array of objects is created, these are the words and category that can be selected.
- The function criarPalavraSecreta(), creates a random number between 0 and the length of the array, then uses that number to select a random word from the array.
- The function criaPalavraTela(), creates a div for each letter of the word to be guessed, and if the letter has been guessed, displays, otherwise displays a blank.
- The mudarStyleLetra(tecla) function, when the user clicks on a button, change the background color of the button to green and the text color to white. @parameter tecla - the key that was pressed.
- The function comparaLista(tecla), compares the letter that the user typed with the letters of the secret word, and if it finds a match, replaces the underscore with the letter. @parameter tecla - the key that was pressed.
- The function verificaLetraEscolhida(letra), takes a letter as an argument, disables the button and then calls three other functions: mudarStyleLetra, comparaLista, criaPalavraTela.
  @parameter letra - the letter that was pressed.
- The carregaImagemForca() function loads the images corresponding to the number of attempts. Example: if the number of attempts is 5, change the background image to force01.png.
- The function abreModal(titulo, mensagem), takes two parameters, a title and a message, and then sets the modal's title and message, displays the modal, and then adds an event listener to the Close button that reloads the page when
  clicked. @parametro titulo - The title of the modal. @parametro mensagem - The message that will be displayed in the modal.
- The code ends by creating a variable btnReiniciar, and adding a click event calling the page reload function.
- And to start the game, call the functions: criarPalavraSecreta(), criarPalavraTela()
