import $ from 'jquery';
import { Base, Column } from '..';

describe('Column Model', () => {

  const sampleColData = {
    id: Date.now(),
    $element: $(document.createElement('div')),
    name: 'Test column'
  };

  it('create new board', () => {
    const newCol = new Column(sampleColData);
    expect(newCol)
      .toBeInstanceOf(Column)
      .toBeInstanceOf(Base)
      .toMatchObject(sampleColData);
  });
});