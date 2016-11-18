var app = angular.module("app", []);

app.factory("libros", function(){
	return{
		librosFactoria:[
		{
			id: 0,
			titulo: "El manuscrito de Avicena",
			sinopsis: "El doctor Simón Salvatierra decide ir a encontrarse con su esposa en San Petersburgo," +  
			"donde ella trabaja investigando un misterioso manuscrito creado por el médico persa Avicena mil años antes. " + 
			"Sin previo aviso el viaje de Simón se convertirá en una dura prueba de valor con persecuciones a 200 km/hora, " +
			"intentos de asesinato y oscuras maniobras policíacas, cuando ella es secuestrada por Al Qaeda. Un espía español" + 
			"encubierto y una empleada del Museo Británico serán el único apoyo del doctor en una carrera contra el mundo por " +
			"salvar a la mujer de su vida.",
			img: "manuscritoAvicena.jpg"
		},
		{
			id: 1,
			titulo: "La isla de las mariposas",
			sinopsis: "El mismo día en que descubre que su marido le es infiel, la joven abogada Diana recibe la noticia " + 
			"de que su adorada tía abuela Emmely está muy enferma. Sin pensárselo dos veces, Diana toma el primer vuelo a " +
			"Inglaterra para despedirse de ella. Emmely tiene una última voluntad: Diana debe esclarecer un antiguo secreto familiar.",
			img: "Laisladelasmariposas.jpg"
		},
		{
			id: 2,
			titulo: "La columna de hierro",
			sinopsis: "Esta novela legendaria, fruto de nueve años de trabajo e investigación, es una fascinante recreación de la vida " +
			"de Marco Tulio Cicerón en la Roma imperial. Gracias a este trabajo, Taylor consigue describir el mundo de la antigua Roma " +
			"con gran exactitud y captar el alcance de una figura tan excepcional y controvertida como la de Cicerón. Agudo analista del " +
			"mundo que le rodeaba, Cicerón fue también una persona adelantada a su tiempo cuya clarividencia le hizo ganarse tantos amigos " +
			"como enemigos. Pero más allá de la reconstrucción histórica fidedigna, La columna de hierro también es una apasionante novela " +
			"donde se cruzan las intrigas palaciegas, las pasiones y los crímenes, donde salen a relucir las cuestiones que más preocupaban " +
			"a Cicerón: la religión, la política y la guerra.",
			img: "Lacolumnadehierro.jpg"
		},
		{
			id: 3,
			titulo: "El Asesinato de Pitágoras",
			sinopsis: "El anciano filósofo Pitágoras es uno de los personajes con más poder político de su época. Está a punto de nombrar " +
			"un sucesor entre sus grandes maestros cuando en su comunidad se inicia una serie de asesinatos. Cada muerte tiene lugar " +
			"de un modo más desconcertante e imprevisible, reflejando tras ellas una mente oscura y poderosa que parece superar a la del " +
			"mismísimo Pitágoras.",
			img: "Elasesinatodepitagoras.jpg"
		},
		{
			id: 4,
			titulo: "La verdad sobre el caso Harry Quebert",
			sinopsis: "Quién mató a Nola Kellergan es la gran incógnita a desvelar en este thriller incomparable cuya experiencia de lectura " +
			"escapa a cualquier tentativa de descripción. Intentémoslo: una gran novela policiaca y romántica a tres tiempos −1975, 1998 y " +
			"2008− acerca del asesinato de una joven de quince años en la pequeña ciudad de Aurora, en New Hampshire. En 2008, Marcus Goldman, " +
			"un joven escritor, visita a su mentor −Harry Quebert, autor de una aclamada novela−, y descubre que éste tuvo una relación secreta " +
			"con Nola Kellergan. Poco después, Harry es arrestado, acusado de asesinato, al encontrarse el cadáver de Nola enterrado en su jardín. " +
			"Marcus comienza a investigar y a escribir un libro sobre el caso. Mientras intenta demostrar la inocencia de Harry, una trama de " +
			"secretos sale a la luz. La verdad sólo llega al final de un largo, intrincado y apasionante recorrido",
			img: "LaverdadsobreelcasoHarryQuebert.jpg"
		}
		]
	}
})
