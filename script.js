/**
 * O intervalo de tempo para a troca de imagens em milissegundos.
 * @type {number}
 */
let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

/**
 * Move para a próxima imagem na galeria de imagens.
 */
/**
 * Moves to the next image in the image gallery.
 */
function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

/**
 * Inicia o intervalo de troca de imagem.
 */
function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)

