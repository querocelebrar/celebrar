var counter = 0;
var userName = "";
var typingSpeed = -25;

// All the HTML elements loaded?
document.addEventListener('DOMContentLoaded', function() {

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyDtaj6AuQj4DIXeegcIMkUkDH2llTiPE78",
      authDomain: "querocelebrar-9e5e9.firebaseapp.com",
      databaseURL: "https://querocelebrar-9e5e9.firebaseio.com",
      projectId: "querocelebrar-9e5e9",
      storageBucket: "querocelebrar-9e5e9.appspot.com",
      messagingSenderId: "111841037176"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  // Scroll to the top of the page when page refresh
  $("html, body").animate({scrollTop: 0}, 100);

  setTimeout(function() {

    // After some waiting scrolls to chat
    $('body').animate({ scrollTop: $('#p-hero')[0].scrollHeight }, 1200);

    generateLeftMessage(counter);
    Typed.new('#uniq-' + counter, {
      strings: ["Que coisa boa! ^500 Mais gente querendo Celebrar! ^500 Estou aqui para te ajudar a organizar toda sua festa. ^500 Juntos, vamos organizar tudo do inicio ao fim. ^500 É muito fácil e varias pessoas já estão contando com minha ajuda... ^500 VAMOS CELEBRAR!!!"],
      typeSpeed: typingSpeed,
      showCursor: false,
      callback: function() {

        generateLeftMessage(++counter);
        Typed.new('#uniq-' + counter, {
          strings: ["^500 Ops... ^500 Já ia esquecendo de me apresentar "],
          typeSpeed: typingSpeed,
          showCursor: false,
          callback: function() {

            // Append Emoji
            $('#uniq-' + counter).append("<i class='em em-flushed'></i>...");

            generateLeftMessage(++counter);
            Typed.new('#uniq-' + counter, {
              strings: ["^500 Eu sou a Nina, ^500 sua robô assistente. ^500 E você? ^500 Como posso te chamar?"],
              typeSpeed: typingSpeed,
              showCursor: false,
              callback: function() {

                // Show input bar and name form to the user
                $('#input-bar').toggle();
                $('#form-name').toggleClass('show-form');
                $('#input-name').focus();
              }
            });
          }
        });
      }
    });
  }, 800);
});

$('#form-name').submit(function(event) {
  event.preventDefault();

  // Hide the input bar
  $('#input-bar').toggle();

  var name = $(this).serializeArray()[0].value;
  userName = name;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("Meu nome é " + name + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Muito prazer " + name + "!" + "^500 Agora vou te fazer algumas perguntas para irmos montando seu perfil e o perfil de sua comemoração tá?"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual sua idade? ^500"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and age form to the user
          $('#input-bar').toggle();
          $('#form-age').toggleClass('show-form');
          $('#input-age').focus() ;

          // Hide name form
          $('#form-name').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-age').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var age = $(this).serializeArray()[0].value,
      emoji = "",
      message = "";

  if (age < 18) {
    message = "Vem logoo dezoitaaão! ";
    emoji = "<i class='em em-grimacing'></i>";
  } else if (age >= 18 && age < 25) {
    message = "Que saudades da minha época nessa idade rsrs....! ";
    emoji = "<i class='em em-flushed'></i>";
  } else if (age >= 25 && age <= 29) {
    message = "Os 30 estão chegandooo! kkkk ";
    emoji = "<i class='em em-fearful'></i>";
  } else {
    message = "Opa!!! Até que enfim alguém da minha época!!! ";
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("tenho " + age + ' anos.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateBreakableLeftMessage(++counter);

      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual é o motivo da sua comemoração?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and reason form to the user
          $('#input-bar').toggle();
          $('#form-reason').toggleClass('show-form');
          $('#input-reason').focus();

          // Hide age form
          $('#form-age').toggleClass('show-form');
        }
      });
    }
  });
});

document.getElementById('reasonFormatura').addEventListener('click', reasonEvent);
document.getElementById('reasonConfraternizacao').addEventListener('click', reasonEvent);
document.getElementById('reasonAniversario').addEventListener('click', reasonEvent);
document.getElementById('reasonOutros').addEventListener('click', reasonEvent);

// Reason buttons events
function reasonEvent(event) {
  event.preventDefault();

  let reasons = ["Formatura", "Aniversário", "Confraternização", "Outros"];

  let buttonReason = this.innerText;
  let reasonIndex = 0;
  reasons.forEach(function(reason, index) { 
    if (reason.toUpperCase() === buttonReason) { reasonIndex = index; }
  });

  // Hide input bar and get the input value
  $('#input-bar').toggle();

  let messages = [
    "OPAA, profissional novo na área?!!", 
    "aaahaaa uhuuuuu o " + userName + " eu vou comer seu boloo!!!! kkkkkk", 
    "Confraternização??? Não esquece da sua assistente pessoal aqui ta???", 
    "Isso, vamos celebrar a VIDAA!!!! kkkkkk"
  ],
  emojis = [
    "<i class='em em-mortar_board'></i>",
    "<i class='em em-flushed'></i>",
    "<i class='em em-grimacing'></i>",
    "<i class='em em-smile'></i>"
  ],
  message = messages[reasonIndex],
  emoji = emojis[reasonIndex];

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(reasons[reasonIndex] + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual a data você considera ideal para sua comemoração?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-date').toggleClass('show-form');
          $('#input-date').focus();

          // Hide reason form
          $('#form-reason').toggleClass('show-form');
        }
      });
    }
  });
}

