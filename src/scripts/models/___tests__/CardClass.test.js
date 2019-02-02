import $ from 'jquery';
import { Base, Card } from '../.';

describe('Card Model', () => {

  it('create new card', () => {

    const data = {
      id: Date.now(),
      $element: $(document.createElement('div')),
      description: 'Test card',
      color: 'red'
    };
    const card = new Card(data);

    expect(card)
      .toBeInstanceOf(Card)
      .toBeInstanceOf(Base)
      .toMatchObject(data);
      
    const $elementId = parseInt(card.$element.attr('id'));
    const $elementClass = card.$element.attr('class');
    expect($elementId).toBe(data.id);
    expect($elementClass).toBe('card');
  });


  it('create new card with no passed color', () => {
    const data = {
      id: Date.now(),
      $element: $(document.createElement('div')),
      description: 'Test card'
    };

    const card = new Card(data);
    expect(card).toHaveProperty('color');
    expect(card.color).toBe('white');
  });
});