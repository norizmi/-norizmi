let jumlahKartu = 5;
let kartuPertama = 0;
let kartuKedua = 0;

// MASUKKAN ANGKA // 
function buatAngka() {
    let angkaBerurut = [];

    for (let i = 1; i <= jumlahKartu; i++) {
        angkaBerurut.push(i,i);
        
    }
  return angkaBerurut;
}
// ANGKA DIACAK //
function acakAngka(angkaBerurut) {
    let angkaAcak = angkaBerurut.sort(function () {
        return 0.5 - Math.random();
    });
    return angkaAcak;
}
// CHANGE KARTU HTML TO JAVASCRIPT
function persiapkanKartu(angkaAcak) {
    let str = '';
    
    angkaAcak.forEach(function (i) {
        str += '<div class="kartu" nilai="'+ i + '">'+
            '<div class="belakang">'+ i +'</div>'+
            '<div class="depan">norizmi</div>'+
        '</div>';
    });
    $('.game').append(str);
   
}


//  ATURAN MAIN //
 function rules() {
     $('.kartu').on('click', function () {
         $(this).addClass('buka');

         if(kartuPertama == 0) {
             kartuPertama = $(this).attr('nilai');
         } else {
             kartuKedua = $(this).attr('nilai');

             if(kartuPertama == kartuKedua) {
                 $('.buka').addClass('betul');
                 $('.betul').removeClass('buka');
                 kartuPertama = kartuKedua = 0;
             } else {
                 kartuPertama = kartuKedua = 0;
                 $(this).one('transitionend', function () {
                    $('.kartu').removeClass('buka');
                 });
             }
         }
     });
 }

 // JQUERY //
$(document).ready(function() {
    let angkaBerurut = buatAngka();
    let angkaAcak = acakAngka(angkaBerurut);
    persiapkanKartu(angkaAcak);
    rules();
});
   
