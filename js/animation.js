
/* -------------------- Gluehbirne Animation -------------------- */
var tlBulb = new TimelineMax({repeat:-1});
tlBulb.to(".linesBulb",0.5,{scale:1.2,transformOrigin:"center center"})
    .to(".linesBulb",0.5,{scale:1});
/* -------------------- Ende Gluehbirne Animation -------------------- */



/* -------------------- Metapher Animation -------------------- */
// Slide 1

        //BEISPIEL
        //Variablen
        var element1 = $('.element1');
        var element2 = $('.element2');

        //Replay-Funktion
        function exampleAnimation(){
            tlExample.gotoAndPlay(0);
        }

        $(".exampleReplay").on("click",function(event) {
            exampleAnimation();
        });

        //Animation
        var tlExample = new TimelineMax();
        tlExample.from(element1, 5,{opacity:0})
            .to(element2,2,{scale:2.5},0);


// Slide 2


/* -------------------- Ende Metapher Animation -------------------- */