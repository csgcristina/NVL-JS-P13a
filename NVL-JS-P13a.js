function sacarPrimos (n) {
	var primos=[];
	var numero=2;

	while (n>0) {
		var contador=0;
		for (var dividendo=numero; dividendo>1; dividendo--) {
			if (numero%dividendo==0) {
				contador++;
			}
		}
		if (contador==1) {
			n--;
			primos.push(numero);
		}
		numero++;
	}
	alert("Los"+n+"primeros primos son:"+primos);
}
sacarPrimos(6);