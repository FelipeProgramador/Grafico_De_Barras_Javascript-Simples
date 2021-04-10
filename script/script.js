

		// funçao para desenhar a barra
		 function desenhaBarra(x,y,cor){
		 	var tela = document.querySelector('canvas');
		 	var pincel = tela.getContext('2d');

		 	pincel.fillStyle = cor;
		 	pincel.fillStroke = 'black';
		 	pincel.fillRect(x,y,100,100);
		 	pincel.strokeRect(x,y,100,100);


		 }
		 // funçao para escrever o texto v = vertical, h = horizontal
		function desenhaTexto(texto,v,h){
			var tela = document.querySelector('canvas');
		 	var pincel = tela.getContext('2d');

		 	pincel.font = '30px Verdana';
		 	pincel.fillStyle = 'black';
		 	pincel.fillText(texto,v,h);


		} 
		function desenhaPorcentagens(texto,v2,h2){
			var tela = document.querySelector('canvas');
		 	var pincel = tela.getContext('2d');

		 	pincel.font = '10px Verdana';
		 	pincel.fillStyle = 'black';
		 	pincel.fillText(texto,v2,h2);
		}
		//desenha o texto 
		 desenhaTexto('2015',60,100);
		 desenhaTexto('2016',310,100);
		 // variaveis do desenhaBarra
		 var larguraBarra = 50; 
		 var alturaBarra = 90;
		 desenhaBarra(larguraBarra,alturaBarra+95,'red');
		 desenhaBarra(larguraBarra,alturaBarra+90,'yellow');
		 desenhaBarra(larguraBarra,alturaBarra+75,'green');
		 desenhaBarra(larguraBarra,alturaBarra+50,'blue');
		// terminar o resto do código

		var larguraBarra2 = 300;
		var alturaBarra2 = 90;
		desenhaBarra(larguraBarra2,alturaBarra2+95,'red');
		 desenhaBarra(larguraBarra2,alturaBarra2+90,'yellow');
		 desenhaBarra(larguraBarra2,alturaBarra2+75,'green');
		 desenhaBarra(larguraBarra2,alturaBarra2+50,'blue');

		 desenhaPorcentagens('chrome',5,160);
		 desenhaPorcentagens('firefox',5,250);
		 desenhaPorcentagens('safari',5,275);
		 desenhaPorcentagens('outros',5,290);
		 //--
		 desenhaPorcentagens('chrome',250,160);
		 desenhaPorcentagens('firefox',250,250);
		 desenhaPorcentagens('safari',250,275);
		 desenhaPorcentagens('outros',250,290);
		 //--
		 desenhaPorcentagens('50%',155,160);
		 desenhaPorcentagens('25%',155,250);
		 desenhaPorcentagens('15%',155,275);
		 desenhaPorcentagens('5%',155,290);
		 //--
		 desenhaPorcentagens('65%',405,160);
		 desenhaPorcentagens('20%',405,250);
		 desenhaPorcentagens('13%',405,275);
		 desenhaPorcentagens('3%',405,290);