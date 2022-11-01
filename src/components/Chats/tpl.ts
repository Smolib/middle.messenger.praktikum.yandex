const tpl = `
{{#each chats}}
  {{{Chat data=this}}}
{{/each}}
<div class='chats__add-chat-button-wrapper'>
  <span>
    Добавить новый чат
  </span>
</div>
`;

export default tpl;
