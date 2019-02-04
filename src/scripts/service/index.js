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
  const formData = new FormData();
  formData.append('name', data.name);

  return fetch(API.COLUMN_URL, {
    method: 'POST',
    headers: API.HEADERS,
    body: formData
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
  // Convert JS object to FormData object
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('color', data.color);
  formData.append('bootcamp_kanban_column_id', data.parentId);
  return fetch(API.CARD_URL , {
    method: 'POST',
    headers: API.HEADERS,
    body: formData
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

export function getMockBoardData() {
  return Promise.resolve(mockData);
}

const mockData = {
  name: 'My Kanban Board',
  columns: [
    {
      name: 'To Do',
      cards: [
        {
          name: 'New task',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.'
        },
        {
          name: 'Update kanban board',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
          color: 'red'
        }
      ]
    },
    {
      name: 'In Progress',
      cards: []
    },
    {
      name: 'Done',
      cards: [
        {
          name: 'Create kanban board',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
          color: 'yellow'
        }
      ]
    }
  ]
};
