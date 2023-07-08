const audio = new Audio("zelda.mp3");
const buttons = document.querySelectorAll("button");



function onSubmit() {
    if (document.getElementById('pass').value == 'EXIT' && document.getElementById('user').value == 'WORLD')
     {
          window.location.href = "premio.html";
    } else {
      alert('Acesso negado! Por favor, tente novamente.');
    }
  }