/**
 * @type {HTMLVideoElement}
*/
const video = document.querySelector('video')

const captureBtn = document.getElementById('captureBtn')
const cancelBtn = document.getElementById('cancelBtn')

async function captureVideo() {
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: true,  
    video: {
      width: 200,      
      height: 200
    }
  })
  
  video.srcObject = mediaStream
}

function cancelCapturing() {
  video.srcObject.getTracks().forEach(track => track.stop())
}

captureBtn.onclick = captureVideo
cancelBtn.onclick = cancelCapturing
