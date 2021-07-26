// CICLO PER ITERARE NELL'ARRAY DI OGGETTI 
const printIcons = (icons, element) => {
    iconsTemplate = '';
    icons.forEach((item, index) => {
        const offset = index % 5 === 0 ? 'col-md-offset-1' : '';
        iconsTemplate += `
        <div class="col-sm-4 col-md-2  ${offset}">
            <div class="card txt-center-sm">
                <i class="${item.family} ${item.prefix}${item.name} ${item.type}"></i>
                <h5>${item.name.toUpperCase()}</h5>
            </div>
        </div>
        `;
    });
    element.innerHTML = iconsTemplate;
};

//STAMPA
const sectionCard = document.querySelector('#icons .row');
printIcons(icons, sectionCard);


//FILTRO
const selectField = document.getElementById('filter');

selectField.addEventListener('change', () => {
    const filterValue = selectField.value;
    if(filterValue == 'all') {
        printIcons(icons, sectionCard);
        return;
    }
    const filterIcons = icons.filter((icon) => {
        if(filterValue === icon.type) {
            return true;
        }
        return false;
    })
    printIcons(filterIcons, sectionCard);
});