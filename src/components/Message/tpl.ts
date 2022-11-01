const tpl = `
{{#if isMyMessage}}
{{else}}
  <div class="message__profile-wrapper">
    <img class="message__avatar" src="{{avatar}}" alt="Аватар">
    <p class="message__name">{{name}}</p>
  </div>
{{/if}}
  <p class='message__text'>{{text}}</p>
`;

export default tpl;
