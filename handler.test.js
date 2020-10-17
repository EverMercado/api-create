const handler = require('./src/handler.js');

test('obtenerUno', () => {
	const res = handler.obtenerUno(1);
	expect(res.statusCode).not.toBeNull();
});

test('obtenerUno', () => {
	const res = handler.obtenerUno(2);
	expect(res.statusCode).not.toBeNull();
});

test('crearNuevo', () => {
	const res = handler.crearNuevo({nombre:'Pluton'});
	expect(res.statusCode).not.toBeNull();
});

test('crearNuevo', () => {
	const res = handler.crearNuevo({nombre:'Jupiter'});
	expect(res.statusCode).not.toBeNull();
});
