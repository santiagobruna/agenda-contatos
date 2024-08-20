const frm = document.querySelector('form');
let linhas = "";

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
})
function adicionarLinha(){
    const nomeAgenda = document.getElementById('nome');
    const celAgenda = document.getElementById('telefone');
    let linha = `
    <tr>
        <td>${nomeAgenda.value}</td>
        <td>${celAgenda.value}</td>
    </tr>
    `;
linhas += linha;
nomeAgenda.value = "";
celAgenda.value = "";
}
function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
  