/**
 * CLASE ALUMNO
 */

class Alumno {
	// Constructor
	constructor(idAlumno, nombre, apellidos, telefono, marca, modelo) {
		this.idAlumno = idAlumno;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.marca = marca;
		this.modelo = modelo;
		// El idPortatil será la concatenación entre las tres primeras letras de la marca
		// y las tres primeras del modelo con un guion '-' entre medias.
		// Si la marca o el modelo tuviera menos de tres letras, se coge entera
		this.idPortatil;
		if(this.marca.length < 3)
			this.idPortatil = this.marca.substring(0) + "-";
		else
			this.idPortatil = this.marca.substring(0, 3) + "-";
		
		if(this.marca.length < 3)
			this.idPortatil += this.modelo.substring(0);
		else
			this.idPortatil += this.modelo.substring(0, 3);
	}
	
	// Métodos
	matriculaAlumno(lista){
		// Pedimos nombre, apellidos, teléfono, marca portátil y modelo portátil
		let nombre = prompt("Introduzca su nombre: ");
		let apellidos = prompt("Introduzca sus apellidos: ");
		let telefono = prompt("Introduzca su telefono: ");
		let marcaP = prompt("Introduzca su marca de portatil: ");
		let modeloP = prompt("Introduzca su modelo de portatil: ");
		
		let persona = new Alumno(this.calculoIdAlumno(lista), nombre, apellidos, telefono, marcaP, modeloP)
		
		lista.push(persona);
		
		return lista;
	}
	
	/**
	 * Método auxiliar para sacar el id del nuevo alumno
	 */
	calculoIdAlumno(lista){
		let maxID = 0;
		for(let i = 0; i < lista.length; i++){
			if(lista[i].idAlumno > maxID)
				maxID = lista[i].idAlumno;
		}
		
		return maxID + 1;
	}
	
	borrarAlumno(lista){
		// Borraremos el alumno por el id
		// Preguntamos el id del alumno a eliminar
		let idAlum = prompt("Introduzca el id del alumno a eliminar: ");
		// Recorremos la lista y si encontramos el id lo eliminaremos de la lista
		for(let i = 0; i < lista.length; i++){
			if(lista[i].idAlumno == idAlum)
			{
				lista.splice(i, 1);
				break;
			}
		}
		
		return lista;
	}
	
	listarAlumno(lista){
		// Mostraremos en una alerta los alumnos
		lista.forEach(function(i){
			alert("ID: " + i.idAlumno + "; Nombre: " + i.nombre + "; Apellidos: "+ i.apellidos + "; Telefono: "
					+ i.telefono + "; IDPortatil: " + i.idPortatil + "; Marca: " + i.marca + "; Modelo: "+ i.modelo + ";")
		})
	}
}



let opcion;
var lista = [];
let persona = new Alumno(0, "aaaa", "aaaa", "aaaa", "aaaa", "aaaa");
do{
	// Mostraremos el menu y guardaremos la opción escogida en una variable
	opcion = prompt("1) Matricula de alumno\n2) Borrar alumno\n3)Listar alumnos con su portatil\n0) Salir");
	
	
	// Si le damos a cancelar devuelve null, al pasarle Number devuelve un 0
	// Si le damos a aceptar sin introducir nada devuelve un string vacio, al pasarle Number devuelve un 0
	while(opcion == null || opcion == ""){
		opcion = prompt("** Error: No se ha introducido ninguna opcion **\n1) Matricula de alumno\n2) Borrar alumno\n3)Listar alumnos con su portatil\n0) Salir");
	}
	
	// Tiene que estar entre 0 y 3
	while(opcion != "0" && opcion != "1" && opcion != "2" && opcion != "3"){
		opcion = prompt("** Error: El valor no esta dentro del rango **\n1) Matricula de alumno\n2) Borrar alumno\n3)Listar alumnos con su portatil\n0) Salir");
	}
	
	opcion = Number(opcion);
	switch(opcion){
		case 1:
			// Matricula alumno
			
			lista = persona.matriculaAlumno(lista);
			break;
		case 2:
			// Borrar alumno
			lista = persona.borrarAlumno(lista);
			break;
		case 3:
			// Listar Alumnos
			persona.listarAlumno(lista);
			break;
	}
}while(opcion != 0);