const handlerElephants = require('../src/handlerElephants');

const elephantsNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
const elephantsLocation = 'NW';
const elephantsAvailability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se a função handlerElephants retorna undefined caso não receba nenhum parâmetro', () => {
    expect(handlerElephants('names')).toEqual(elephantsNames);
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se o parametro passado não for string retorna mensagem: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(25)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna corretamente parâmentro que são keys do objeto, ex.: ao colocar location como parâmetro retorna NW', () => {
    expect(handlerElephants('location')).toBe(elephantsLocation);
    expect(handlerElephants('availability')).toEqual(elephantsAvailability);
    expect(typeof handlerElephants('popularity')).toBe('number');
  });
  it('Verifica se ao passar o parâmetro count, retorna o número de Elefantes no zoo', () => {
    expect(typeof handlerElephants('count')).toBe('number');
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se ao passar o parâmetro names retorna o nome dos Elefantes e se é retornado em uma string', () => {
    expect(typeof handlerElephants('name')).toBe('string');
    expect(handlerElephants('names')).toContain('Bea');
  });
  it('Verifica se ao passar o parâmetro averageAge retorna o valor médio da idade dos elefantes que é 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se colocado um parametro que não existe ou vazio retorna null', () => {
    expect(handlerElephants('')).toBe(null);
    expect(handlerElephants('average')).toBe(null);
  });
});
