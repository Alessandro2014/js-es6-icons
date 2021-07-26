// CICLO PER ITERARE NELL'ARRAY DI OGGETTI
iconsTemplate = '';
icons.forEach((item) => {
    iconsTemplate += `
    <div class="col-sm-offset-1 col-sm-2">
        <div class="card txt-center-sm">
            <i class="${item.family} ${item.prefix}${item.name}"></i>
            <h5>${item.name.toUpperCase()}</h5>
        </div>
    </div>
    `;

});

const sectionCard = document.querySelector('#icons .row');
sectionCard.innerHTML = iconsTemplate;
