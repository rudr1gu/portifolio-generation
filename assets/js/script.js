import ValidacaoForm from './services/ValidacaoForm.js';

const validacaoForm = new ValidacaoForm();

const enviarForm = document.getElementById('form');
enviarForm.addEventListener('submit', validacaoForm.validar);