const audio = new Audio("zelda.mp3");
const buttons = document.querySelectorAll("button");



function onSubmit() {
    if (document.getElementById('pass').value == 'VMHU' && document.getElementById('user').value === 'sabonete')
     {
          window.location.href = "../mainpage/mainpage.html";
    } else {
      alert('Acesso negado! Por favor, tente novamente.');
    }
  }