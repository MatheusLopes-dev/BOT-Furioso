function sendMessage() {
    const userInput = document.getElementById("userInput").value.toLowerCase().trim();
    const chatBox = document.getElementById("chatBox");
    const clutchSound = document.getElementById("clutchSound");
    const crowdSound = document.getElementById("crowdSound");

    if (userInput !== "") {
        // Adiciona mensagem do usuário
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        // Resposta do bot
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.innerHTML = `<img src="img/pantera-preta.png" alt="Pantera Preta" class="bot-avatar">${getBotResponse(userInput)}`;
        chatBox.appendChild(botMessage);

        // Toca som baseado na interação
        if (userInput.includes("clutch") || userInput.includes("jogo") || userInput.includes("vitoria")) {
            clutchSound.play();
        } else if (userInput.includes("torcida") || userInput.includes("furia")) {
            crowdSound.play();
        }

        // Limpa o input
        document.getElementById("userInput").value = "";

        // Rola o chat pra baixo
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function quickMessage(text) {
    document.getElementById("userInput").value = text;
    sendMessage();
}

function getBotResponse(input) {
    // Debug pra regras
    if (input.includes("regras")) {
        console.log("Condição de regras acionada. Input:", input);
    }

    // Respostas para jogadores de CS2
    if (input.includes("fallen") || input.includes("professor")) {
        return "FalleN? O rei do clutch! A lenda do CS brasileiro tá sempre ensinando.<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/falleNcs' target='_blank'>@falleNcs</a></span>";
    } else if (input.includes("kscerato")) {
        return "KSCERATO? O monstro dos clutchs! Esse cara não perdoa no 1v1.<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/kscerato' target='_blank~$'>@kscerato</a></span>";
    } else if (input.includes("yuurih")) {
        return "yuurih? O cara tá sempre on, destruindo com a AK!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/yuurihfps' target='_blank'>@yuurihfps</a></span>";
    } else if (input.includes("art") || input.includes("art")) {
        return "arT? O mestre das estratégias agressivas! O IGL da FURIA é brabo.<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/artcsgo' target='_blank'>@artcsgo</a></span>";
    } else if (input.includes("chelo")) {
        return "chelo? O cara que segura a bomba com estilo!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/chelocsgo' target='_blank'>@chelocsgo</a></span>";
    } else if (input.includes("skullz")) {
        return "Skullz? O novo talento da FURIA, já tá mostrando serviço!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/skullzcs' target='_blank'>@skullzcs</a></span>";
    } else if (input.includes("shz")) {
        return "shz? O reforço que veio pra somar na FURIA!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/shzfps' target='_blank'>@shzfps</a></span>";
    }

    // Respostas para jogadores da Kings League
    else if (input.includes("jeffinho")) {
        return "Jeffinho? O craque da FURIA na Kings League, dribla até a sombra!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/jeffinhofps' target='_blank'>@jeffinhofps</a> (confirme o handle real!)</span>";
    } else if (input.includes("lipao") || input.includes("lipão")) {
        return "Lipão? O monstro do gol, mete bola na rede com estilo!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/lipaofps' target='_blank'>@lipaofps</a> (confirme o handle real!)</span>";
    } else if (input.includes("caio")) {
        return "Caio? O cara que domina o meio-campo na Kings League!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/caiofps' target='_blank'>@caiofps</a> (confirme o handle real!)</span>";
    } else if (input.includes("douglas")) {
        return "Douglas? O paredão da defesa da FURIA, ninguém passa!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/douglasfps' target='_blank'>@douglasfps</a> (confirme o handle real!)</span>";
    } else if (input.includes("luiz")) {
        return "Luiz? O maestro das jogadas na Kings League, visão de águia!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/luizfps' target='_blank'>@luizfps</a> (confirme o handle real!)</span>";
    }

    // Respostas para presidentes da Kings League
    else if (input.includes("neymar")) {
        return "Neymar? O presidente da FURIA na Kings League, o rei da zoeira e da caneta!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/neymarjr' target='_blank'>@neymarjr</a></span>";
    } else if (input.includes("gaules")) {
        return "Gaules? O chefe da torcida, leva a FURIA no peito!<br><span class='link-container'>Instagram: <a href='https://www.instagram.com/gaules' target='_blank'>@gaules</a></span>";
    }

    // Respostas gerais
    else if (input.includes("jogos") || input.includes("jogo")) {
        return "A FURIA tá com jogo brabo de CS2 na ESL Pro League contra a MIBR, dia 28! No Kings League, rola confronto na Kings World Cup, dia 30. Qual tu tá mais hypado pra ver? 🐆";
    } else if (input.includes("dicas") || input.includes("dica")) {
        return "Quer mitar no CS, parça? Treina o spray da AK-47 e foca no crosshair placement, igual o KSCERATO faz. Bora rushar o B com a faca nos dentes? 💥";
    } else if (input.includes("meme") || input.includes("zoeira")) {
        return "Quando o adversário acha que vai ganhar da FURIA: 🤡 KKKK! Quer mais zoeira ou prefere falar de panterada?";
    } else if (input.includes("trivia")) {
        return "Bora testar teu conhecimento? Qual Major a FURIA chegou na semifinal em 2022? (Dica: foi no Brasilzão!) Digita a resposta!";
    } else if (input.includes("rio") && input.includes("major")) {
        return "Acerto brabo, parça! A FURIA chegou na semi do IEM Rio Major 2022, orgulho da nação! 🏆 Quer outra trivia?";
    } else if (input.includes("loja") || input.includes("merch")) {
        return "Tá afim de ostentar o manto da FURIA? Corre e pega tua camisa! 🐆<br><span class='link-container'>Loja oficial: <a href='https://furia.gg' target='_blank'>furia.gg</a></span>";
    } else if (input.includes("enquete")) {
        return "Bora de enquete? Quem leva o próximo clutch: yuurih ou chelo? Digita o nome do teu favorito!";
    } else if (input.includes("yuurih") && input.includes("enquete")) {
        return "Boa, parça! yuurih é um monstro, vai clutchar na moral! Quer outra enquete ou prefere dicas de CS?";
    } else if (input.includes("chelo") && input.includes("enquete")) {
        return "Tá na fé do chelo, hein? Esse cara segura a bomba direitinho! Bora outra enquete ou quer zoeira?";
    } else if (input.includes("kings") || input.includes("league")) {
        return "A FURIA tá na Kings League com o Neymar na presidência! É futebol 7 insano, com carta de poder e tudo. Quer saber as regras ou os jogadores?";
    } else if (input.includes("regras") && (input.includes("kings") || input.includes("league") || input === "regras")) {
        return "As regras da Kings League são brabas, parça! É 7x7, com dois tempos de 20 min. Tem substituições ilimitadas, pênaltis 1x1 pra desempate (tipo correr do meio-campo!), e cartas secretas que dão vantagens, como gol valendo dobro ou expulsão de rival por 2 min. Amarelo manda pro sin bin por 2 min, vermelho por 5. A FURIA do Neymar joga com essas regras na Kings World Cup! Quer saber mais ou tá de boa? ⚽";
    } else if (input.includes("conquistas") || input.includes("titulos")) {
        return "A FURIA já levou a ESL Pro League Season 12 NA e chegou na semi do IEM Rio Major 2022. Quer detalhes de algum título ou tá de boa? 🏆";
    } else if (input.includes("torcida")) {
        return "A torcida da FURIA é a mais braba, meu nobre! Sempre na arquibancada ou na Twitch gritando ‘É A FURIA, PORR*!’. Tá com o manto? 🐆";
    } else if (input.includes("rush b")) {
        return "RUSH B, SEM PARAR, PARÇA! Mas deixa um cara no lurk, igual o arT faz. Quer mais dicas de CS ou tá de zoeira? 💥";
    } else if (input.includes("pantera")) {
        return "A pantera é o símbolo da FURIA, meu chapa! Representa força e garra. Quer saber mais da história da equipe ou prefere memes?";
    } else if (input.includes("clutch foda")) {
        return "Hahaha, clutch foda é com o KSCERATO! Lembra aquele 1v4 na Mirage? Quer ouvir uma história de clutch ou mandar zoeira?";
    } else if (input.includes("mirage")) {
        return "Mirage é o mapa da FURIA, parça! Aquele clutch do KSCERATO no IEM foi insano. Quer dicas pra jogar Mirage ou outra coisa?";
    } else if (input.includes("vitoria") || input.includes("ganhou")) {
        return "Quando a FURIA ganha, é panterada na veia! 🐆 Última vitória foi um 2-0 contra a MIBR. Quer saber mais ou tá hypado pra próxima?";
    } else if (input.includes("mibr")) {
        return "MIBR? Tô de boa, mas a FURIA é o terror da Dust II! 😜 Quer falar de rivalidade ou prefere dicas de CS?";
    } else if (input.includes("dust ii") || input.includes("dust")) {
        return "Dust II é clássico, meu nobre! A FURIA sempre rusha o meio com tudo. Quer uma estratégia pra Dust ou outra zoeira?";
    } else if (input.includes("treino") || input.includes("melhorar")) {
        return "Pra melhorar no CS, treina granadas na Mirage e mira no Yprac. Igual o FalleN, foca na consistência! Quer mais dicas?";
    } else if (input.includes("easter egg") || input.includes("segredo")) {
        return "Tá procurando segredo, hein? Digita ‘panterada braba’ e vê o que rola... 😎";
    } else if (input.includes("panterada braba")) {
        return "BOOOOM! Panterada braba é o lema da FURIA! 🐆 Tu é dos nossos, parça! Quer um meme ou outra surpresa?";
    }

    // Resposta padrão
    return "Tô ligado que tu é FURIA, mas manda um papo mais claro, meu consagrado! 😜 Pergunta sobre jogos, jogadores, dicas, ou digita ‘meme’ pra zoeira!";
}