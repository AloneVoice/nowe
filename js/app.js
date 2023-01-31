const tekst = 'Witaj! Oto moja strona z prostym skryptem wypisującym tekst...'.split('')
const time = 100;
const naglowek = document.querySelector('#naglowek')
window.onload = (() => {
for (i=0;i<tekst.length;i++) {
    ((ind) => {
        setTimeout(() => {
            naglowek.append(tekst[ind])
        }, time * ind);
    })(i);
 }
});
