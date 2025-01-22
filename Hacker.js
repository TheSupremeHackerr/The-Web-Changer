// ==UserScript==
// @name         The Web Changer
// @namespace    https://violentmonkey.github.io/
// @version      0.2
// @description  Cambia la apariencia de las páginas web con muchas opciones divertidas
// @author       TheSupremeHackerr
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';

    // Crear el menú
    let menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '50%';
    menu.style.left = '0px';
    menu.style.transform = 'translateY(-50%)';
    menu.style.padding = '10px';
    menu.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
    menu.style.borderRadius = '0 8px 8px 0';
    menu.style.zIndex = '9999';
    menu.style.fontFamily = 'Arial, sans-serif';
    menu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    menu.style.transition = 'left 0.3s';
    menu.style.width = '200px';
    menu.style.maxHeight = '80vh';
    menu.style.overflowY = 'auto';
    menu.style.animation = 'rgbEffect 3s infinite';

    // Estilo RGB animado para el menú
    let style = document.createElement('style');
    style.innerHTML = `
        @keyframes rgbEffect {
            0% { background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet); }
            25% { background: linear-gradient(90deg, violet, blue, green, yellow, orange, red); }
            50% { background: linear-gradient(90deg, blue, indigo, violet, red, orange, yellow); }
            75% { background: linear-gradient(90deg, green, yellow, red, violet, blue, indigo); }
            100% { background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet); }
        }
    `;
    document.head.appendChild(style);

    // Ocultar/mostrar menú al pasar el mouse
    menu.onmouseenter = () => {
        menu.style.left = '0px';
    };
    menu.onmouseleave = () => {
        menu.style.left = '-180px';
    };

    let title = document.createElement('h2');
    title.innerText = 'The Web Changer 2.0';
    title.style.color = '#ffffff';
    title.style.fontSize = '18px';
    title.style.margin = '0 0 10px 0';
    title.style.textAlign = 'center';
    menu.appendChild(title);

    let subtitle = document.createElement('p');
    subtitle.innerText = 'Github: TheSupremeHackerr';
    subtitle.style.color = '#ffffff';
    subtitle.style.fontSize = '12px';
    subtitle.style.margin = '0 0 10px 0';
    subtitle.style.textAlign = 'center';
    menu.appendChild(subtitle);

    document.body.appendChild(menu);

    // Funciones existentes
    function changeColors() {
        document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.body.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#121212' : '#ffffff';
        document.body.style.color = document.body.classList.contains('dark-mode') ? '#ffffff' : '#000000';
    }

    function playMusic() {
        let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.play();
    }

    function rainEmojis() {
        let emojis = ['😊', '😂', '😍', '🤔', '🥳', '😎', '🤖', '🐱‍👤', '🌟', '🔥'];
        for (let i = 0; i < 20; i++) {
            let emoji = document.createElement('div');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.top = '0px';
            emoji.style.fontSize = '24px';
            emoji.style.zIndex = '9999';
            document.body.appendChild(emoji);

            let fallInterval = setInterval(() => {
                emoji.style.top = parseFloat(emoji.style.top) + 5 + 'px';
                if (parseFloat(emoji.style.top) > window.innerHeight) {
                    clearInterval(fallInterval);
                    emoji.remove();
                }
            }, 30);
        }
    }

    function snowEffect() {
        for (let i = 0; i < 20; i++) {
            let snowflake = document.createElement('div');
            snowflake.innerText = '❄';
            snowflake.style.position = 'fixed';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.top = '0px';
            snowflake.style.fontSize = '24px';
            snowflake.style.zIndex = '9999';
            document.body.appendChild(snowflake);

            let fallInterval = setInterval(() => {
                snowflake.style.top = parseFloat(snowflake.style.top) + 2 + 'px';
                if (parseFloat(snowflake.style.top) > window.innerHeight) {
                    clearInterval(fallInterval);
                    snowflake.remove();
                }
            }, 30);
        }
    }

    function launchConfetti() {
        for (let i = 0; i < 20; i++) {
            let confetti = document.createElement('div');
            confetti.innerText = '🎉';
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '0px';
            confetti.style.fontSize = '24px';
            confetti.style.zIndex = '9999';
            document.body.appendChild(confetti);

            let fallInterval = setInterval(() => {
                confetti.style.top = parseFloat(confetti.style.top) + 3 + 'px';
                if (parseFloat(confetti.style.top) > window.innerHeight) {
                    clearInterval(fallInterval);
                    confetti.remove();
                }
            }, 30);
        }
    }

    function startDinoGame() {
        let dinoGame = document.createElement('iframe');
        dinoGame.src = 'https://chromedino.com/';
        dinoGame.style.position = 'fixed';
        dinoGame.style.top = '50%';
        dinoGame.style.left = '50%';
        dinoGame.style.transform = 'translate(-50%, -50%)';
        dinoGame.style.width = '800px';
        dinoGame.style.height = '400px';
        dinoGame.style.zIndex = '10000';
        dinoGame.style.border = '2px solid #000';
        dinoGame.style.borderRadius = '8px';
        dinoGame.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        document.body.appendChild(dinoGame);

        let closeButton = document.createElement('button');
        closeButton.innerText = 'Cerrar Juego';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.backgroundColor = '#ff4d4d';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.padding = '5px 10px';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => {
            dinoGame.remove();
            closeButton.remove();
        };
        document.body.appendChild(closeButton);
    }

    // Nuevas funciones
    function invertColors() {
        let currentColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = currentColor === 'rgb(18, 18, 18)' ? '#fff' : '#121212';
        document.body.style.color = currentColor === 'rgb(18, 18, 18)' ? '#000' : '#fff';
    }

    function makeTextBigger() {
        let allText = document.querySelectorAll('p, h1, h2, h3, span, a, li');
        allText.forEach(element => {
            let currentSize = window.getComputedStyle(element).fontSize;
            let newSize = parseInt(currentSize) + 2 + 'px';
            element.style.fontSize = newSize;
        });
    }

    function drawFireworks() {
        let fireworks = document.createElement('div');
        fireworks.innerText = '🎆';
        fireworks.style.position = 'absolute';
        fireworks.style.left = Math.random() * window.innerWidth + 'px';
        fireworks.style.top = Math.random() * window.innerHeight + 'px';
        fireworks.style.fontSize = '30px';
        fireworks.style.zIndex = '9999';
        fireworks.style.animation = 'fireworksEffect 1s infinite';
        document.body.appendChild(fireworks);
        
        setTimeout(() => fireworks.remove(), 2000);
    }

    function matrixEffect() {
        let matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let matrixDiv = document.createElement('div');
        matrixDiv.style.position = 'fixed';
        matrixDiv.style.top = '0';
        matrixDiv.style.left = '0';
        matrixDiv.style.color = 'green';
        matrixDiv.style.fontFamily = 'monospace';
        matrixDiv.style.fontSize = '20px';
        matrixDiv.style.zIndex = '9999';
        document.body.appendChild(matrixDiv);

        setInterval(() => {
            let char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            let span = document.createElement('span');
            span.innerText = char;
            matrixDiv.appendChild(span);
            setTimeout(() => span.remove(), 1000);
        }, 100);
    }

    // Crear botones
    const buttons = [
        { text: 'Cambiar colores', action: changeColors },
        { text: 'Modo oscuro', action: toggleDarkMode },
        { text: 'Reproducir música', action: playMusic },
        { text: 'Lluvia de emojis', action: rainEmojis },
        { text: 'Efecto de nieve', action: snowEffect },
        { text: 'Lanzar confetti', action: launchConfetti },
        { text: 'Juego dinosaurio', action: startDinoGame },
        { text: 'Invertir colores', action: invertColors },
        { text: 'Agrandar texto', action: makeTextBigger },
        { text: 'Fuegos artificiales', action: drawFireworks },
        { text: 'Efecto Matrix', action: matrixEffect },
        // Agregar más botones aquí si es necesario
    ];

    buttons.forEach(btn => {
        let button = document.createElement('button');
        button.innerText = btn.text;
        button.style.margin = '5px 0';
        button.style.width = '100%';
        button.style.background = '#ffffff';
        button.style.color = '#333';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.padding = '8px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '14px';
        button.style.transition = 'background 0.2s';
        button.onmouseover = () => (button.style.background = '#f1f1f1');
        button.onmouseout = () => (button.style.background = '#ffffff');
        button.onclick = btn.action;
        menu.appendChild(button);
    });
})();
