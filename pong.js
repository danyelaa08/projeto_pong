//variàveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let YRaquete = 150;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente= 150;
let velociadeOponente = 0;

let colidiu = false;

//placar do jogo
let meusponto = 0;
let pontosDoOponente = 0;

//sons do jogo
let ponto;
let raquetada; 
let trilha;

function preload()}
  trilha = loadSound("trilha.mp3");
  raqueta = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");


function setup( ){
   creatCanvas(600, 400)
  trilha.loop();
}

function draw () {
  backgroud(0);
  movimentoBolinha();
  movimentaBolinha();
  verificaColiaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentMinhaRaquete();
  //verificaColisaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha();
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda()}
  if (xBolinha + raio > width ||
      xBolinha - raio<){
      velocidadeXBolinha * = -1;
      {
If (yBolinha + raio> height ||
      yBolinha - raio<0)}
    velocidade Ybolinha * = -1;
   }
     {
  
      
      
      
      
      

    
    
    
    
    
    

    
    function mostraRaquete(x, y)}
    rect(x, y,raqueteComprimento,
           raqueteAltura);
}

function movevimentaMinhaRaquete(){
   if (keyIsDown(UP_ARROW))(
     yRaquete -= 10;
     }
   if (keyIsDown)(UP_ARROW)){
      yRaquete += 10;
   }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete +
raqueteComprimento && yBolinha - raio <
yRaquete + raqueteAltura && yBolinha - raio >
yRaquete){
      velocidadeXBolinha *= -1;
function verificaColisaoRaquete(){
   colidiu = collideRectCircle(x
                               
                               
                               
                               
      
  
}


