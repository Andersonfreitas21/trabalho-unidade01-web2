// ********** close links ************
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});

// ********** Colors buttons ************
// select backgrounds
const colors = ["green", "blue", "red"];
const btn_green = document.getElementById("btn-green");
const btn_blue = document.getElementById("btn-blue");
const btn_red = document.getElementById("btn-red");
const color = document.querySelector(".color");

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

btn_green.addEventListener("click", function () {
  document.body.classList.remove('bg-image');
  document.body.style.backgroundColor = colors[0];
  color.textContent = colors[0];
});

btn_blue.addEventListener("click", function () {
  document.body.classList.remove('bg-image');
  document.body.style.backgroundColor = colors[1];
  color.textContent = colors[1];
});

btn_red.addEventListener("click", function () {
  document.body.classList.remove('bg-image');
  document.body.style.backgroundColor = colors[2];
  color.textContent = colors[2];
});

// ********** Message ************
// list message
var btnEnviar = document.querySelector(".enviar");

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  var inputNome = document.querySelector("#nome").value;
  var inputMensagem = document.querySelector("#mensagem").value;
  if (inputNome || inputMensagem) {
    var txtNome = document.createTextNode(inputNome);
    var separator = document.createTextNode(": ");
    var txtMensagem = document.createTextNode(inputMensagem);

    var p = document.createElement("p");
    p.appendChild(txtNome);
    p.appendChild(separator);
    p.appendChild(txtMensagem);

    var btnExcluir = document.createElement("button");
    btnExcluir.appendChild(document.createTextNode("Excluir"));
    btnExcluir.classList.add("botao-excluir");
    btnExcluir.addEventListener("click", (event) => {
      event.preventDefault();
      event.target.parentNode.parentNode.remove();
    });

    var div = document.createElement("div");
    div.appendChild(p);
    div.appendChild(btnExcluir);
    div.classList.add("div-interno");

    var li = document.createElement("li");
    li.appendChild(div);

    var ul = document.querySelector(".ul");
    ul.style.listStyle = "none";
    ul.appendChild(li);

    var lista = document.querySelector(".lista");
    lista.appendChild(ul);
  }
});

function myFunction() {
  var popup = document.getElementById("divPopup");
  console.log(popup);
  popup.classList.toggle("show");
}
