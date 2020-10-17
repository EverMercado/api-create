const PlanetaService = require('./service/PlanetaService');

function HTTPError (statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

module.exports.crearNuevo = async (event) => {
  try {
    const savePlaneta = await PlanetaService.savePlanetas(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(savePlaneta)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'No se pudo insertar un nuevo planeta.'
    }
  }
}

module.exports.obtenerUno = async (event) => {
  try {
    const planeta = await PlanetaService.getPlaneta(event.pathParameters.id)
    if (!planeta) throw new HTTPError(404,'Planeta con id: '+event.pathParameters.id+ ' no fue encontrado')
    return {
      statusCode: 200,
      body: JSON.stringify(planeta)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'No se encontró datos del planeta.'
    }
  }
}
