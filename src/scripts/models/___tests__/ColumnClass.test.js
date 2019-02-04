import $ from 'jquery';
import { Column } from '..';
import { generateId } from '../../utils';

describe('Column Model', () => {

  it('create new board', () => {

    const data = { 
      id: generateId(), 
      name: 'TO DO' };
    const col = new Column(data);

    expect(col)
      .toBeInstanceOf(Column)
      .toMatchObject(data);
      
    const $elementId = col.$element.attr('id');
    const $elementClass = col.$element.attr('class');
    expect($elementId).toBe(data.id);
    expect($elementClass).toBe('column');
  });

  it('invoke of callbacks for buttons click', () => {

    const addCardFn = Column.prototype.addCard = jest.fn();
    const deleteColumnFn = Column.prototype.delete = jest.fn();
 
    const data = { id: Date.now(), name: 'TO DO' };
    const col = new Column(data);
    $('body').append(col.$element);
    
    expect(addCardFn).toHaveBeenCalledTimes(0);
    $('.add-card-btn').click();
    expect(addCardFn).toHaveBeenCalledTimes(1);
    
    expect(deleteColumnFn).toHaveBeenCalledTimes(0);
    $('.delete-btn').click();
    expect(deleteColumnFn).toHaveBeenCalledTimes(1);
  });
});
