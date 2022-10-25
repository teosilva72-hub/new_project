const dashboard = (data) => {
    const widget = new Dashboard();
    enterprise(widget);
    Options(widget);
}

const enterprise = (data) => {
    try {
        let obj = `${User()}, ${Enterprise()}`;
        const enterprise = $('#enterprise');
        setInterval(()=>{
            let hour = Hour();
            $('.elementOne-enterprise').text(`Agora: ${hour}`)
        },100);
        let card = data.Cards($(enterprise).attr('id'), obj);
        enterprise.append(card)
    }catch(error){
        console.log(error)
    }
}
const User = () => {
    return $('#user').val();
}
const Enterprise = () => {
    return $('#enterpriseName').val();
}
const Hour = () =>{
    return moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
}

const Options = (data) => {
    let title = 'Clientes';
    let html = ``;
    
    const option = $('#client');
    let card = data.Cards(option.attr('id'), title);
    option.append(card);
    $('.elementOne-options').append(html)
}
dashboard(true);