const dashboard = (Filds) => {
    const widget = new Dashboard(); 
    time(widget);
    perfil(widget);
    exchange(widget);
    notification(widget);
}

const Hour = () => {return moment(new Date()).format('DD-MM-YYYY hh:mm:ss')}

const time = (data) => {
    const date = $('#date');
    date.append(data.Cards('Data', Hour(), 'success'));
    setInterval(()=>{
        $('.content-Data').text(Hour());
    },100);
}
const perfil = (data) => {
    const perfil = $('#perfil');
    perfil.append(data.Cards('Perfil', $('#user').val(), 'info'));
}
const exchange = (data) => {
    const exchange = $('#balance');
    exchange.append(data.Cards('Saldo',''));
}
const notification = (data) => {
    const message = $('#notification');
    message.append(data.Cards('Notificação',''));
}

dashboard('');