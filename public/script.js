(function() {
    const video = document.getElementById('background_video');
    const audio = document.getElementById('background_audio');
    const logo = document.getElementById('logo');

    /////////////////////
    // VIDEO SETTINGS //
    ///////////////////

    logo.addEventListener('click', () => {
        if (video.paused && audio.paused) {
            video.play();
            audio.play();
        } else {
            video.pause();
            audio.pause();
        }
    });

    // if (window.matchMedia('(prefers-reduced-motion)').matches) {
    //     video.removeAttribute('autoplay');
    //     video.pause();
    // }

    /////////////////////
    // AUDIO SETTINGS //
    ///////////////////

    // generate three loops randomly
    // make sure it's in sync with video

    // if autoplay is enabled:

    // Chrome: Video and Audio DO NOT AUTOSTART, both are in sync √
    // Opera: Video and Audio DO NOT AUTOSTART, both are in sync √
    // Firefox: Video DOES start, Audio DOES NOT, both are out of sync †
    // Safari: Video and Audio DO AUTOSTART, both are out of sync †
})();
