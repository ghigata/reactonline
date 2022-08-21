document.getElementById("fullname").addEventListener("change", (e) => {
   let value = e.target.value;
   document.getElementsByClassName("text")[0].innerHTML = value;
});
