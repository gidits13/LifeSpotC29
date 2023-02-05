 
 let session = new Map();
 function ageCheck()
{
    session.set('age', prompt('Введите возраст'));
    if (session.get("age") >= 18) {
        let date = new Date().toLocaleString();
        alert("Сегодня" + " " + date);
    }
    else {
        alert("Редирект на гугл");
        window.location.href = "http://www.google.com"
    }
}

function handleSession(){
    session.set("userAgent" , window.navigator.userAgent);
    session.date = new Date().toLocaleString();
}
function printSession(){
    console.log('output of session log');
    for(item of session)    {
        console.log(item);
    }
}
function getInputText(){
    return document.getElementsByTagName('input')[0].value;
}
/* let ageCheck = function ageCheckF()
{
    let session = new Map;

    session.set("userAgent" , window.navigator.userAgent);
    session.set("age", prompt('Введите возраст'));
    if (session.get("age") >= 18) {
        let date = new Date().toLocaleString();
        session.set("date", date)
        alert("Сегодня" + " " + date);
    }
    else {
        alert("Редирект на гугл");
        window.location.href = "http://www.google.com"
    }
    
    for(item of session)
    {
        console.log(item);
    }
} */

/* var filterInput = function filterInputF()
{
    
    let inputText=document.getElementsByTagName('input')[0].value;
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i<elements.length; i++)
            {   // Получим всё что внутри контейнера
    let childElements = elements[i];
    let videoDescription = childElements.getElementsByTagName('h3')[0];
    console.log(videoDescription.innerText);
    if(!videoDescription.innerText.toLowerCase().includes(inputText.toLowerCase()))
            {elements[i].style.display = 'none';}
    else
            {elements[i].style.display = 'inline-block';}
            }
} */
function filterInput()
{
    
    //let inputText=document.getElementsByTagName('input')[0].value;
    let elements = document.getElementsByClassName('video-container');
    console.log(elements);
    console.log('-------------------------');
    for (let i = 0; i<elements.length; i++)
            {   
    let childElements = elements[i];
    console.log(childElements);
    let videoDescription = childElements.getElementsByTagName('h3')[0];
    console.log(videoDescription.innerText);
    if(!videoDescription.innerText.toLowerCase().includes(getInputText().toLowerCase()))
            {elements[i].style.display = 'none';}
    else
            {elements[i].style.display = 'inline-block';}
            }
}