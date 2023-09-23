const datasNaoUteis = [
    {
        id: 1,
        data: "01/01/2023",
        nome: "Ano Novo",
        tipo: "feriado"
    },
    {
        id: 2,
        data: "07/04/2023",
        nome: "Sexta-Feira Santa",
        tipo: "feriado"
    },
    {
        id: 3,
        data: "13/04/2023",
        nome: "Nossa Senhora da Penha",
        tipo: "feriado"
    },
    {
        id: 4,
        data: "21/04/2023",
        nome: "Tiradentes",
        tipo: "feriado"
    },
    {
        id: 5,
        data: "01/05/2023",
        nome: "Dia do Trabalhador",
        tipo: "feriado"
    },
    {
        id: 6,
        data: "08/06/2023",
        nome: "Corpus Christi",
        tipo: "feriado"
    },
    {
        id: 7,
        data: "24/06/2023",
        nome: "São João Batista",
        tipo: "feriado"
    },
    {
        id: 8,
        data: "07/09/2023",
        nome: "Independência do Brasil",
        tipo: "feriado"
    },
    {
        id: 9,
        data: "12/10/2023",
        nome: "Nossa Senhora Aparecida",
        tipo: "feriado"
    },
    {
        id: 10,
        data: "02/11/2023",
        nome: "Finados",
        tipo: "feriado"
    },
    {
        id: 11,
        data: "15/11/2023",
        nome: "Proclamação da República",
        tipo: "feriado"
    },
    {
        id: 12,
        data: "20/11/2023",
        nome: "Dia da Consciência Negra",
        tipo: "feriado"
    },
    {
        id: 13,
        data: "25/12/2023",
        nome: "Natal",
        tipo: "feriado"
    },
    {
        id: 14,
        data: "20/02/2023",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 15,
        data: "21/02/2023",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 16,
        data: "22/02/2023",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 17,
        data: "28/10/2023",
        nome: "Dia do Servidor Público",
        tipo: "facultativo"
    },
    {
        id: 18,
        data: "31/12/2023",
        nome: "Véspera de Ano Novo",
        tipo: "facultativo"
    },
    {
        id: 19,
        data: "06/04/2023",
        nome: "Quinta-feira Santa",
        tipo: "facultativo"
    },
    {
        id: 20,
        data: "01/01/2024",
        nome: "Ano Novo",
        tipo: "feriado"
    },
]

const tagDataEntrega = document.getElementById("data-entrega");
const tagDataEntregaFacultativa = document.getElementById("entrega-facultativa");
var diasUteis = 30;

var dataAtual = new Date();
var datasFacultativas = "";

const hoje = (dataAtual.getDate() < 10 ? '0' + dataAtual.getDate() : dataAtual.getDate()) + '/' + ((dataAtual.getMonth() + 1) < 10 ? '0' + (dataAtual.getMonth() + 1) : (dataAtual.getMonth() + 1)) + '/' + dataAtual.getFullYear();

function verificaFeriadoQuinta(aux) {
    if (aux) {
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear();
        let dataFormatada = (dia < 10 ? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + ano;

        for (const dataNaoUtil of datasNaoUteis) {
            if ((dataNaoUtil.data === dataFormatada) && (dataAtual.getDay() === 4)) {
                if (dataNaoUtil.tipo === "feriado") {
                    return true;
                }
            }
        }
    }
}

function atualizarData() {
    const mesAtual = dataAtual.getMonth() + 1;
    dataAtual.setDate(1);

    while (mesAtual === dataAtual.getMonth() + 1) {
        const dataEntrega = new Date();

        dataEntrega.setMonth(dataAtual.getMonth());
        dataEntrega.setDate(dataAtual.getDate());
        let aux = true;

        for (let i = 0; i < diasUteis; i++) {
            dataEntrega.setDate(dataEntrega.getDate() + 1);

            if (verificaFeriadoQuinta(aux)) {
                diasUteis++
                aux = false;
            }

            let dia = dataEntrega.getDate();
            let mes = dataEntrega.getMonth() + 1;
            let ano = dataEntrega.getFullYear();
            dataFormatada = (dia < 10 ? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + ano;

            if ((dataEntrega.getDay() === 0) || (dataEntrega.getDay() === 6)) {
                i--;
            } else {
                for (const dataNaoUtil of datasNaoUteis) {
                    if (dataNaoUtil.data === dataFormatada) {
                        if (dataNaoUtil.tipo === "feriado") {
                            i--;
                            if (dataEntrega.getDay() === 4) {
                                i--;
                                /* caso o feriado caia na quinta e tenha a possibilidade de emendar sexta*/
                            }
                        } else if (dataNaoUtil.tipo === "facultativo") {
                            // if (datasFacultativas === "") {
                            //     datasFacultativas += `<b>${dataNaoUtil.nome}: ${dataNaoUtil.data}</b>`;
                            // } else {
                            //     datasFacultativas += `, <b>${dataNaoUtil.nome}: ${dataNaoUtil.data}</b>`;
                            // }
                            datasFacultativas = `<b>${dataNaoUtil.nome}: ${dataNaoUtil.data}</b>`;
                        }
                    }
                }
            }
        }
        let diaAtual = (dataAtual.getDate() < 10 ? '0' + dataAtual.getDate() : dataAtual.getDate()) + '/' + ((dataAtual.getMonth() + 1) < 10 ? '0' + (dataAtual.getMonth() + 1) : (dataAtual.getMonth() + 1)) + '/' + dataAtual.getFullYear();
        if (diaAtual == hoje) {
            tagDataEntrega.innerHTML = dataFormatada;
        }
        dataAtual.setDate(dataAtual.getDate() + 1);
    }

    if (datasFacultativas !== "") {
        tagDataEntregaFacultativa.innerHTML = datasFacultativas += " é ponto facultativo, verifique corretamente o funcionamento do órgão e confira a data de entrega!";
    }
}

atualizarData()