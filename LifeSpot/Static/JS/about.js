//alert('Скрипты работают');
comment = new Map();
function addComment(){
comment.set("userName", prompt('Введите ваше имя'));
comment.set("commentText",prompt('Введите текс комментария'));
postComment();
}

const postComment = PC => {
 //console.log(document.getElementsByClassName('rev-button')[0].innerHTML)   
 console.log(document.getElementsByTagName('div')[1].innerHTML+comment.get("userName"));
 document.getElementsByTagName('div')[1].innerHTML+='<h3 class="comment">Имя: '+comment.get("userName")+'</h3>'
 + '<h3 class="comment">Комментарий: '+comment.get("commentText")+'</h3>'
}