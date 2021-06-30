var sr = window.webkitSpeechRecognition;
var e = new sr();
function start()
{
    document.getElementById("textbox").innerHTML="";
    e.start();
}
e.onresult=function run (event){
    console.log(event);
    var content= event.results [0][0].transcript;
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie")
{
    speak();
     
}

}
function speak()
{
    var speaking=window.speechSynthesis;
    var data="taking your selfie in 5 seconds";
    var speech=new SpeechSynthesisUtterance(data);
    speaking.speak(speech);
Webcam.attach(camera);
setTimeout(function()  {
    take_snapshot(); 
    save(); 
},5000);
}
Webcam.set
({
width:360,
height:250,
img_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri)
{
    document.getElementById("selfie").innerHTML="<img id='snap' src='"+data_uri+"'>";
})};
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("snap").src;
link.href=image;
link.click();
}