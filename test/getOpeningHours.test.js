const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const hours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('Testa se não houver argumentos retorna objeto com todos horários do zoo', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testa se retorna The zoo is closed em dias e horários que deveria estar fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '07:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se retorna The zoo is open nos horários que deveria estar aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Sunday', '07:00-PM')).toBe('The zoo is open');
  });
  it('Verifica se retorna erro The day must be valid. Example: Monday', () => {
    expect(() => { getOpeningHours('sonday', '09:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });
});
