document.querySelector(".log").addEventListener("submit", function(e){
  e.preventDefault();
  const user=document.querySelector(".userData").value;
  const pass=document.querySelector(".passData").value;
  const name= localStorage.getItem('name');
  const secu= localStorage.getItem('secu');
  if(user===name && pass===secu){
    user.value="";
    pass.value="";
    window.open("securePage.html", "_parent");
  }
  else if(user!==name && pass===secu){
    alert("Enter correct Username");
  }
  else if(user===name && pass!==secu){
    alert("Enter correct Password");
  }
  else{
    alert("You enter a wrong Username & Password");
  }
});