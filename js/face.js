const openCameraButton = document.getElementById('openCameraButton');
    const cameraContainer = document.getElementById('cameraContainer');
    const videoElement = document.getElementById('videoElement');
    const captureButton = document.getElementById('captureButton');

    // Função para abrir a câmera
    function openCamera() {
        // Solicita acesso à câmera do dispositivo
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Exibe o fluxo de vídeo da câmera no elemento de vídeo
                videoElement.srcObject = stream;
                // Exibe o contêiner da câmera
                cameraContainer.style.display = 'block';
            })
            .catch(function(err) {
                console.log('Erro ao acessar a câmera: ', err);
            });
    }

    // Função para capturar a foto
    function capturePhoto() {
        // Cria um canvas temporário para desenhar a foto
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const context = canvas.getContext('2d');

        // Desenha a imagem do vídeo no canvas
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        // Converte o canvas em uma imagem em formato de dados URL
        const dataUrl = canvas.toDataURL('image/jpeg');

        // Abre a foto em uma nova janela ou poderia ser enviada para o servidor, etc.
        window.open(dataUrl);
    }

    // Adiciona um listener de clique ao botão de abrir a câmera
    openCameraButton.addEventListener('click', openCamera);

    // Adiciona um listener de clique ao botão de captura
    captureButton.addEventListener('click', capturePhoto);