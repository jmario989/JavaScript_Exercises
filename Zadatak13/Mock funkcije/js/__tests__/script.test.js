const zaSvaki = require("../script");

// definicija mock funkcije
const mockCallback = jest.fn(x => x * 100);
zaSvaki([1, 2, 3], mockCallback);

// mock funkcija sadrži mock svojstvo: sadrži podatke o pozivu funkcije te o vrijednostima koje vraća
// provjera da li je mock funkcija pozvana kako se očekivalo

// koliko puta je funkcija pozvana
test("Broj poziva funkcije", () => {
    expect(mockCallback.mock.calls.length).toBe(3);
})

// prvi arument drugog poziva je 2
test("Vrijednost argumenta", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(2);
})

// povratna vrijednost prvog poziva funkcije
test("Povratna vrijednost", () => {
    expect(mockCallback.mock.results[0].value).toBe(100);
})