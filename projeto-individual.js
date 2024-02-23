/*
Trabalho Individual - Santander Coders Modulo 2
Aluno: João Vitor de Arruda Lima
*/

const enviarEmail = require("./envia-email");

const emails = [
    {
        email: "teste@gmail.com",
        recebeMarketing: true,
    },
    {
        email: "joao@gmail.com",
        recebeMarketing: true,
    },
    {
        email: "maria@gmail.com",
        recebeMarketing: true,
    },
    {
        email: "fernando@gmail.com",
        recebeMarketing: false,
    },
];

const verificaDia = () => {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sábado'];
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.getDay();
    return dias[diaDaSemana];
}

const constroiCorpo = (email) => {
    const nome = email.split('@')[0]
    return `Olá ${nome}, confira as mais novas novidades do CarStore!`;
}

const enviarEmails = (clientes) => {
    if (verificaDia() !== 'Segunda-feira') return;

    for (let cliente of clientes) {
        if (cliente.recebeMarketing) {
            const corpo = constroiCorpo(cliente.email);
            const result = enviarEmail(cliente.email, "Novidades CarStore", corpo);
            if (result.status === 'Sucess')
                console.log("Email enviada com sucesso ao cliente: ", cliente.email);
            else if (result.status === 'Error')
                console.log(`Ocorreu um erro ao enviar o email para o cliente ${cliente.email}: ${result.message}`);
        }
    }
}
enviarEmails(emails);