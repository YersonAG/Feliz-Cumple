$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function () {
                $(this).addClass("puff-bubble");
            });
            
            $("#glow").remove();
            txt.hide().html("<img src='duke.jpg' alt='Laura' style='display:block; margin: 20px auto 0; width: 160px; height: auto;'><br>Feliz Cumpleaños Duke").delay(750).fadeIn(300);
            $("#candle").animate(
                {
                    opacity: ".5"
                },
                100
            );

            // Iniciar la animación de confeti
            startConfetti();
            stopConfetti();
        }
    });

    // Funciones de confeti
    const startConfetti = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000); // Inicia después de 1 segundo
    };

    const stopConfetti = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000); // Se detiene después de 5 segundos
    };
});
