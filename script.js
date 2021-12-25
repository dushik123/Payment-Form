var cc = forma.CardNumber;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var CardNumber = this.value.replace(/[^\d]/g, '').substring(0,16);
    CardNumber = CardNumber != '' ? CardNumber.match(/.{1,4}/g).join(' ') : '';
    this.value = CardNumber;
}

var characterCount
$('#ccmy_input').on('input',function(e){
    if($(this).val().length == 2 && characterCount < $(this).val().length) {
        $(this).val($(this).val()+'/');
    }
    characterCount = $(this).val().length
});

$('#ccvv_input').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$('#ccmy_input').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}