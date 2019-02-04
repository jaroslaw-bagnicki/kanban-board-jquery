import { API } from '../config/api';

export function getBoard() {
  fetch(API.BOARD_URL, {
    method: 'GET',
    headers: API.HEADERS
  }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err=> console.error(err));
}
