import $ from 'jquery';
import { generateId } from '../utils';
import { Card } from './CardClass';

export class Column {
  constructor({ id = generateId(), parentId, name = 'Name fallback', cards = [] }) {
    this.id = id;
    this.parentId = parentId;
    this.name = name;
    this.cards = cards;
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

    // Construct jQuery object from template
    const $content = $(template);

    // Bind event listeners
    $content.find('.add-card-btn').click(() => {
      const name = prompt('Enter name of card') || 'Name fallback';
      const description = prompt('Enter descpription') || '';
      const color = prompt('Chose color (white, red, green, yellow, blue, violet)') || 'white';
      this.addCard({ name, description, color, parentId: this.parentId });
    });
    $content.find('.delete-btn').click(() => this.delete());

    // Append content to host container
    this.$element.empty();
    this.$element.append($content);
  }

  get $cardsContainer() {
    return this.$element.find('.cards-container');
  }

  addCard(data) {
    const card = new Card(data);
    this.$cardsContainer.append(card.$element);
    return card;
  }

  delete() {
    this.$element.remove();
  }
}
