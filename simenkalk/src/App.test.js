const kalkulator = require('./App');

describe("kalkulator tester:", () => {
    
  test('sjekker om RegnUt(1+1) = 2', () => {
    
    var verdi = kalkulator.testing(1, 1, ' + ', 0);

    expect(verdi).toBe(2);
  });

  test('Sjekker for feil på x/0', () => {

    var verdi = kalkulator.testing(1, 0, ' / ', 0);

    expect(verdi).toBe("Tall kan ikke deles på 0");
  })
})