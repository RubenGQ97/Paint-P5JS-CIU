var elementos=new Array(3);
let imgPincel,imgGoma,imgClear,flag;
var dibujo=[]; 
var dibujo2=[];
var colores= new Array(36);
let actual=new Array(3);
let posicionText= new Array(2);
let texto= "";

function preload(){

  imgPincel= loadImage("brush.png");
  imgGoma= loadImage("clean.png");
  imgClear= loadImage("new-page.png");
  imgText= loadImage("text.png");
}


function setup() {
  createCanvas(700, 700);
  creaColores();
  flag=false;
  elementos[0]=false;
  elementos[1]=false;
  elementos[2]=false;
  actual[0]=0;
  actual[1]=0;
  actual[2]=0;
  valor=0;
  slider= createSlider(1,50,25);
  slider.position(580,40);
  slider.style('width', '100px');

}




function draw() {
  rect(0,0,700,700);

  menu();
  selector();
  
}


function menu(){
  stroke(0);
  fill(255);
  strokeWeight(2);
  rect(0,0,700,70);
  strokeWeight(1);
  elementos[0] == true ? fill(155): fill(255); 
  rect(650,10,25,25);
  noFill();
  image(imgPincel,652,12,20,20);
  elementos[2] == true ? fill(155): fill(255);
  rect(298,10,25,25);
  image(imgText,300,12,20,20);
  textSize(12);
  fill(0);
  strokeWeight(0);
  text("1. Haz clic donde quieras escribir\n2. Ajusta el tamaño en el slider\n3. Escribe\n4. Pulsa enter para finalizar",100,20);
  strokeWeight(1);
  line(94,0,94,70);
  //line(330,0,330,70);
  noFill();
  elementos[1] == true ? fill(155): fill(255); 
  rect(586,10,25,25);
  image(imgGoma,588,12,20,20);
    noFill();
  rect(0,0,30,40);
  image(imgClear,5,12,20,20);
  line(25,4, 25, 10);
  line(22,7, 28, 7);
  noFill();
  line(500,0,500,70);
  stroke(actual[0],actual[1],actual[2]);
  (actual[0]==255 && actual[1]==255 && actual[2]==255) ? (fill(240),rect(501,3,80,65),noFill()) : true;
  strokeWeight(slider.value());
  line(542.5, 35, 542.5, 35);
  strokeWeight(1);
  
  
}



function mouseClicked(){
  
  /*activar pincel*/
  if(mouseX>=650 && mouseX<=675 && mouseY>=10 && mouseY<=30 ){
    elementos.forEach(function(valor,indice,array){
      array[indice]=false;
    });
    elementos[0]=true
  }
  
  /*Activar escritura*/
  if(mouseX>=298 && mouseX<=323 && mouseY>=10 && mouseY<=35 ){
  elementos.forEach(function(valor,indice,array){
      array[indice]=false;
    });
    elementos[2]=true
  }
  /*activar goma*/
    if(mouseX>=585 && mouseX<=610 && mouseY>=10 && mouseY<=30 ){
    
    elementos.forEach(function(valor,indice,array){
      array[indice]=false;
    });
    elementos[1]=true
  }
  
  /*limpiar todo*/
  (mouseX>=0 && mouseX<=30 && mouseY>=0 && mouseY<=40 ) ? background(255): true;
  
  
  
  
  
  /*Mismo eventos que en mouseDragged por si fuera un solo click*/
  if(elementos[0] && mouseY>=70){
      strokeWeight(slider.value());
    stroke(actual[0],actual[1],actual[2]);
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(1);
    }
  
  if(elementos[1] && mouseY>=70){
      stroke(255);
      strokeWeight(slider.value());
      line(mouseX, mouseY, pmouseX, pmouseY);
      noFill();
      stroke(0);
      strokeWeight(1);
    }
  
  (mouseX>=458 && mouseX<=478 && mouseY>=5 && mouseY<=25 ) ? (actual[0]=colores[0],
                                                              actual[1]=colores[1],
                                                              actual[2]=colores[2]) : (true);
  
  (mouseX>=458 && mouseX<=478 && mouseY>=25 && mouseY<=45 ) ? (actual[0]=colores[3],
                                                               actual[1]=colores[4],
                                                               actual[2]=colores[5]): (true);
  
  (mouseX>=458 && mouseX<=478 && mouseY>=45 && mouseY<=65 ) ? (actual[0]=colores[6],
                                                               actual[1]=colores[7],
                                                               actual[2]=colores[8]): (true);
  
  (mouseX>=438 && mouseX<=458 && mouseY>=5 && mouseY<=25 ) ? (actual[0]=colores[9],
                                                               actual[1]=colores[10],
                                                               actual[2]=colores[11]): (true);
  
  (mouseX>=438 && mouseX<=458 && mouseY>=25 && mouseY<=45 ) ? (actual[0]=colores[12],
                                                               actual[1]=colores[13],
                                                               actual[2]=colores[14]): (true);
  
  (mouseX>=438 && mouseX<=458 && mouseY>=45 && mouseY<=65 ) ? (actual[0]=colores[15],
                                                               actual[1]=colores[16],
                                                               actual[2]=colores[17]): (true);
  
  (mouseX>=418 && mouseX<=438 && mouseY>=5 && mouseY<=25 ) ? (actual[0]=colores[18],
                                                               actual[1]=colores[19],
                                                               actual[2]=colores[20]): (true);
  
  (mouseX>=418 && mouseX<=438 && mouseY>=25 && mouseY<=45 ) ? (actual[0]=colores[21],
                                                               actual[1]=colores[22],
                                                               actual[2]=colores[23]): (true);
  
  (mouseX>=418 && mouseX<=438 && mouseY>=45 && mouseY<=65 ) ? (actual[0]=colores[24],
                                                               actual[1]=colores[25],
                                                               actual[2]=colores[26]): (true);
  
  (mouseX>=398 && mouseX<=418 && mouseY>=5 && mouseY<=25 ) ? (actual[0]=colores[27],
                                                               actual[1]=colores[28],
                                                               actual[2]=colores[29]): (true);
  
  (mouseX>=398 && mouseX<=418 && mouseY>=25 && mouseY<=45 ) ? (actual[0]=colores[30],
                                                               actual[1]=colores[31],
                                                               actual[2]=colores[32]): (true);
  
  (mouseX>=398 && mouseX<=418 && mouseY>=45 && mouseY<=65 ) ? (actual[0]=colores[33],
                                                               actual[1]=colores[34],
                                                               actual[2]=colores[35]): (true);
  
  (mouseY>70 && elementos[2]==true) ? (flag=true,posicionText[0]=mouseX,posicionText[1]=mouseY): true;
}

