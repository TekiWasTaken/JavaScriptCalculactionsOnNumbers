// Wprowadź liczbę.
const liczba = Number(prompt('Podaj liczbe: '))

// Oblicz liczbę o przeciwnym znaku do wprowadzonej.
alert(`Odwrotny znak od ${liczba} to: ${liczba*(-1)}`)

// Oblicz sumę wprowadzonej liczby i 15.
alert(`Suma ${liczba} + 15 = ${liczba+15}`)

// Oblicz sumę wprowadzonej liczby i 0.5.
alert(`Suma ${liczba} + 0.5 = ${liczba + 0.5}`)

// Oblicz kwadrat wprowadzonej liczby.
alert(`${liczba} do kwadratu to: ${Math.pow(liczba, 2)}`)

// Oblicz wartość podzielonej przez 2 wprowadzonej liczby.
alert(`${liczba} podzielone przez 2 to: ${liczba/2}`)

// Oblicz resztę z dzielenia wprowadzonej liczby przez 2.
alert(`Reszta z dzielenia ${liczba} przez 2 to: ${liczba%2}`)

// Oblicz liczbę o jeden większą od wprowadzonej.
alert(`Liczba o 1 większa od ${liczba} to: ${liczba+1}`)

// Oblicz liczbę o jeden mniejszą od wprowadzonej.
alert(`Liczba o 1 większa od ${liczba} to: ${liczba-1}`)

// Oblicz liczbę zaokrągloną w dół po podzieleniu wprowadzonej liczby przez 3.
alert(`Liczba zaokrąglona w dół po dzieleniu ${liczba} przez 3 to: ${Math.floor(liczba/3)}`)

// Oblicz liczbę zaokrągloną w górę po podzieleniu wprowadzonej liczby przez 3.
alert(`Liczba zaokrąglona w góre po dzieleniu ${liczba} przez 3 to: ${Math.ceil(liczba/3)}`)

// Oblicz liczbę zaokrągloną do najbliższej całkowitej po podzieleniu wprowadzonej liczby przez 3.
alert(`Liczba zaokrąglona w góre po dzieleniu ${liczba} przez 3 to: ${Math.round(liczba/3)}`)

// Oblicz pierwiastek wprowadzonej liczby.
alert(`Pierwiastek z liczby ${liczba} to: ${Math.sqrt(liczba)}`)

// Oblicz iloczyn wprowadzonej liczby przez liczbę losową z przedziału od 0 do 50.
alert(`Iloczyn liczby ${liczba} z losową liczbą z przedziału 0-50 to: ${liczba*(Math.floor(Math.random()*51))} `)

// Oblicz wartość absolutną wprowadzonej liczby.
alert(`Wartość absolutna liczby ${liczba} to: ${Math.abs(liczba)}`)

// Oblicz jej podwojoną wartość.
alert(`Podwojona wartość liczby absolutnej od ${liczba} to: ${(Math.abs(liczba))*2}`)

// Oblicz pierwiastek kwadratowy z sumy dwóch wprowadzonych liczb.
const liczba1 = Number(prompt('Podaj Liczbę 1: '))
const liczba2 = Number(prompt('Podaj Liczbę 2: '))

alert(`Pierwiastek kwadratowy z sumy liczb ${liczba1} + ${liczba2} to: ${Math.sqrt(liczba1+liczba2)} `)

// Wprowadź dwie liczby, a następnie oblicz różnicę ich kwadratów.
const liczba3 = Number(prompt('Podaj liczbę 3: '))
const liczba4 = Number(prompt('Podaj liczbę 4: '))

alert(`Różnica z kwadratów liczb ${liczba3} i ${liczba4} to: ${(Math.pow(liczba3, 2))-(Math.pow(liczba4, 2))}`)

// Wprowadź liczbę, a następnie oblicz jej potęgę trzecią.
const liczba5 = Number(prompt('Podaj liczbę 5: '))

alert(`Trzecia potęga od liczby ${liczba5} to: ${math.pow(liczba5, 3)}`)

// Wprowadź liczbę, a następnie oblicz jej wartość podniesioną do kwadratu.
const liczba6 = Number(prompt('Podaj liczbę 6: '))

alert(`Trzecia potęga od liczby ${liczba6} to: ${math.pow(liczba6, 2)}`)

// Wprowadź liczbę, a następnie oblicz jej pierwiastek sześcienny.
const liczba7 = Number(prompt('Podaj liczbę 7: '))

alert(`Trzecia potęga od liczby ${liczba7} to: ${math.sqrt(liczba7, 3)}`)

// Oblicz średnią arytmetyczną z dwóch wprowadzonych liczb.
const liczba8 = Number(prompt('Podaj liczbę 8: '))
const liczba9 = Number(prompt('Podaj liczbę 9: '))

alert(`Średnia arytmetyczna z ${liczba8} i ${liczba9} to: ${(liczba8+liczba9)/2}`)

// Wprowadź liczbę, a następnie oblicz jej wartość pomnożoną przez 10.
const liczba10 = Number(prompt('Podaj liczbę 10: '))

alert(`Liczba ${liczba10} pomnożona przez 10 to: ${liczba10*10}`)

// Oblicz sumę liczb całkowitych od 1 do wprowadzonej liczby.
const liczba11 = Number(prompt('Podaj liczbę 11: '))
const sumaLiczbCalkowitych = Number(liczba11*(liczba11+1) /2)

alert(`Suma liczb całkowitych od 1 do liczby ${liczba11} to: ${sumaLiczbCalkowitych}`)
