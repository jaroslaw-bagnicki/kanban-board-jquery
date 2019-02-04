import $ from 'jquery';
import './styles/main.scss';
import './scripts/fontAwesome';
import { Board } from './scripts/models';
import { getBoardData, getMockBoardData } from './scripts/service';

async function bootstrapBoard(appContainer) {
  const data = await getMockBoardData();
  const board = new Board(data);
  data.columns.forEach(col => {
    const columnInstance = board.addColumn({ ...col, parentId: board.id });
    col.cards.forEach(card => columnInstance.addCard({ ...card, parentId: col.id }));
  });
  appContainer.append(board.$element);
  board.initSortable();
}

$(function() {
  const appContainer = $('#app-container');
  bootstrapBoard(appContainer);
});
