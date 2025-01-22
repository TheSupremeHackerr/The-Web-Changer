// ==UserScript==
// @name        MiScriptUniversal
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Crear el contenedor del menú
    var menu = document.createElement('div');
    menu.id = 'menu-efectos';
    menu.style.position = 'fixed';
    menu.style.top = '20px';
    menu.style.right = '20px';
    menu.style.zIndex = '9999';
    menu.style.width = '220px';
    menu.style.background = 'linear-gradient(135deg, #ff4081, #7b1fa2)';
    menu.style.padding = '20px';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    menu.style.textAlign = 'center';
    menu.style.color = '#fff';
    menu.style.fontFamily = 'Arial, sans-serif';

    // Añadir título
    var titulo = document.createElement('h2');
    titulo.innerText = 'The Web Changer';
    titulo.style.margin = '0';
    titulo.style.marginBottom = '5px';
    titulo.style.fontSize = '22px';
    menu.appendChild(titulo);

    // Añadir subtítulo
    var subtitulo = document.createElement('p');
    subtitulo.innerText = 'Github: TheSupremeHackerr';
    subtitulo.style.margin = '0';
    subtitulo.style.marginBottom = '15px';
    subtitulo.style.fontSize = '14px';
    subtitulo.style.opacity = '0.8';
    menu.appendChild(subtitulo);

    // Estilos para los botones
    var estiloBoton = 'display:block; margin-bottom:10px; padding:10px; background-color:#fff; color:#7b1fa2; border:none; cursor:pointer; border-radius:5px; font-size:14px; width:100%;';

    // Función para crear botones
    function crearBoton(texto, funcion) {
        var boton = document.createElement('button');
        boton.innerText = texto;
        boton.style.cssText = estiloBoton;
        boton.onclick = funcion;
        menu.appendChild(boton);
    }

    // Funciones de los efectos
    function cambiarColores() {
        var colores = ['#FFC107', '#8BC34A', '#03A9F4', '#E91E63', '#FF5722'];
        document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    }

    function lanzarConfetti() {
        // Incluir la librería de confetti si no está incluida
        if (typeof confetti === 'undefined') {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
            script.onload = function() {
                confettiEffect();
            };
            document.head.appendChild(script);
        } else {
            confettiEffect();
        }
    }

    function confettiEffect() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    function lluviaEmojis() {
        var emojiArray = ['💖', '✨', '🌟', '🎉', '🔥', '🚀'];
        var cantidad = 30;
        for (var i = 0; i < cantidad; i++) {
            (function() {
                var emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
                var emojiElement = document.createElement('div');
                emojiElement.innerText = emoji;
                emojiElement.style.position = 'fixed';
                emojiElement.style.top = '-50px';
                emojiElement.style.left = Math.random() * window.innerWidth + 'px';
                emojiElement.style.fontSize = '2rem';
                emojiElement.style.zIndex = '9999';
                document.body.appendChild(emojiElement);
                var position = -50;
                var interval = setInterval(function() {
                    if (position > window.innerHeight) {
                        clearInterval(interval);
                        emojiElement.remove();
                    } else {
                        position += 5;
                        emojiElement.style.top = position + 'px';
                    }
                }, 30);
            })();
        }
    }

    function caerNieve() {
        // Incluir la librería de nieve si no está incluida
        if (typeof snowStorm === 'undefined') {
            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js';
            script.onload = function() {
                if (typeof snowStorm !== 'undefined') {
                    snowStorm.snowColor = '#fff'; // Color de la nieve
                    snowStorm.flakesMaxActive = 50; // Número máximo de copos activos
                    snowStorm.start();
                }
            };
            document.head.appendChild(script);
        } else {
            snowStorm.start();
        }
    }

    function textoBailando() {
        var styleId = 'estilo-texto-bailando';
        if (!document.getElementById(styleId)) {
            var style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = '@keyframes bailar {0% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 50% { transform: rotate(0deg); } 75% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); }} .texto-bailando { display: inline-block; animation: bailar 0.5s infinite; }';
            document.head.appendChild(style);
        }
        var textos = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
        textos.forEach(function(texto) {
            texto.classList.toggle('texto-bailando');
        });
    }

    function juegoDinosaurio() {
        var existingIframe = document.getElementById('iframe-dinosaurio');
        if (existingIframe) {
            existingIframe.remove();
            var botonCerrar = document.getElementById('boton-cerrar-juego');
            if (botonCerrar) botonCerrar.remove();
        } else {
            var iframe = document.createElement('iframe');
            iframe.id = 'iframe-dinosaurio';
            iframe.src = 'https://chromedino.com/';
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.zIndex = '10000';
            document.body.appendChild(iframe);

            // Añadir un botón para cerrar el iframe
            var botonCerrar = document.createElement('button');
            botonCerrar.id = 'boton-cerrar-juego';
            botonCerrar.innerText = 'Cerrar Juego';
            botonCerrar.style.position = 'fixed';
            botonCerrar.style.top = '20px';
            botonCerrar.style.right = '20px';
            botonCerrar.style.zIndex = '10001';
            botonCerrar.style.padding = '10px';
            botonCerrar.style.backgroundColor = '#ff4081';
            botonCerrar.style.color = '#fff';
            botonCerrar.style.border = 'none';
            botonCerrar.style.cursor = 'pointer';
            botonCerrar.style.borderRadius = '5px';
            botonCerrar.onclick = function() {
                iframe.remove();
                botonCerrar.remove();
            };
            document.body.appendChild(botonCerrar);
        }
    }

    function burbujas() {
        for (var i = 0; i < 30; i++) {
            var burbuja = document.createElement('div');
            burbuja.style.width = '20px';
            burbuja.style.height = '20px';
            burbuja.style.backgroundColor = '#03A9F4';
            burbuja.style.borderRadius = '50%';
            burbuja.style.position = 'fixed';
            burbuja.style.bottom = '0';
            burbuja.style.left = Math.random() * window.innerWidth + 'px';
            burbuja.style.opacity = '0.7';
            burbuja.style.zIndex = '9999';
            document.body.appendChild(burbuja);
            var position = 0;
            (function(burbuja, position) {
                var interval = setInterval(function() {
                    if (position > window.innerHeight) {
                        clearInterval(interval);
                        burbuja.remove();
                    } else {
                        position += 5;
                        burbuja.style.bottom = position + 'px';
                    }
                }, 30);
            })(burbuja, position);
        }
    }

    function modoOscuro() {
        document.body.classList.toggle('modo-oscuro');
        var estiloOscuro = document.getElementById('estilo-modo-oscuro');
        if (!estiloOscuro) {
            var estilo = document.createElement('style');
            estilo.id = 'estilo-modo-oscuro';
            estilo.innerHTML = '.modo-oscuro { background-color: #121212; color: #e0e0e0; }';
            document.head.appendChild(estilo);
        }
    }

    // Crear los botones con sus funciones
    crearBoton('Colores', cambiarColores);
    crearBoton('Confetti', lanzarConf[_{{{CITATION{{{_1{](https://github.com/KCVO1995/Mickey-Mouse/tree/c9a2e8545b19cb72ec1f0e0374fdeda1be30f18d/src%2Fmain.js)[_{{{CITATION{{{_2{](https://github.com/open-hubs/aframe-csdt-portals/tree/7d840ea85030267aa9ed66f907612f1ba0f4ae79/src%2Fcsdt-portal.js)[_{{{CITATION{{{_3{](https://github.com/diterevan/leadform/tree/a44bbcd5fd886077103e2e114397998c6e2a1d86/src%2Fleadform.js)
