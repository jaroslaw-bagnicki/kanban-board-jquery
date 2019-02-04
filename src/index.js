import $ from 'jquery';
import './styles/main.scss';
import './scripts/fontAwesome';
import { Board, Column, Card } from './scripts/models';
import { getBoard, $getBoard } from './scripts/service';

const card1 = {
  name: 'New task',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.'
};

const card2 = {
  name: 'Create kanban board',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
  color: 'yellow'
};

const card3 = {
  name: 'Update kanban board',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
  color: 'red'
};

const colToDo = {name: 'To Do'};
const colInProgress = {name: 'In Progress'};
const colDone = {name: 'Done'};

const board = new Board({name: 'My Kanban Board'});
board.addColumn(colToDo);
board.addColumn(colInProgress);
board.addColumn(colDone);

board.$element.find('.cards-container').first().append(new Card(card1).$element);
board.$element.find('.cards-container').first().append(new Card(card3).$element);
board.$element.find('.cards-container').last().append(new Card(card2).$element);

async function appBootstrap() {
  await getBoard();
  const appContainer = $('#app-container');
  appContainer.append(board.$element);
  board.initSortable();
}

$(function() {
  appBootstrap();
});
