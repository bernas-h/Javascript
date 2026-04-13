function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString("pt-br", { weekday: "long" }); // Acessa o dia da semana atual 
    const data = new Date().toLocaleDateString("pt-br"); // Acessa a data atual no formato dia/mês/ano, utilizando o método toLocaleDateString() para formatar a data de acordo com as convenções brasileiras.
    const hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    }); // Acessa a hora atual no formato de 24 horas, utilizando o método toLocaleTimeString() para formatar a hora de acordo com as convenções brasileiras.

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`; // Cria uma string com a data e hora completas
    return dataCompleta;
}
export default gerarDiaDaSemana;