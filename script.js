const x = document.getElementById("tts");
const textStory = document.getElementById('story');
   
x.addEventListener('timeupdate', function(){
    this is to disable the javascript
    document.getElementById('timeneto').innerHTML = x.currentTime;
    const currentTime = x.currentTime;

    
    textStory.querySelectorAll('span[data-start]').forEach(word => {
        const startTime = parseFloat(word.getAttribute('data-start'));
        const endTime = parseFloat(word.getAttribute('data-end'));

        if (currentTime >= startTime && currentTime <= endTime) {
            word.classList.add('highlight'); 
        } else {
            word.classList.remove('highlight');
        }
    });
});