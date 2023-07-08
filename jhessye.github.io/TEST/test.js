function onSubmit() {
    if (document.getElementById('pass').value == '1234') {
      window.location.href = "https://www.w3schools.com";
    } else {
      alert('Access Denied, Please try again');
    }
  }