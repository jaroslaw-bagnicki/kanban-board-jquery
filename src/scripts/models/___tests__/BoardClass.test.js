import { Board } from '../.';
import { generateId } from '../../utils';

describe('Board Model', () => {

  const data = {
    id: generateId(),
    name: 'Kanban Board'
  };

  it('create object', () => {

    const board = new Board(data);

    expect(board)
      .toBeInstanceOf(Board)
      .toMatchObject(data);

    const $elId = board.$element.attr('id');
    const $elClass = board.$element.attr('class');
    expect($elId).toBe(data.id);
    expect($elClass).toBe('board');
  });

  it('render method', () => {
 
    const board = new Board(data);
    const htmlString = `
      <div class="board-header">
        <h1>Kanban Board</h1>
        <span class="buttons">
          <button class="add-column-btn">Add  col</button>
        </span>
      </div>
      <div class="columns-container"></div>
    `.trim();

    expect(board.$element.html()).toBe(htmlString);
  });
});
