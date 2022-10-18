class Dashboard {
    Cards(title, content){
        let card = `
            <div class="card card-conf card-${title} mb-3 card-efeito shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h5 class="card-title ${title}">${title}</h5><hr>
                    <div class="content-${title}">${content}</div>
                </div>
            </div>
        `;
        return card;
    }
    Table(title){
        let table = `
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <h3>${title}</h3>
                <table class="table ${title}">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">2º Feira</th>
                            <th scope="col">3º Feira</th>
                            <th scope="col">4ª Feira</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        return table;
    }
}
