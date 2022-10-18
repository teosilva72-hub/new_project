const dashboard = (Filds) => {
    const widget = new Dashboard(); 
    time(widget);
    perfil(widget);
    exchange(widget, '50%');
    notification(widget);
    tarefas(widget);
}

const Hour = () => {return moment(new Date()).format('DD-MM-YY HH:mm:ss')}

const time = (data) => {
    const date = $('#date');
    const title = 'Taferas';
    date.append(data.Cards(title, ''));
    setInterval(()=>{
        const hour = `Data: ${Hour()}`
        $(`.content-${title}`).text(hour);
    },100);
}
const perfil = (data) => {
    const perfil = $('#perfil');
    const user = `Usuário: ${$('#user').val()}`
    perfil.append(data.Cards('Perfil', user));
}
const exchange = (data, value) => {
    let process = `<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: ${value}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>`;
    const exchange = $('#balance');
    exchange.append(data.Cards('Saldo', process));
}
const notification = (data) => {
    const message = $('#notification');
    message.append(data.Cards('Alerta',''));
}
const tarefas = (data) => {
    const task = $('#tarefas');
    const calendar = $('#calendar');
    task.append(data.Table('tarefas'));
    calendar.append(data.Table('calendar'));
    $('#calendar');
    $(`.tarefas`).DataTable();
    $(`.calendar`).DataTable();
}

dashboard('');