var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}*/


/*var slideIndex = 0;
showSlides();*/ 

/*function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
 // setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/


function teste(offset) {

  var posters = [
    document.getElementById("poster-a"),
    document.getElementById("poster-b"),
    document.getElementById("poster-c")
  ];



  if(offset === 0) {
     

    posters[1].style.top = -18 + "vh"
    posters[0].style.top = -28 + "vh"
    posters[2].style.top =  -5 + "vh"
    posters[0].style.zIndex = "1003"
    posters[2].style.zIndex = "auto"
    
    $('#essencia_btn_a').attr("src","imgs/jukebox-04.png")

  }

  if(offset === 1) {
    
    posters[0].style.top = -18 + "vh"
    posters[1].style.top = -28 + "vh"
    posters[2].style.top =  -5 + "vh"
    posters[1].style.zIndex = "1003"
    posters[0].style.zIndex = "auto"
    posters[2].style.zIndex = "auto"

    $('#essencia_btn_b').attr("src","imgs/jukebox-05.png")
  }

  if(offset === 2) {
    
    posters[2].style.top = -28 + "vh"
    posters[1].style.top = -18 + "vh"
    posters[0].style.top = -5 + "vh"
    posters[2].style.zIndex = "1003"
    posters[1].style.zIndex = "1"
    posters[0].style.zIndex = "auto"

    $('#essencia_btn_c').attr("src","imgs/jukebox-06.png")
  }
}


function testeB(offset) {
  $('#essencia_btn_a').attr("src","imgs/jukebox-01.png")
  $('#essencia_btn_b').attr("src","imgs/jukebox-02.png")
  $('#essencia_btn_c').attr("src","imgs/jukebox-03.png")
}


var imageChange = document.getElementById('home-img');
/*
(function(){
 
*/
/*
(function(){

  var pics = new Array("https://media.giphy.com/media/l378vMZ1IbLcmj3H2/giphy.gif","https://media.giphy.com/media/6CuzeUgKuePiE/giphy.gif","https://media.giphy.com/media/LPBPrZOGx5lZzgo587/giphy.gif","https://media.giphy.com/media/2zlK87v3KPOJG/giphy.gif", "https://media.giphy.com/media/mciMfMijRXIfm/giphy.gif", "https://media.giphy.com/media/HkyYoNbBoRKjS/giphy.gif", "https://media.giphy.com/media/l0HlLW9gK6n6HbvtC/giphy.gif", "https://media.giphy.com/media/mciMfMijRXIfm/giphy.gif", "https://media.giphy.com/media/xT9IgjzykJ9WwJV8Aw/giphy.gif", "https://media.giphy.com/media/ze8fPqDU2f2HC/giphy.gif", "https://media.giphy.com/media/biKqwYslgvPZ6/giphy.gif")

  

  function oi() {
    setTimeout(function() {
      var num = Math.floor(Math.random() * pics.length)
      imageChange.src = pics[num]
      imageChange.style.display = "block"

    },300)
  }

  setInterval(function() {
    var num = Math.floor(Math.random() * pics.length)
    imageChange.src = pics[0]
    console.log(num)

    oi()
  },3000)


})()*/


$(".nav-a").click(function(){
  $(".nav-a").removeClass('nav-active')
  $(this).addClass('nav-active')
})

$(document).ready(function() {
  $('#lettering').show('slow')
  var phrases = new Array("[A ARTE DE JUNTAR AS METADES E FAZER UM INTEIRO]","[A ARTE DE PENSAR EM DOBRO PARA FAZER DIREITO]", "[A ARTE DE FAZER UMA METADE DO TEMPO TRABALHAR PARA A OUTRA METADE DO TEMPO]", "[A ARTE DE NAO DESPERDICAR TEMPO COM ATALHOS]", "[A ARTE DE NAO ACHAR QUE TUDO PRECISA SER UMA ARTE]", "[A ARTE DE DESISTIR NA METADE QUANDO A IDEIA JA NAO FAZ SENTIDO]", "[A ARTE DE PERGUNTAR EM DOBRO QUANDO AS RESPOSTAS ESTAO PELA METADE]")

  setInterval(function(){
    $('#lettering').show('slow')
    var numB = Math.floor(Math.random() * phrases.length);
    $('#lettering').html(phrases[numB])
  }, 3000)

  /*
  $(".balao").on("mouseover", function(){
    var balloonText = ["Imprevisibilidade não é a norma."]
    $(".balao").html("OUVIR")
    $(this).html(balloonText[0])
  });
  */
});

$(".mouth").hover(function(){
  $(".mouth").css("background-image", "url('imgs/orelha.png')")
  $(".mouth").css("background-color", "red")
  $(".mouth").css("background-size", "25vw")
  $(".o_que_e_p").css("display", "none")
  $(this).css({"background-image": "url('https://media.giphy.com/media/l378iZdJpAxwwdY52/giphy.gif')","background-color":"blue","background-size":"cover"})
});

function menuEssencia() {
 document.getElementById("contexto").style.display = "block"
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


 function changeBalloon(e, x){
    var balloonText = [
        "Ágil é diferenciar causa de consequência.",
			  "Imprevisibilidade não é a norma.",
			  "Coisas mudam.",
			  "Capacidade é finita.",
			  "P.O. sem atitude não atravessa a rua.",
			  "O Scrum não é Master à toa. Aja como.",
			  "Backlog é mais que uma lista de atividades priorizadas.",
			  "O cliente nem sempre tem razão. Debata.",
			  "Comunicação é a alma.",
			  "Quem procrastina, levanta a mão. Ué, não procrastinou agora.",
			  "A duração da Sprint é uma arte.",
			  "Não, não é sobre ser mais veloz.",
			  "Kanban estático é exposição de arte. Faça gestão visual.",
			  "Pensando que era impossível, esqueceu de colocar no backlog.",
			  "Confiança vem do hábito.",
			  "O erro é normal. Anormal é não fazer retrospectiva.",
			  "Coloca pra funcionar.",
			  "Fazer de qualquer jeito não é ser ágil. ",
			  "Tente não usar a palavra ágil. Ela só atrapalha.",
			  "Nos dias de entrega, faça a entrega.",
    ]  

    $(".balao").html("")
    $(".balao").css({"background":"url(imgs/balao-03.svg) no-repeat center","color":"red"})
    $(e.toElement).html(balloonText[x])
    $(e.toElement).css({"background":"url(imgs/balao-02.svg) no-repeat center", "color":"red"})
    
}

function changeToNormal() {
  $(".balao").html("")
  $(".balao").css({"background":"url(imgs/balao-01.svg) no-repeat center", "color":"black"})
}


