import $ from 'jquery';
import './styles/main.scss';
import './scripts/fontAwesome';
import { Board } from './scripts/models';
import { getBoardData } from './scripts/service';

async function bootstrapBoard(appContainer) {
  const data = await getBoardData();
  const board = new Board(data);
  data.columns.forEach(col => {
    const columnInstance = board.appendColumn({ ...col, parentId: board.id });
    col.cards.forEach(card => columnInstance.appendCard({ ...card, parentId: col.id }));
  });
  appContainer.empty();
  appContainer.append(board.$element);
  board.initSortable();
}

$(function() {
  const appContainer = $('#app-container');
  appContainer.append(new Board({name: 'Loading data ...'}).$element);
  bootstrapBoard(appContainer);
});
