let bntCriptografar = document.getElementById('btn-criptografar');
let bntDescriptografar = document.getElementById('btn-descriptografar');
let message = document.querySelector('.message');

function criptografar() {
  const inputText = document.querySelector('.text-content').value;
  const alertMessage = document.querySelector('.alerta-message');
  const imgContent = document.getElementById('imgcontent');
  const divContent = document.querySelector('.div-content');

  if (validateText(inputText)) {
    let text = inputText
      .replaceAll('a', 'ai')
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('o', 'ober')
      .replaceAll('u', 'ufat');

    if (imgContent) {
      imgContent.remove();
    }

    if (message) {
      message.innerHTML = '';
    }

    if (divContent.classList.contains('div-contentTwo')) {
      divContent.classList.remove('div-contentTwo');
      divContent.classList.add('div-content3');
    } else if (divContent.classList.contains('div-content3')) {
      divContent.classList.remove('div-content3');
      divContent.classList.add('div-contentTwo');
    } else {
      divContent.classList.add('div-contentTwo');
    }

    alertMessage.innerText = text.substring(0, 200) + '...';
    createBtn(text);
  } else {
    if (imgContent) {
      imgContent.remove();
    }
    if (message) {
      message.remove();
    }
    alertMessage.innerText = 'Apenas textos com letras minúsculas e sem acento';
  }
}

function descriptografar() {
  const inputText = document.querySelector('.text-content').value;
  let alertMessage = document.querySelector('.alerta-message');
  let imgContent = document.getElementById('imgcontent');
  let message = document.querySelector('.message');
  const divContent = document.querySelector('.div-content');


  if (validateText(inputText)) {
    console.log("Texto antes da descriptografia:", inputText);
    let text = inputText
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    console.log("Texto depois da descriptografia:", text);

    if (imgContent) {
      imgContent.remove();
    }

    if (message) {
      message.innerHTML = '';
    }

    if (divContent.classList.contains('div-contentTwo')) {
      divContent.classList.remove('div-contentTwo');
      divContent.classList.add('div-content3');
    } else if (divContent.classList.contains('div-content3')) {
      divContent.classList.remove('div-content3');
      divContent.classList.add('div-contentTwo');
    } else {
      divContent.classList.add('div-contentTwo');
    }
    alertMessage.innerText = text;
    createBtn(text); 
  } else {
    if (imgContent) {
      imgContent.remove();
    }
    if (message) {
      message.remove();
    }
    alertMessage.innerText = 'Apenas textos com letras minúsculas e sem acento';
  }
}

function validateText(text) {
  return !/[A-Z-ü0-9]/.test(text);
}

bntCriptografar.addEventListener('click', criptografar);
bntDescriptografar.addEventListener('click', descriptografar);

function createBtn(text) {
  let btnCopy = document.createElement('button');
  let divContent = document.querySelector('.div-content');
  btnCopy.classList.add('btncopy');
  btnCopy.textContent = 'Copiar';

  btnCopy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
    }
  });

  divContent.appendChild(btnCopy);
}