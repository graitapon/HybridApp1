var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'media/sound1.mp3');
//audioElement.setAttribute('autoplay', 'autoplay');
//audioElement.load()

$.get();

audioElement.addEventListener("load", function() {
    audioElement.play();
}, true);

/*
$('.play').click(function() {
    audioElement.play();
});
*/

$('.pause').click(function() {
    audioElement.pause();
});


function playAudio(src) {
    var path = window.location.pathname;
    var media = new Media(src, 
    function() {
        //alert("playAudio():Audio Success");
    }, 
    function(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    });
    media.play();
}
