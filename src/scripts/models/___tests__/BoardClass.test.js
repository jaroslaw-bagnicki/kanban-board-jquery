import $ from 'jquery';
import { Base, Board } from '../.';

describe('Board Model', () => {

  const data = {
    id: Date.now(),
    $element: $(document.createElement('div')),
    name: 'Test board'
  };

  it('create object', () => {

    const board = new Board(data);

    expect(board)
      .toBeInstanceOf(Board)
      .toBeInstanceOf(Base)
      .toMatchObject(data);

    const $elId = parseInt(board.$element.attr('id'));
    const $elClass = board.$element.attr('class');
    expect($elId).toBe(data.id);
    expect($elClass).toBe('board');
  });

  it('render method', () => {
 
    const board = new Board(data);
    const htmlString = board.template();

    expect(board.$element.html()).toBe('');
    board.render();
    expect(board.$element.html()).toBe(htmlString);
  });

});