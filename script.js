// Configura o gráfico usando Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'Crescimento de Usuários',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(0, 188, 212, 0.7)',
      borderColor: 'rgba(0, 188, 212, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Lida com envio do formulário (simulação)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Obrigado por entrar em contato.');
  form.reset();
});