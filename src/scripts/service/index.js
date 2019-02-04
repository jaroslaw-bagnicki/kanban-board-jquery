import { API } from '../config/api';

export function getBoardData() {
  fetch(API.BOARD_URL, {
    method: 'GET',
    headers: API.HEADERS
  }).then(res => res.json())
    .catch(err => console.error(err));
}

export function addColumn(data) {
  fetch(API.COLUMN_URL , {
    method: 'POST',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .catch(err => console.error(err));
}

export function deleteColumn(id) {
  fetch(API.COLUMN_URL + id , {
    method: 'DELETE',
    headers: API.HEADERS
  }).then(res => res.json())
    .catch(err => console.error(err));
}

export function addCard(data) {
  fetch(API.CARD_URL , {
    method: 'POST',
    headers: API.HEADERS,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .catch(err => console.error(err));
}

export function deleteCard(id) {
  fetch(API.CARD_URL + id , {
    method: 'DELETE',
    headers: API.HEADERS
  }).then(res => res.json())
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
