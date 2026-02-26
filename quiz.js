let perguntas = [
    {
      "id": 1,
      "texto": "Onde nos vemos a primeira vez?",
      "opcao_a": "Villa Lobos",
      "opcao_b": "Festa junina",
      "opcao_c": "Parque do Jockey",
      "opcao_d": "NDA",
      "resposta_certa": "B",
      "foto": "img/villalobos1.jpeg"
    },
    {
      "id": 2,
      "texto": "Dia do primeiro beijo.",
      "opcao_a": "22/08",
      "opcao_b": "12/07",
      "opcao_c": "15/09",
      "opcao_d": "10/08",
      "resposta_certa": "A",
      "foto": "img/primeirobeijo.jpeg"
    },
    {
      "id": 3,
      "texto": "Nossa banda favorita?",
      "opcao_a": "CBJR",
      "opcao_b": "Guns N' Roses",
      "opcao_c": "KISS",
      "opcao_d": "AEROSMITH",
      "resposta_certa": "A",
      "foto": "img/festajunina.jpeg"
    },
    {
      "id": 4,
      "texto": "Data que nos conhecemos?",
      "opcao_a": "22/06",
      "opcao_b": "18/06",
      "opcao_c": "14/06",
      "opcao_d": "20/06",
      "resposta_certa": "C",
      "foto": "img/quarto.jpeg"
    },
    {"id": 5,
    "texto": "Quem faz o melhor suco de melancia?",
    "opcao_a": "IAGO",
    "opcao_b": "IAGO",
    "opcao_c": "IAGO",
    "opcao_d": "BELA",
    "resposta_certa": "A",
    "foto": "img/quarto2.jpeg"},
    
    {"id": 6,
        "texto": "Somos um casal muito?",
        "opcao_a": "PROSPEROS E TUDO DE BOM QUE TEM NA VIDA",
        "opcao_b": "RUIM",
        "opcao_c": "NORMAL",
        "opcao_d": "PESSIMO",
        "resposta_certa": "A",
        "foto": "img/fotopiscina.jpg"},
    {"id": 7,
    "texto": "Ate quando iremos nos amar?",
    "opcao_a": "Para o fim da vida",
    "opcao_b": "Para alem dessa vida",
    "opcao_c": "Ate o Palmeiras ganhar um mundial",
    "opcao_d": "NDA",
    "resposta_certa": "B",
    "foto": "img/FESTAFANTASIA.jpeg"},
    {"id": 8,
    "texto": "Primeira festa fantasia?",
    "opcao_a": "Hallowenn festa da Bela",
    "opcao_b": "Comitou",
    "opcao_c": "Festa de aniversario Manoel",
    "opcao_d": "NDA",
    "resposta_certa": "A",
    "foto": "img/chroma.jpeg"},
    {"id": 9,
      "texto": "Se nao sou eu quem vai fazer voce feliz?",
      "opcao_a": "GUERRA!",
      "opcao_b": "Voce!",
      "opcao_c": "Nós",
      "opcao_d": "NDA",
      "resposta_certa": "A",
      "foto": "img/livrochorao.jpg"},
      {"id": 10,
        "texto": "Qual comida eu nunca recusaria ?",
        "opcao_a": "Baiao de dois!",
        "opcao_b": "Arroz, bife e feijao",
        "opcao_c": "Sushi",
        "opcao_d": "Sorvete",
        "resposta_certa": "B",
        "foto": "img/cavepool.jpg"},
        {"id": 11,
          "texto": "Nosso primeiro jantar fora only nos dois ?",
          "opcao_a": "Japa no butanta",
          "opcao_b": "The Square",
          "opcao_c": "Mexicano",
          "opcao_d": "Abud",
          "resposta_certa": "B",
          "foto": "img/primeirobeijo.jpeg"}


  ];
  
  let perguntaAtual = parseInt(localStorage.getItem("perguntaAtual")) || 0;
  let respostasUsuario = JSON.parse(localStorage.getItem("respostasUsuario")) || {};
  
  mostrarPergunta();
  
  function mostrarPergunta() {
      const p = perguntas[perguntaAtual];
  
      // Atualiza foto da pergunta
      document.getElementById("fotoPergunta").src = p.foto;
  
      // Atualiza texto
      document.getElementById("perguntaTexto").innerText = p.texto;
  
      const botoesDiv = document.getElementById("botoesOpcoes");
      botoesDiv.innerHTML = "";
  
      ["A","B","C","D"].forEach(letra => {
          const btn = document.createElement("button");
          btn.innerText = `${letra}: ${p["opcao_" + letra.toLowerCase()]}`;
          btn.onclick = () => responder(letra, btn);
          if(respostasUsuario[p.id] === letra) btn.classList.add("selected");
          botoesDiv.appendChild(btn);
      });
  
      document.getElementById("btnAnterior").disabled = perguntaAtual === 0;
      document.getElementById("btnProximo").disabled = perguntaAtual === perguntas.length -1;
  }
  
  function responder(letraEscolhida, btn) {
      const p = perguntas[perguntaAtual];
      respostasUsuario[p.id] = letraEscolhida;
      localStorage.setItem("respostasUsuario", JSON.stringify(respostasUsuario));
  
      const botoes = document.querySelectorAll("#botoesOpcoes button");
      botoes.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
  
      // Se for última pergunta, vai para resultado
      if(perguntaAtual === perguntas.length -1) {
          window.location.href = "resultado.html";
      } else {
          perguntaAtual++;
          localStorage.setItem("perguntaAtual", perguntaAtual);
          mostrarPergunta();
      }
  }
  
  function proximaPergunta() {
      if(perguntaAtual < perguntas.length -1) perguntaAtual++;
      localStorage.setItem("perguntaAtual", perguntaAtual);
      mostrarPergunta();
  }
  
  function anteriorPergunta() {
      if(perguntaAtual > 0) perguntaAtual--;
      localStorage.setItem("perguntaAtual", perguntaAtual);
      mostrarPergunta();
  }
  