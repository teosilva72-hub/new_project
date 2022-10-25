function viaCep(cep) {
    $('.errorViaCep').remove();
    try{
        if(cep.length < 8){
            errorViaCep();
            FildsCep('');
            return false;
        }
        $.ajax({
            type: "GET",
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: function (data) {
                FildsCep(data);
                return true;
            },
            error: function (error) {
                errorViaCep();
                FildsCep('');
                return false;
            }
        });
    }catch(error){
        console.log(error);
        return false;
    }
}

function FildsCep(data) {
   try{
        $('#logradouro').val(data.logradouro);
        $('#bairro').val(data.bairro);
        $('#cidade').val(data.localidade);
        $('#uf').val(data.uf);
        return true;
   }catch(error){
        $('#logradouro').val('');
        $('#bairro').val('');
        $('#cidade').val('');
        $('#uf').val('');
        return false;
   }
}

$(() => {
    $('#cep').on('change', () => {
        viaCep($('#cep').val());
    });
});