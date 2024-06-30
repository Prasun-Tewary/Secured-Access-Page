document.querySelector(".submit").addEventListener("submit", function(e){
  e.preventDefault();
  const user=document.querySelector(".user").value;
  const pass=document.querySelector(".pass").value;
  localStorage.setItem('name', user);
  localStorage.setItem('secu', pass);
  window.open("login.html", "_parent");
});
