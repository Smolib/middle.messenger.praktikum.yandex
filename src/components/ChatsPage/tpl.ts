const tpl = `
  <div class='chats__profile-wrapper'>
    <a class='chats__profile-link' href='../../pages/profile/index.html'> &#8592; Профиль</a>
  </div>
  {{{chats}}}
  {{{messages}}}
  <form class='chats__search-wrapper'>
    <input
      class='chats__search-input'
      type='text'
      placeholder='Поиск в сообщениях'
    />
    <button class='chats__search-submit' type='submit'>Искать</button>
  </form>
  <form class='chats__new-message-wrapper' name='new-message'>
    <input
      name="message"
      class='chats__new-message-input'
      type='text'
      placeholder='Введите новое сообщение'
    />
    <button class='chats__new-message-submit' type='submit'>Отправить</button>
  </form>
`;

export default tpl;
