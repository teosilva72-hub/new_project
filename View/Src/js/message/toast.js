function errorViaCep() {
    var msg = $('.message');
    msg.append(`
        <div class="alert alert-danger errorViaCep" role="alert" style="display: block">
           <b>CEP não encontrado, digite novamente!</b> Digite apenas os números sem - (traço).
        </div>
    `);
   $('.errorViaCep').fadeOut(7000);
}