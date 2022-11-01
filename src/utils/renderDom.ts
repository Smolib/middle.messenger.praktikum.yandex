import Component from '../services/Component';

export default function renderDom(selectorOfRoot: string, component: Component) {
  const root = document.querySelector(selectorOfRoot);

  if (!root) {
    throw new Error('Не смогли найти корневой блок');
  }
  root.appendChild(component.getContent()!);
  component.dispatchComponentDidMount();
  return root;
}
