import $ from 'jquery';
import { Base, Board } from '../.';

describe('Board Model', () => {

  const sampleBoardData = {
    id: Date.now(),
    $element: $(document.createElement('div')),
    name: 'Test board'
  };

  it('create new board', () => {
    const newBoard = new Board(sampleBoardData);
    expect(newBoard)
      .toBeInstanceOf(Board)
      .toBeInstanceOf(Base)
      .toMatchObject(sampleBoardData);
  });
});