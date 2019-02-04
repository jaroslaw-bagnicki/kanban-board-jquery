import $ from 'jquery';
import { generateId } from '../utils';

export class Card {
  constructor({ id = generateId(), name, description, color = 'white' }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.color = color;
    this.$element = $('<div>').attr('id', this.id).addClass('card');
    this.render();
  }

  render() {
    const template = `
    <h2 class="card-header">
      ${this.name}
      <span class="buttons">
      <button class="delete-btn"><i class="far fa-trash-alt"></i></button>
      </span>
    </h2>
    <p>${this.description}</p>
    `;
    const $content = $(template);
    $content.find('.delete-btn').click(() => this.delete());
    this.$element.empty();
    this.$element.append($content);
    this.$element.addClass(`${this.color}`);
  }

  delete() {
    this.$element.remove();
  }
}
