// Retrieve the data from localStorage
const newText = localStorage.getItem("name");

// Update the text if the data exists
  document.querySelector("#heading").innerHTML= `Hey ${newText} 🖐`;
