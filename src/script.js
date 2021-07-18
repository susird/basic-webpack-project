import './styles/styles.css';
import { validation } from './validation';

function onClick (event) {
  const userName = document.getElementById('name');
  const password = document.getElementById('password');
  const errorElement = document.getElementById('error');
  event.preventDefault();
  const messages = validation(userName.value, password.value);
  if (messages.length > 0) {
    errorElement.innerText = messages.join(',');
  }
}

document.querySelector('.button').addEventListener('click', onClick );
