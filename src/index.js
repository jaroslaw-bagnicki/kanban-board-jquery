import './styles/main.scss';
import $ from 'jquery';
import { Board, Column, Card } from './scripts/models';
import { generateId } from './scripts/utils';

const boardData = {
  id: generateId(),
  name: 'Test board'
};

const colData = { 
  id: generateId(), 
  name: 'TO DO' 
};

const cardData = {
  id: generateId(), 
  name: 'Task1',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
  color: 'red'
};

const board = new Board(boardData);
const col = new Column(colData);
const card = new Card(cardData);

function appBootsrtap() {
  const appContainer = $('#app-container');
  appContainer.append(board.$element);
  board.$element.find('.columns-container').append(col.$element);
  col.$element.find('.cards-container').append(card.$element);
}

$(function() {
  appBootsrtap();
});
