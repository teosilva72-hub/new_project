$(() => {
    $('#cep').on('change', () => {
        viaCep($('#cep').val());
    });
});

function viaCep(cep) {
    $('.errorViaCep').remove();
    $.ajax({
        type: "GET",
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: function (data) {
            FildsCep(data)
        },
        error: function (error) {
            errorViaCep();
            FildsCep('')
        }
    });
}

function FildsCep(data) {
    $('#logradouro').val(data.logradouro);
    $('#bairro').val(data.bairro);
    $('#cidade').val(data.localidade);
    $('#uf').val(data.uf);
}