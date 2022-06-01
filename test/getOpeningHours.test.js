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
  it('Verifica se retorna erro The hour should represent a number', () => {
    expect(() => { getOpeningHours('Monday', 'Onze:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('Verifica se retorna erro The minutes should represent a number', () => {
    expect(() => { getOpeningHours('Monday', '11:horas-AM'); }).toThrow('The minutes should represent a number');
  });
  it('Verifica se retorna erro The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => { getOpeningHours('Monday', '11:00-FM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se retorna erro The hour must be between 0 and 12', () => {
    expect(() => { getOpeningHours('Monday', '13:00-PM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se retorna erro The minutes must be between 0 and 59', () => {
    expect(() => { getOpeningHours('Monday', '12:60-PM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
