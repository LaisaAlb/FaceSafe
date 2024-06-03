// Seleciona elementos
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture-btn');

// Obter acesso à câmera do usuário
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.error('Erro ao acessar a câmera:', err);
  });

// Quando o botão de captura é clicado
captureButton.addEventListener('click', function() {
    // Desenha o vídeo em um canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Converte o canvas para uma imagem base64
    const imageData = canvas.toDataURL('image/png');

    // Envia a imagem para o servidor via AJAX
    fetch('/salvar-imagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageData })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Imagem enviada com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar imagem:', error);
    });

    // Se desejar, oculte a câmera e o botão de captura
    video.style.display = 'none';
    captureButton.style.display = 'none';
});

