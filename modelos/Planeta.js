class Planeta {

    constructor({
        id = undefined,
        nombre = undefined,
        periodo_rotacion = undefined,
        periodo_orbital = undefined,
        diametro = undefined,
        clima = undefined,
		gravedad = undefined,
		terreno = undefined,
		superficie_agua = undefined,
		poblacion = undefined,
		url = undefined,
    }){
        this.id = id;
        this.nombre = nombre;
        this.periodo_rotacion = periodo_rotacion;
        this.periodo_orbital = periodo_orbital;
        this.diametro = diametro;
        this.clima = clima;
        this.gravedad = gravedad;
		this.terreno = terreno;
		this.superficie_agua = superficie_agua;
		this.poblacion = poblacion;
		this.url = url;
    }
}

module.exports = Planeta;