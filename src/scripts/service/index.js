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
  return fetch(API.COLUMN_URL, {
    method: 'POST',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res)
    .catch(err => console.error(err));
}

export function updateColumn({id, ...data}) {
  return fetch(API.COLUMN_URL + id , {
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

export function updateCard({id, ...data}) {
  return fetch(API.CARD_URL + id , {
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
