const dashboard = () => {
    const widget = new Dashboard(); 
    const date = $('#date');
    const perfil = $('#perfil');
    const exchange = $('#exchange');
    const message = $('#message');
    date.append(widget.Cards('Data')) ;
    perfil.append(widget.Cards('Perfil'));
    exchange.append(widget.Cards('Internacional'));
    message.append(widget.Cards('Notificação'));  
}
dashboard();

