import { Card } from '../.';
import { generateId } from '../../utils';

describe('Card Model', () => {

  it('create new card', () => {

    const data = {
      id: generateId(), 
      name: 'Task1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.',
      color: 'red'
    };
    const card = new Card(data);

    expect(card)
      .toBeInstanceOf(Card)
      .toMatchObject(data);
      
    const $elementId = card.$element.attr('id');
    const $elementClass = card.$element.attr('class');
    expect($elementId).toBe(data.id);
    expect($elementClass).toBe(expect.stringContaining('card'));
  });

  it('create new card with no passed color', () => {
    const data = {
      id: Date.now(), 
      name: 'Task1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, exercitationem.'
    };

    const card = new Card(data);
    expect(card).toHaveProperty('color');
    expect(card.color).toBe('white');
  });
});
