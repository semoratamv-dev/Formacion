const miLista =['🥧','🍔','🥨','🍦','🧁','🍬','🍮','🚠','🪂','🧀','🥩','🍤'];
let longLista=miLista.length;

// ======= BUCLE FOR =======
function bucleFor() {
	console.log("Bucle For ------");
	for (let i = 0; i < longLista; i++) {
		console.log(`${i+1}: ${miLista[i]}`);
	}
	console.log("Fin de For ------");
} // fin de Función bucleFor

// ======= BUCLE WHILE =======
function bucleWhile() {
	console.log("Bucle while ------");
	i=0;
	while (i<longLista) 	{
		console.log(`${i+1}: ${miLista[i]}`);
		i++;
	}
	console.log("Fin bucle while------");
} // fin de Función bucleWhile

// ======= BUCLE FOR EACH =======
function bucleForEach() {
	console.log("Bucle for each------");
	miLista.forEach((mLista, index) => {console.log(`${index+1}: ${miLista[index]}`);});
	console.log("Fin bucle for each------");
}
document.get