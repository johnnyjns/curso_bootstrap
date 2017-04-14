$('#collapsed-navbar').on('show.bs.collapse', function () {
  $('.topCasaFina-banner').css('transform', 'translate( -50%, 10%)');
});

$('#collapsed-navbar').on('hidden.bs.collapse', function () {
  $('.topCasaFina-banner').css('transform', 'translate( -50%, -50%)');
});
