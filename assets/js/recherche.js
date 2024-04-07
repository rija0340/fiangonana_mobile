var dateEl = document.querySelector('.dateRaharaha');
var date = "";
if (dateEl != null) {
    var date = dateEl.textContent;
}

$('.supprimer').click(function () {

    var idMambra = $(this).data('id');
    alert(idMambra + '; date : ' + date);

});

$('.actions').hide();

$('#showActions').change(function () {
    if ($(this).is(':checked')) {
        $('.actions').show();
    } else {
        $('.actions').hide();
    }
});