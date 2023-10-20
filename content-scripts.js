console.log('content-scripts.js')

const btn = document.createElement('button')
btn.style.color = 'orange'
btn.style.border.color = 'black'
btn.innerText = 'Spookify!'
document.body.prepend(btn)


// const customCursorStyle = document.createElement('style');

// Define the custom cursor CSS rule



btn.addEventListener('click',function(){
    document.body.style.backgroundColor = 'orange';
    let sound = document.createElement('audio')
   
    sound.id       = 'audio-player';
    sound.controls = 'controls';
    sound.src      = 'media/Blue Browne.mp3';
    sound.type     = 'audio/mpeg';
    document.getElementsByTagName('body').appendChild(sound)
    // document.getElementsByTagName("p").style.cursor = "ghost.png"
    document.body.style.cursor = 'url("https://img.freepik.com/premium-vector/ghost-icon-element-decoraction_837145-152.jpg") 4 12, wait';
})




// const btn = document.getElementById('btn');


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('the page loaded')
//     alert('it worked!')

//   });

// console.log('chrome extension go!')

// let paragraphs = document.getElementsByTagName('p')
// for (el of paragraphs){
//     el.style['background-color'] = 'pink';
// }