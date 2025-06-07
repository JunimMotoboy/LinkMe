  const elemento = document.getElementById("cargo");
  const palavras = ["Desenvolvedor Junior", "Designer Junior"];
  let i = 0;
  let index = 0;
  let apagando = false;

  function digitar() {
    const palavraAtual = palavras[i];

    if (!apagando) {
      
      elemento.textContent = palavraAtual.substring(0, index + 1);
      index++;

      if (index === palavraAtual.length) {
        apagando = true;
        setTimeout(digitar, 1500); 
        return;
      }
    } else {
     
      elemento.textContent = palavraAtual.substring(0, index - 1);
      index--;

      if (index === 0) {
        apagando = false;
        i = (i + 1) % palavras.length; 
      }
    }

    setTimeout(digitar, 90); 
  }

  digitar();