
import ErrorPage from '../../components/ErrorPage';
import renderDom from '../../utils/renderDom';

const props = {
  attr: {class: 'error-page'},
  errorNumber: '500',
  errorText: 'Упс, наш сервер сломался'
}

const serverError = new ErrorPage('main', props);

renderDom('.page', serverError);
