import { API } from '../config/api';

export function getBoardData() {
  fetch(API.BOARD_URL, {
    method: 'GET',
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
