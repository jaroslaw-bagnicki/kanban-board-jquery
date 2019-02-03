import $ from 'jquery';
import { generateId } from '../utils';

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
        <button class="add-card-btn">Add card</button>
        <button class="delete-btn">x</button>
        </span>
      </h2>
      <div class="cards-container"></div>
    `;
    const $content = $(template);
    $content.find('.add-card-btn').click(this.addCard);
    $content.find('.delete-btn').click(this.delete);
    this.$element.empty();
    this.$element.append($content);
  }

  addCard() {
    // TODO
    console.log('Add card ...');
  }

  delete() {
    // TODO
    console.log('Delete column ...');
  }
}
