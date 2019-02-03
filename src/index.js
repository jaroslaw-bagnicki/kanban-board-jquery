import './styles/main.scss';
import $ from 'jquery';
import { Board } from './scripts/models';

const sampleBoardData = {
  id: Date.now(),
  $element: $('<div>'),
  name: 'Test board'
};

const board = new Board(sampleBoardData);
board.render();

const appContainer = $('#app-container');
appContainer.append(board.$element);
