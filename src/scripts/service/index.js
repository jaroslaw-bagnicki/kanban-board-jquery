import { API } from '../config/api';

export function getBoardData() {
  return fetch(API.BOARD_URL, {
    method: 'GET',
    headers: API.HEADERS
  }).then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));
}

export function createColumn(data) {

  // Convert JS object to FormData object
  // const formData = new FormData();
  // formData.append('name', data.name);
  const body =JSON.stringify(data);
  console.log(body);
  return fetch(API.COLUMN_URL, {
    method: 'POST',
    headers: API.HEADERS,
    body: body
  }).then(res => res)
    .catch(err => console.error(err));
}

export function updateColumnName(data) {
  return fetch(API.COLUMN_URL + data.id , {
    method: 'PUT',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res)
    .catch(err => console.error(err));
}

export function deleteColumn(id) {
  return fetch(API.COLUMN_URL + id , {
    method: 'DELETE',
    headers: API.HEADERS
  }).then(res => res)
    .catch(err => console.error(err));
}

export function createCard(data) {
  return fetch(API.CARD_URL , {
    method: 'POST',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res)
    .catch(err => console.error(err));
}

export function updateCardName(data) {
  return fetch(API.CARD_URL + data.id , {
    method: 'PUT',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res)
    .catch(err => console.error(err));
}

export function deleteCard(id) {
  return fetch(API.CARD_URL + id , {
    method: 'DELETE',
    headers: API.HEADERS
  }).then(res => res)
    .catch(err => console.error(err));
}
