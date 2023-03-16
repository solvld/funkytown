const btnElement = document.getElementById('volume');
const audioElement = document.getElementById('audio')

btnElement.onclick = function(){
  if(audioElement.paused){
    btnElement.classList.remove('fa-volume-xmark');
    btnElement.classList.add('fa-volume-high');
    audioElement.play();
    
  }else{
    btnElement.classList.add('fa-volume-xmark');
    btnElement.classList.add('fa-volume-high')
    audioElement.pause();
  }
  
}

