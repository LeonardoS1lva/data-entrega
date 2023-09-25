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
    {
        id: 21,
        data: "12/02/2024",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 22,
        data: "13/02/2024",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 23,
        data: "14/02/2024",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 24,
        data: "28/10/2024",
        nome: "Dia do Servidor Público",
        tipo: "facultativo"
    },
    {
        id: 25,
        data: "29/03/2024",
        nome: "Sexta-Feira Santa",
        tipo: "feriado"
    },
    {
        id: 26,
        data: "21/04/2024",
        nome: "Tiradentes",
        tipo: "feriado"
    },
    {
        id: 27,
        data: "01/05/2024",
        nome: "Dia do Trabalhador",
        tipo: "feriado"
    },
    {
        id: 28,
        data: "07/09/2024",
        nome: "Independência do Brasil",
        tipo: "feriado"
    },
    {
        id: 29,
        data: "12/10/2024",
        nome: "Nossa Senhora Aparecida",
        tipo: "feriado"
    },
    {
        id: 30,
        data: "02/11/2024",
        nome: "Finados",
        tipo: "feriado"
    },
    {
        id: 31,
        data: "15/11/2024",
        nome: "Proclamação da República",
        tipo: "feriado"
    },
    {
        id: 32,
        data: "25/12/2024",
        nome: "Natal",
        tipo: "feriado"
    },
    {
        id: 33,
        data: "13/04/2024",
        nome: "Nossa Senhora da Penha",
        tipo: "feriado"
    },
    {
        id: 34,
        data: "30/05/2024",
        nome: "Corpus Christi",
        tipo: "feriado"
    },
    {
        id: 35,
        data: "24/06/2024",
        nome: "São João Batista",
        tipo: "feriado"
    },
    {
        id: 36,
        data: "20/11/2024",
        nome: "Dia da Consciência Negra",
        tipo: "feriado"
    },
    {
        id: 37,
        data: "28/03/2024",
        nome: "Quinta-feira santa",
        tipo: "feriado"
    },
    {
        id: 38,
        data: "31/12/2024",
        nome: "Véspera de Ano Novo",
        tipo: "feriado"
    },
    {
        id: 39,
        data: "01/01/2025",
        nome: "Ano Novo",
        tipo: "feriado"
    },
    {
        id: 40,
        data: "03/03/2025",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 41,
        data: "04/03/2025",
        nome: "Carnaval",
        tipo: "facultativo"
    },
    {
        id: 42,
        data: "05/03/2025",
        nome: "Carnaval",
        tipo: "facultativo"
    },

]

const tabela = document.getElementById("tabela");
const botaoMesAnterior = document.getElementById("btn-anterior");
const botaoProximoMes = document.getElementById("btn-proximo");
const textoFeriados = document.getElementById("feriados");
const dataAtual = new Date();
var classFundo = "";
var diasUteis = 30;

botaoMesAnterior.addEventListener("click", mostrarMesAnterior);
botaoProximoMes.addEventListener("click", mostrarProximoMes);

function imprimeFeriadosMes(mes, ano) {
    textoFeriados.innerHTML = ""

    for (const feriado of datasNaoUteis) {
        if (feriado.data.substring(3, 5) == mes && feriado.data.substring(6, 10) == ano) {
            textoFeriados.innerHTML += `${feriado.nome}: ${feriado.data} <br>`;
        }
    }
}

function nomeMes(num) {
    let mes;
    switch (num) {
        case 1:
            mes = "Janeiro";
            break;
        case 2:
            mes = "Fevereiro";
            break;
        case 3:
            mes = "Março";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Maio";
            break;
        case 6:
            mes = "Junho";
            break;
        case 7:
            mes = "Julho";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Setembro";
            break;
        case 10:
            mes = "Outubro";
            break;
        case 11:
            mes = "Novembro";
            break;
        case 12:
            mes = "Dezembro";
            break;
    }
    return mes;
}

function mostrarMesAnterior() {
    const mesAtual = dataAtual.getMonth() - 1;
    if (dataAtual.getFullYear() > 2023) {
        dataAtual.setMonth(mesAtual - 1); // Subtrai 1 para ir para o mês anterior
        diasUteis = 30;
        atualizarTabela();
    } else if (dataAtual.getFullYear() == 2023){
        if (dataAtual.getMonth() !== 1 ) {
            dataAtual.setMonth(mesAtual - 1); // Subtrai 1 para ir para o mês anterior
            diasUteis = 30;
            atualizarTabela();
        }
    }
}

function mostrarProximoMes() {
    const mesAtual = dataAtual.getMonth() - 1;
    if (dataAtual.getFullYear() < 2025) {
        dataAtual.setMonth(mesAtual + 1); // Adiciona 1 para ir para o próximo mês
        diasUteis = 30;
        atualizarTabela();
    }
}

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

function atualizarTabela() {
    tabela.innerHTML = `<tr class="fundo-titulo">
        <th>DATA SAÍDA</th>
        <th>DATA DE ENTREGA</th>
    </tr>`;

    classFundo = "";

    const mesAtual = dataAtual.getMonth() + 1;
    document.getElementById("titulo").innerHTML = nomeMes(mesAtual) + " de " + dataAtual.getFullYear();
    imprimeFeriadosMes(mesAtual, dataAtual.getFullYear());

    dataAtual.setDate(1);

    while (mesAtual === dataAtual.getMonth() + 1) {

        const dataEntrega = new Date();

        dataEntrega.setFullYear(dataAtual.getFullYear());
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
            let dataFormatada = (dia < 10 ? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + ano;

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
                            i--;
                        }
                    }
                }
            }
        }

        if (dataAtual.getDay() === 0) {
            classFundo = `class="domingo"`;
        } else if (dataAtual.getDay() === 5) {
            classFundo = `class="sexta"`;
        } else if (dataAtual.getDay() === 6) {
            classFundo = `class="sabado"`;
        } else {
            classFundo = "";
        }

        const listaDias =
            `<tr ${classFundo}>
            <td>${dataAtual.getDate() < 10 ? '0' + dataAtual.getDate() : dataAtual.getDate()}/${mesAtual}</td>
            <td>${dataEntrega.getDate() < 10 ? '0' + dataEntrega.getDate() : dataEntrega.getDate()}/${dataEntrega.getMonth() + 1}</td>
        </tr>`;

        tabela.innerHTML += listaDias;
        dataAtual.setDate(dataAtual.getDate() + 1);
    }
}

atualizarTabela();