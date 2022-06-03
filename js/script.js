const input = document.querySelector('.wrapper .input-field input');
const chatBox = document.querySelector('.wrapper .chat-box');



const runingKana = ()=>{
  let randTime = Math.round(Math.random()*3000);
  if (input.value != "") {
    chatBox.innerHTML += '<div class="user">'+input.value+'</div>';
    for (let i = 0; i < chat.length; i++) {
      if (input.value == chat[i].user) {
        setTimeout(()=>{
          chatBox.innerHTML += '<div class="bot">'+chat[i].bot+'</div>';
        },randTime);
        input.value = "";
        return;
      }
    }
    input.value = "";
  }
}