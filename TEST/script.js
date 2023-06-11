const audio = new Audio("zelda.mp3");
const buttons = document.querySelectorAll("button");



function onSubmit() {
    if (document.getElementById('pass').value == '1234' && document.getElementById('user').value === 'batman')
     {
          window.location.href = "https://www.w3schools.com";
    } else {
      alert('Acesso negado! Por favor, tente novamente.');
    }
  }