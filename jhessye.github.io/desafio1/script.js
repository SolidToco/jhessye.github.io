const audio = new Audio("zelda.mp3");
const buttons = document.querySelectorAll("button");



function onSubmit() {
    if (document.getElementById('pass').value == '6146' && document.getElementById('user').value === '2648a882b0e0c41afa3b890333fcea3a')
     {
          window.location.href = "premio.html";
    } else {
      alert('Acesso negado! Por favor, tente novamente.');
    }
  }