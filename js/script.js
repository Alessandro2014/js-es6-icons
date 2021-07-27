
// CICLO PER ITERARE NELL'ARRAY DI OGGETTI 
const printIcons = (icons, element) => {
    iconsTemplate = '';
    icons.forEach((item, index) => {
        const offsetMd = index % 5 === 0 ? 'col-md-offset-1' : '';

        iconsTemplate += `
        <div class="col-sm-5 col-md-2  txt-center-xs ${offsetMd}">
            <div class="card">
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