class ValidacaoForm {
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    validar = (event) => {
        event.preventDefault();

        let inputNome = document.getElementById('nome');
        let txtNome = document.getElementById('txtNome');
        let inputEmail = document.getElementById('email');
        let txtEmail = document.getElementById('txtEmail');
        let inputAssunto = document.getElementById('assunto');
        let txtAssunto = document.getElementById('txtAssunto');
        let inputMensagem = document.getElementById('mensagem');

        if (inputNome.value.length < 3) {
            txtNome.innerHTML = "Nome inválido";
            inputNome.focus();
            return;
        } else {
            txtNome.innerHTML = "";
        }

        if (!inputEmail.value.match(this.emailRegex)) {
            txtEmail.innerHTML = "E-mail inválido";
            inputEmail.focus();
            return;
        } else {
            txtEmail.innerHTML = "";
        }

        if (inputAssunto.value.length < 5) {
            txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
            inputAssunto.focus();
            return;
        } else {
            txtAssunto.innerHTML = "";
        }

        alert('Formulário enviado com sucesso!');

        inputNome.value = '';
        inputEmail.value = '';
        inputAssunto.value = '';
        inputMensagem.value = '';
    }
}

export default ValidacaoForm;