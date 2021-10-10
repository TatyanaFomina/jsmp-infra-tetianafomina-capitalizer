import capitalize from '../index';

describe('Check Capitalizer', () => {
it("check if letters are capitalized", () => {
  const str = 'our test string';
  const capitalizedArray = capitalize(str).split(' ');
  const result = capitalizedArray.filter((word)=> {
      const toBe = word.charAt(0).toUpperCase() + word.slice(1);
      return word === toBe;
    });

    expect(result.length).toBe(capitalizedArray.length);
});
});