$('#form-date').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var date = new Date($(this).serializeArray()[0].value),
      currentDate = new Date(),
      days = Math.round(Math.abs((date.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000))),
      month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  generateRightMessage(++counter);

  $('#uniq-' + counter).text("dia " + date.getDay() + ' de ' + month[date.getMonth()] + ' de ' + date.getFullYear() + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Hmmmm, ^500 temos " + days + " dias até a data da sua festa..."],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["Agora me diga, ^500 quantas pessoas você considera ideal para sua comemoração ser ideal?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-amount').toggleClass('show-form');
          $('#input-amount').focus();

          // Hide date form
          $('#form-date').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-amount').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var amount = $(this).serializeArray()[0].value,
      message = "",
      emoji = "";

  if (amount < 30) {
    message  = "Uma coisa mais reservada né? ^500 Legal....";
  } else if (amount >= 30 && amount <= 50) {
    message = "Hmmmm... ^500 vai ser uma bagunça boa ein??? ";
    emoji = "<i class='em em-stuck_out_tongue'></i>";
  } else if (amount > 50 && amount <= 70) {
    message = "Uauu, ^500 baita festança ein?!?! ";
    emoji = "<i class='em em-fearful'></i>";
  } else {
    message = "É pra parar a cidade?!?! ^500 Kkkkkkk "
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(amount + ' pessoas.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {

        strings: ["Uma excelente forma de planejarmos tudo é estabelecer um valor mensal que você possa economizar e ir acumulando. ^500 Qual valor você imagina que consiga separar todo mês para sua festa?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and money form to the user
          $('#input-bar').toggle();
          $('#form-money').toggleClass('show-form');
          $('#input-money').focus();

          // Hide amount form
          $('#form-amount').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-money').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var money = $(this).serializeArray()[0].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text('R$' + money);

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Pronto, ^500 já tenho as informações iniciais que preciso. ^500 Agora vou precisar de tempo para pensar em algumas sugestões! ^500 Vou te chamar daqui uns dias, ^500 pode ser? ^500 Qual seu email pessoal?"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Show input bar and date form to the user
      $('#input-bar').toggle();
      $('#form-email').toggleClass('show-form');
      $('#input-email').focus();

      // Hide money form
      $('#form-money').toggleClass('show-form');
    }
  });
});

$('#form-email').submit(function(event) {
  event.preventDefault();

  // Hide input bar and email form
  $('#form-email').toggleClass('show-form');
  $('#input-bar').toggle();

  var email = $(this).serializeArray()[0].value;
  // var phone = $(this).serializeArray()[1].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("Meu email é " + email + ".");

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Pronto, ^500 já vou fazer uma pesquisa com suas informações e logo logo entro em contato para começarmos a organizar tudo... ^500 Até logo..."],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
          
        strings: ["Festa e noticia boa a gente conta para os amigos, né? ^500 Conte para eles que você já está organizando sua comemoração!!!, ^500 Compartilhe essa noticia em sua pagina do Facebook clicando no link abaixo."],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          generateBreakableLeftMessage(++counter);
          Typed.new('#uniq-' + counter, {
            strings: ["FUII... \n"],
            typeSpeed: typingSpeed,
            showCursor: false,
            callback: function () {

              $('#shareBtnSection').toggleClass('show-shareBtn');

              // Append Emoji
              // $('#uniq-' + counter).append('');

              scrollScreen();

              var messages = $('#terminal').find(".chat-message").get().map(function(children) {
                return children.innerText;
              });

              var result = messages[3]
                + ' ' + messages[6]
                + ' O motivo da celebração é ' + messages[9]
                + ' Estou planejando no  ' + messages[12]
                + ' Por volta de ' + messages[15]
                + ' Planejo gastar ' + messages[18]
                + ' Meu email é ' + messages[20]
                // + ' Meu telefone é ' + messages[21]

              var obj = {
                Nome: messages[3],
                Idade: messages[6],
                Motivo: messages[9],
                Data: messages[12],
                Capacidade: messages[15],
                Financas: messages[18],
                Email: messages[20],
                Telefone: messages[21] 
              }

              firebase.database().ref('leads/').push(obj);

              // Send email with all the conversation history to the admin
              $.ajax({
                url: '//formspree.io/sac.querocelebrar@gmail.com',
                method: 'POST',
                data: { mensagem: result },
                dataType: 'json'
              });
            }
          });
        }
      });
    }
  });
});

function scrollScreen() {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    window.scrollTo(0, $(document).height());
  }else { $("html, body").animate({ scrollTop: $(document).height() }, 1000); }
}

function generateBreakableLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message breakable-string';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateRightMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      span = document.createElement("span"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-right';
  chatName.className = 'chat-name';
  span.className = 'initial';
  span.textContent = 'R';
  chatName.appendChild(span);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}
