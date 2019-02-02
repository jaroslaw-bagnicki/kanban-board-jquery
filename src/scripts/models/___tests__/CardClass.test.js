import $ from 'jquery';
import { Base, Card } from '../.';

describe('Card Model', () => {

  it('create new card', () => {
    const sampleCardData = {
      id: Date.now(),
      $element: $(document.createElement('div')),
      description: 'Test card',
      color: 'red'
    };

    const card = new Card(sampleCardData);
    expect(card)
      .toBeInstanceOf(Card)
      .toBeInstanceOf(Base)
      .toMatchObject(sampleCardData);
  });


  it('create new card with no passed color', () => {
    const sampleCardData = {
      id: Date.now(),
      $element: $(document.createElement('div')),
      description: 'Test card'
    };

    const card = new Card(sampleCardData);
    console.log(card);
    expect(card).toHaveProperty('color');
    expect(card.color).toBe('white');
  });
});