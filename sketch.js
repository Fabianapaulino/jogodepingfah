//variaveis bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// variaveis velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura =90;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let trilha;
let ponto;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoMinhaRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  fill (175, 100, 220)
  circle(xBolinha,yBolinha,diametro);
  fill (175, 100, 220)
  }

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBorda(){
  if (xBolinha + raio> width || 
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha -raio< 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;  
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;  
  }
}
  
function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
  {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function verificaColisaoMinhaRaquete(x, y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
     raquetada.play();
  }
}
function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
    yRaqueteOponente -= 10;  
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;  
}
}
function incluiPlacar(){
  stroke(255);
  textAlign (CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill (color(255,140,0))
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente += 1; 
    ponto.play();
}
} 
