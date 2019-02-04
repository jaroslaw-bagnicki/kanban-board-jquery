import $ from 'jquery';
import { generateId } from '../utils';
import { Card } from './CardClass';

export class Column {
  constructor({ id = generateId(), name }) {
    this.id = id;
    this.name = name;
    this.$element = $('<div>').attr('id', this.id).addClass('column');
    this.render();
  }

  render() {
    const template = `
      <h2 class="column-header">
        ${this.name}
        <span class="buttons">
        <button class="add-card-btn"><i class="far fa-plus-square"></i></button>
        <button class="delete-btn"><i class="far fa-trash-alt"></i></button>
        </span>
      </h2>
      <div class="cards-container"></div>
    `;
    const $content = $(template);
    $content.find('.add-card-btn').click(() => {
      const name = prompt('Enter name of card');
      if (name === null ) return;
      const description = prompt('Enter descpription');
      if (description === null )  return;
      const color = prompt('Chose color');
      if (color === null ) return;
      this.addCard({name, description, color});
    });
    $content.find('.delete-btn').click(() => this.delete());
    this.$element.empty();
    this.$element.append($content);
  }

  get $cardsContainer() {
    return this.$element.find('.cards-container');
  }

  addCard(data) {
    this.$cardsContainer.append(new Card(data).$element);
  }

  delete() {
    this.$element.remove();
  }
}
