import Handlebars from 'handlebars';

const registerHelper = (name, Comp) => {
  return Handlebars.registerHelper(name, ({ hash, data }) => {
    const children = data.root.dynamicChildren;
    const component = new Comp(hash.data);
    children[component.id] = component;
    return `<div data-id="${component.id}"></div>`;
  })
}

export default registerHelper;
