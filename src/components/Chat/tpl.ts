const tpl = `
  <p class='chat__title'>
    {{title}}
  </p>
  <img
    class='chat__avatar'
    src='{{avatar}}'
    alt='Аватарка чата'
  />
  <p class='chat__last-message'>{{lastMessage}}</p>
  <span class='chat__time'>{{time}}</span>
  <time class='chat__number-new-messages'>{{numberNewMessage}}</time>
`;

export default tpl;
