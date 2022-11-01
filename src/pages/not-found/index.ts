
import ErrorPage from '../../components/ErrorPage';
import renderDom from '../../utils/renderDom';

const props = {
  attr: {class: 'error-page'},
  errorNumber: '404',
  errorText: 'Упс, страница не найдена'
}

const notFound = new ErrorPage('main', props);

renderDom('.page', notFound);
