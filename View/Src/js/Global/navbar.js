
function hideShow(check) {
    try {
        let section = document.getElementById('rigth-navbar');
        let show = document.getElementById('show-navbar');
        let divElem = document.getElementById('navbarRigth');
        let Dashb = document.getElementById('dashbordOne');
        if(check){
            section.classList.add('d-none');
            show.classList.remove('d-none');
            divElem.classList.remove('col-3');
            Dashb.classList.remove('col-9').add('col-12');
            return true;
        }else{
            section.classList.remove('d-none');
            show.classList.add('d-none');
            divElem.classList.add('col-3');
            Dashb.classList.remove('col-12')
            Dashb.classList.add('col-9');
            return false;
        }

    } catch (error) {
        //return false;
        console.log('error:::', error)
    }
}

function show(check) {
    try {
        if (check) {

        }
    } catch (error) {
        return false;
    }
}
