const continuarButton = document.getElementById("continuarButton");
const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const cpfInput = document.querySelector("#cpf")
const rgInput = document.querySelector("#rg")
const telInput = document.querySelector("#tel")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "") {
        alert('Por favor, preencha o campo "nome"!')
        return;
    }
    if(emailInput.value === "") {
        alert('Por favor, preencha o campo "email"!')
        return;
    }
    if(cpfInput.value === "") {
        alert('Por favor, preencha o campo "CPF"!')
        return;
    }
    if(rgInput.value === "") {
        alert('Por favor, preencha o campo "RG"!')
        return;
    }
    if(telInput.value === "") {
        alert('Por favor, preencha o campo "Telefone"!')
        return;
    }


    form.submit();
});










/*
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

    if (nome.trim() !== "" && email.trim() !== "" && cpf.trim() !== "" && rg !== "" && tel !== "") {
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
document.getElementById("tel").addEventListener("input", verificarCampos); */
