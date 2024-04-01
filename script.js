const x = document.getElementById("tts");
const textStory = document.getElementById('story');


    textStory = textStory.innerHTML.replace(/?/g, "'");
x.addEventListener('timeupdate', function(){
    
    document.getElementById('timeneto').innerHTML = x.currentTime;
    const currentTime = x.currentTime;

    // Loop through your text elements and highlight the current word being spoken
    textStory.querySelectorAll('span[data-start]').forEach(word => {
        const startTime = parseFloat(word.getAttribute('data-start'));
        const endTime = parseFloat(word.getAttribute('data-end'));

        if (currentTime >= startTime && currentTime <= endTime) {
            word.classList.add('highlight'); // Apply your CSS class for highlighting
        } else {
            word.classList.remove('highlight');
        }
    });
});