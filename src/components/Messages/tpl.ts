
const tpl = `
  <div class='chats__messages-wrapper'>
    {{#each messages}}
       {{{Message data=this}}}
    {{/each}}
  </div>
`;

export default tpl;
