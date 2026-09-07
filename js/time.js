const getDias = (hoje, dataNamoro) => {
    const diferenca = hoje - dataNamoro;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    return dias;
}

const getMeses = (hoje, dataNamoro) => {
    const anos = hoje.getFullYear() - dataNamoro.getFullYear();
    const meses = hoje.getMonth() - dataNamoro.getMonth();

    let totalMeses = (anos * 12) + meses;

    if (hoje.getDate() < dataNamoro.getDate()) {
        totalMeses--;
    }

    return totalMeses;
}

const getAnos = (hoje, dataNamoro) =>{
    let anos = hoje.getFullYear() - dataNamoro.getFullYear();

    const aniversarioAindaNaoChegou =
        hoje.getMonth() < dataNamoro.getMonth() ||
        (
            hoje.getMonth() === dataNamoro.getMonth() &&
            hoje.getDate() < dataNamoro.getDate()
        );

    if (aniversarioAindaNaoChegou) {
        anos--;
    }

    return anos;
}

const dias = document.getElementById('dias')
const meses = document.getElementById('meses');
const anos = document.getElementById('anos');
const data = document.getElementById('data');

const dataNamoro = new Date('2024-3-29');
const hoje = new Date();

const diasNamoro = getDias(hoje, dataNamoro)
const mesesNamoro = getMeses(hoje, dataNamoro);
const anosNamoro = getAnos(hoje, dataNamoro);

dias.innerHTML = `
    <i data-lucide="heart" class="h-4 w-4"></i>
    ${diasNamoro}
`

meses.innerHTML = `
    <i data-lucide="calendar-days" class="h-4 w-4"></i>
    ${mesesNamoro}
`

anos.innerHTML = `
    <i data-lucide="clock" class="h-4 w-4"></i>
    ${anosNamoro}
`;

data.innerHTML = `
    <i data-lucide="calendar-heart" class="h-4 w-4"></i>
    ${dataNamoro.getDate()}/0${dataNamoro.getMonth()+1}/${dataNamoro.getFullYear()}
`