function mouseDragged(){
  /*Dibujar con pincel*/
  if(elementos[0] && mouseY>=70){
      strokeWeight(slider.value());
    stroke(actual[0],actual[1],actual[2]);
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(1);
    }
  
  if(elementos[1] && mouseY>=70){
      stroke(255);
      strokeWeight(slider.value());
      line(mouseX, mouseY, pmouseX, pmouseY);
      noFill();
      stroke(0);
      strokeWeight(1);
    }
  
 

}

function selector(){
stroke(0);
  fill(0,0,0);
  rect(458,5,20,20);
  fill(155,155,155);
  rect(458,25,20,20);
  fill(255,255,255);
  rect(458,45,20,20);
  fill(colores[9],colores[10],colores[11]);
  rect(438,5,20,20);
  fill(colores[12],colores[13],colores[14]);
  rect(438,25,20,20);
  fill(colores[15],colores[16],colores[17]);
  rect(438,45,20,20);
  fill(colores[18],colores[19],colores[20]);
  rect(418,5,20,20);
  fill(colores[21],colores[22],colores[23]);
  rect(418,25,20,20);
  fill(colores[24],colores[25],colores[26]);
  rect(418,45,20,20);
  fill(colores[27],colores[28],colores[29]);
  rect(398,5,20,20);
  fill(colores[30],colores[31],colores[32]);
  rect(398,25,20,20);
  fill(colores[33],colores[34],colores[35]);
  rect(398,45,20,20);
  
  noFill();
}


function creaColores(){
  
  colores[0] =0;
  colores[1]=0;
  colores[2]=0;
  colores[3]=155;
  colores[4]=155;
  colores[5]=155;
  colores[6]=255;
  colores[7]=255;
  colores[8]=255;
  colores[9]=255;
  colores[10]=0;
  colores[11]=0;
  colores[12]=0;
  colores[13]=255;
  colores[14]=0;
  colores[15]=0;
  colores[16]=0;
  colores[17]=255;
  colores[18]=255;
  colores[19]=255;
  colores[20]=0;
  colores[21]=255;
  colores[22]=155;
  colores[23]=0;
  colores[24]=0;
  colores[25]=240;
  colores[26]=255;
  colores[27]=147;
  colores[28]=0;
  colores[29]=255;
  colores[30]=255;
  colores[31]=0;
  colores[32]=200;
  colores[33]=121;
  colores[34]=65;
  colores[35]=5;


}



