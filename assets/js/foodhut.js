/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

document.addEventListener('click', () => {
  const audio = document.querySelector('audio');
  audio.play();
}, { once: true });


const audio = document.getElementById("miAudio");
  const boton = document.getElementById("reproducirPausarBtn");

  boton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  const dialog = document.getElementById('modal');
  const closeButton = document.getElementById('close-modal');

    window.onload = () => {
      dialog.showModal();
    };

    closeButton.addEventListener('click', () => {
      dialog.close();
    });