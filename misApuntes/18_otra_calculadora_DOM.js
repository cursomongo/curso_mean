var Calculadora = function (padreDom) {
		
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.operadorA = this.addInput("Operando A", "operadorA");
	this.operadorB = this.addInput("Operando B", "operadorB");
	this.addButton(" + ", this.suma);
	this.addButton(" - ", this.resta);
	this.addButton(" * ", this.multiplica);
	this.addButton(" / ", this.division);
	this.resultado = this.addInput("Resultado", "resultado");
}
Calculadora.prototype.addInput = function(texto, nombre) {		
	var texto = document.createTextNode(texto);
	this.formCalc.appendChild(texto);
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	this.formCalc.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}
Calculadora.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
Calculadora.prototype.suma = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   + parseInt(this.operadorB.value);
}
Calculadora.prototype.resta = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   - parseInt(this.operadorB.value);
}
Calculadora.prototype.multiplica = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   * parseInt(this.operadorB.value);
}
Calculadora.prototype.division = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   / parseInt(this.operadorB.value);
}