function keyPressed(){

  if(key == 'q' && flag==true) texto=texto+"q";
  if(key == 'w' && flag==true) texto=texto+"w";
  if(key == 'e' && flag==true) texto=texto+"e";
  if(key == 'r' && flag==true) texto=texto+"r";
  if(key == 't' && flag==true) texto=texto+"t";
  if(key == 'y' && flag==true) texto=texto+"y";
  if(key == 'u' && flag==true) texto=texto+"u";
  if(key == 'i' && flag==true) texto=texto+"i";
  if(key == 'o' && flag==true) texto=texto+"o";
  if(key == 'p' && flag==true) texto=texto+"p";
  if(key == 'a' && flag==true) texto=texto+"a";
  if(key == 's' && flag==true) texto=texto+"s";
  if(key == 'd' && flag==true) texto=texto+"d";
  if(key == 'f' && flag==true) texto=texto+"f";
  if(key == 'g' && flag==true) texto=texto+"g";
  if(key == 'h' && flag==true) texto=texto+"h";
  if(key == 'j' && flag==true) texto=texto+"j";
  if(key == 'k' && flag==true) texto=texto+"k";
  if(key == 'l' && flag==true) texto=texto+"l";
  if(key == 'z' && flag==true) texto=texto+"z";
  if(key == 'x' && flag==true) texto=texto+"x";
  if(key == 'c' && flag==true) texto=texto+"c";
  if(key == 'v' && flag==true) texto=texto+"v";
  if(key == 'b' && flag==true) texto=texto+"b";
  if(key == 'n' && flag==true) texto=texto+"n";
  if(key == 'm' && flag==true) texto=texto+"m";
  if(key == 'ñ' && flag==true) texto=texto+"ñ";
  
  if(key == 'Q' && flag==true) texto=texto+"Q";
  if(key == 'W' && flag==true) texto=texto+"W";
  if(key == 'E' && flag==true) texto=texto+"E";
  if(key == 'R' && flag==true) texto=texto+"R";
  if(key == 'T' && flag==true) texto=texto+"T";
  if(key == 'Y' && flag==true) texto=texto+"Y";
  if(key == 'U' && flag==true) texto=texto+"U";
  if(key == 'I' && flag==true) texto=texto+"I";
  if(key == 'O' && flag==true) texto=texto+"O";
  if(key == 'P' && flag==true) texto=texto+"P";
  if(key == 'A' && flag==true) texto=texto+"A";
  if(key == 'S' && flag==true) texto=texto+"S";
  if(key == 'D' && flag==true) texto=texto+"D";
  if(key == 'F' && flag==true) texto=texto+"F";
  if(key == 'G' && flag==true) texto=texto+"G";
  if(key == 'H' && flag==true) texto=texto+"H";
  if(key == 'J' && flag==true) texto=texto+"J";
  if(key == 'K' && flag==true) texto=texto+"K";
  if(key == 'L' && flag==true) texto=texto+"L";
  if(key == 'Z' && flag==true) texto=texto+"Z";
  if(key == 'X' && flag==true) texto=texto+"X";
  if(key == 'C' && flag==true) texto=texto+"C";
  if(key == 'V' && flag==true) texto=texto+"V";
  if(key == 'B' && flag==true) texto=texto+"B";
  if(key == 'N' && flag==true) texto=texto+"N";
  if(key == 'M' && flag==true) texto=texto+"M";
  if(key == 'Ñ' && flag==true) texto=texto+"Ñ";

  
  if(key == '0' && flag==true) texto=texto+"0";
  if(key == '1' && flag==true) texto=texto+"1";
  if(key == '2' && flag==true) texto=texto+"2";
  if(key == '3' && flag==true) texto=texto+"3";
  if(key == '4' && flag==true) texto=texto+"4";
  if(key == '5' && flag==true) texto=texto+"5";
  if(key == '6' && flag==true) texto=texto+"6";
  if(key == '7' && flag==true) texto=texto+"7";
  if(key == '8' && flag==true) texto=texto+"8";
  if(key == '9' && flag==true) texto=texto+"9";
  if(key == ' ' && flag==true) texto=texto+" ";
  if(key == ',' && flag==true) texto=texto+",";
  if(key == '.' && flag==true) texto=texto+".";
  (keyCode === ENTER && flag==true) ? (strokeWeight(0),fill(actual[0],actual[1],actual[2]),textSize(slider.value()),stroke(actual[0],actual[1],actual[2]),text(texto,posicionText[0],posicionText[1]),flag=false,texto="",noFill(),strokeWeight(1)):true;
}

