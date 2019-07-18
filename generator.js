let topTextInput, bottomTextInput, iamgeInput, generateBtn, cvs, ctx, topTextSizeInput, bottomTextSizeInput

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize
    cvs.width = img.width
    cvs.height = img.height

    ctx.clearRect(0, 0, cvs.width, cvs.height)
    ctx.drawImage(img, 0, 0)    


    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black' 
    ctx.textAlign = 'center'

    // Top text font size 
    fontSize = cvs.width * topTextSize
    ctx.font = fontSize + 'px Impact'
    ctx.lineWidth = fontSize / 20


    // Draw top text
    ctx.textBaseline = 'top'
    //Split the top text for more than one line
    topText.split('/n').reverse().forEach((t, i) => {
        ctx.fillText(t, cvs.width / 2, i * fontSize, cvs.width)
        ctx.strokeText(t, cvs.width / 2, i * fontSize, cvs.width)
    })

    //Bottom text font size
    fontSize = cvs.width * bottomTextSize
    ctx.font = fontSize + 'px Impact'
    ctx.lineWidth = fontSize / 20
    
    // Draw bottom text
    ctx.textBaseline = 'bottom'
     //Split the bottom text for more than one line
    bottomText.split('/n').forEach((t, i) => {
        ctx.fillText(t, cvs.width / 2, cvs.height - i * fontSize, cvs.width)
        ctx.strokeText(t, cvs.width / 2, cvs.height - i * fontSize, cvs.width)
    })
}

function init () {
    topTextInput = document.querySelector('#top-text')
    topTextSizeInput = document.querySelector('#top-text-size-input')
    bottomTextInput = document.querySelector('#bottom-text')
    bottomTextSizeInput = document.querySelector('#bottom-text-size-input')
    imageInput = document.querySelector('#image-input')
    generateBtn = document.querySelector('#generate-btn')
    cvs  = document.querySelector('#meme-canvas')
    


    ctx = cvs.getContext('2d')

    cvs.width = cvs.height = 0

    generateBtn.addEventListener('click', () => {
        let reader = new FileReader()
        reader.onload = function () {
            let img = new Image
            img.src = reader.result
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value)
        }
        reader.readAsDataURL(imageInput.files[0])
    })
}





init()