// Captura elementos do DOM
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture-btn');

// Obtém acesso à webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Erro ao acessar a webcam: ', error);
    });

// Adiciona um ouvinte de eventos ao botão de captura
captureButton.addEventListener('click', capturePhoto);

// Função para capturar a foto
function capturePhoto() {
    // Desenha o vídeo no canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Obtém a foto do canvas em formato de dados (base64)
    const imageDataURL = canvas.toDataURL('image/jpeg');
    
    // Cria um elemento <a> para download do arquivo
    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataURL;
    downloadLink.download = 'Foto do Cliente'; // Nome do arquivo
    
    // Simula um clique no link para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

