function myFunction1() {
  let myDropdown = document.getElementById("mydropdown2");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  document.getElementById("mydropdown1").classList.toggle("show");
}

function myFunction2() {
  let myDropdown = document.getElementById("mydropdown1");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  document.getElementById("mydropdown2").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("mydropdown1");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("mydropdown2");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}