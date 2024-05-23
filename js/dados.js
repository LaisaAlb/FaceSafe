const continuarButton = document.getElementById("continuarButton");

// Desabilita o botão de continuar se algum campo estiver vazio ao carregar a página
verificarCampos();

// Adiciona um listener para o evento de clique no botão
continuarButton.addEventListener("click", function() {
    // Redireciona para a página desejada
    window.location.href = "/projeto/face/index.html";
});

function verificarCampos() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var rg = document.getElementById("rg").value;
    var tel = document.getElementById("tel").value;
    var codigo = document.getElementById("codigo").value;

    if (nome.trim() !== "" && email.trim() !== "" && cpf.trim() !== "" && rg !== "" && tel !== "" && codigo.trim() !== "") {
        continuarButton.disabled = false;
    } else {
        continuarButton.disabled = true;
    }
}

// Adiciona um listener para o evento de mudança em cada campo de entrada
document.getElementById("nome").addEventListener("input", verificarCampos);
document.getElementById("email").addEventListener("input", verificarCampos);
document.getElementById("cpf").addEventListener("input", verificarCampos);
document.getElementById("rg").addEventListener("input", verificarCampos);
document.getElementById("tel").addEventListener("input", verificarCampos);
document.getElementById("codigo").addEventListener("input", verificarCampos);