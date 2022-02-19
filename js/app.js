let tekst = 'Witaj! Oto moja strona z prostym skryptem wypisującym tekst...'.split('')
let time = 100;
$(document).ready(function(){
for (i=0;i<tekst.length;i++) {
    ((ind) => {
        setTimeout(() => {
            $('#naglowek').append(tekst[ind])
            let zawart = $('#naglowek').html()
            if (tekst[ind] == '!') $('#naglowek').html(zawart+'<br>')
        }, time * ind);
    })(i);
 }
});