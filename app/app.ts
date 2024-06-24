// import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.adiciona();
});

// const negociacao = new Negociacao(new Date(), 10, 100);

