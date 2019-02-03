import $ from 'jquery';
import { Base, Column } from '..';

describe('Column Model', () => {

  it('create new board', () => {

    const data = {
      id: Date.now(),
      $element: $(document.createElement('div')),
      name: 'Test column'
    };
    const col = new Column(data);

    expect(col)
      .toBeInstanceOf(Column)
      .toBeInstanceOf(Base)
      .toMatchObject(data);
      
    const $elementId = parseInt(col.$element.attr('id'));
    const $elementClass = col.$element.attr('class');
    expect($elementId).toBe(data.id);
    expect($elementClass).toBe('column');
  });
});
