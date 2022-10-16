class Dashboard {
    Cards(title, content, color){
        let card = `
            <div class="card bg-${color} mb-3">
                <div class="card-body">
                    <h5 class="card-title ${title}">${title}</h5><hr>
                    <div class="content-${title}">${content}</div>
                </div>
            </div>
        `;
        return card;
    }
}
