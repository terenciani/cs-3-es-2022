const calculadora = require('../src/calculadora.js')
test('soma dois inteiros', () => {
    let resultado = calculadora.somar(10,18);
    expect(resultado).toEqual(28)
})