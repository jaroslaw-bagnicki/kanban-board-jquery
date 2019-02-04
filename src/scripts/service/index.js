import { API } from './config';
import $ from 'jquery';

export function getBoard() {
  fetch('https://kodilla.com/pl/bootcamp-api/board', {
    method: 'GET',
    mode: 'no-cors',
    credentials: 'include',
    headers: {
      'X-Client-Id': '3382',
      'X-Auth-Token': 'b08d91c72e2a4aa1168ad0e8fd3b8b03'
    }
  }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err=> console.error(err));
}

export function $getBoard() {
  $.ajaxSetup({
    crossDomain: true,
    headers: {
      'X-Client-Id': '3382',
      'X-Auth-Token': 'b08d91c72e2a4aa1168ad0e8fd3b8b03'
    }
  });

  $.ajax({
    url: 'https://kodilla.com/pl/bootcamp-api/board',
    method: 'GET',
    success: function(res) {
      console.log(res);
    }
  });
}
