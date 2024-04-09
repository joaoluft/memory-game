# Memory Game

Requisitos Funcionais:
Tabuleiro Personalizavel: Permitir o usuario escolher o tamanho do tabuleiro (quantidade de cartas), como 4x4, 6x6 e etc;
Temporizador: Tem que ter um temporizador que conta o tempo desde o inicio do jogo ate a sua conclusao;
Niveis de dificuldade: cada dificuldade determina o tempo maximo que o user tem para resolver o jogo. Adicione uma dificuldade Hardcore, que o usuario apenas possui 3 chances de errar uma mesma carta, alem do tempo;
Placar de Lideres: o user insere seu nome antes de jogar, e deve ir salvando um highscore;
Efeitos Visuais e Sonoros: adicione efeitos visuais (animacoes ao virar as cartas, completar um par e etc) e sonoros (quando um par eh encontrado, quando vence e quando perde)
 
Requisitos Tecnicos:
A logica deve estar devidamente separada da interface;
Utilizar custom hooks para o gerenciamento de estados e effects;
Assegure que o jogo seja responsivo, podendo ser jogado em diferentes tamanhos de tela;


[13:16] Julia Eileen Schäfer
so pra resumir a funcionalidade:
 
inicia com todas as cartas de costas.
user clica numa delas vira e mostra ela, ela fica aparecendo na tela.
quando o user clicar numa outra carta, revela esta, se for igual a anterior, remove o par.
se for diferente da anterior vira as duas de costas novamente. (mantem elas por no minimo 1.5s na tela antes de virar)


Cores:
#1C1678 (Azul escuro)
#8576FF (Roxo)
#7BC9FF (Azul claro)
#A3FFD6 (Verde agua)