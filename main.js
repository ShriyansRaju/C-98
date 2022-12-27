var SpeechRecognition=window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function takeSelfie(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}