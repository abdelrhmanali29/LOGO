function dropLang() {
  let myDropdown = document.getElementById("drop-cur");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  document.getElementById("drop-lang").classList.toggle("show");
}

function dropCur() {
  let myDropdown = document.getElementById("drop-lang");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  document.getElementById("drop-cur").classList.toggle("show");
}

function showList() {
  let list = document.getElementById("header");
  list.style.display = "block";
}

function closeList() {
  let list = document.getElementById("header");
  list.style.display = "none";
}



function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navMobile").style.backgroundColor = "rgba(00, 00, 00, 0.9)";
    document.getElementById("navMobile").style.height = "80px";
    document.getElementById("list").style.height = "80px";
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("navMobile").style.backgroundColor = "transparent"
    document.getElementById("navMobile").style.height = "100px";
    document.getElementById("logo").style.fontSize = "36px";
  }
}

window.onscroll = function () { scrollFunction() };

window.onclick = function (e) {
  if (!e.target.matches('.header')) {
    let list = document.getElementById("header");
    if (list.style.display == "block") {
      list.style.display = "none";
    }
  }
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

