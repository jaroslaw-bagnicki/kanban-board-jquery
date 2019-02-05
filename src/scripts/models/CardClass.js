import $ from 'jquery';
import { generateId } from '../utils';
import * as service from '../service';

export class Card {
  constructor({ id = generateId(), parentId, name, description, color }) {
    this.id = id;
    this.parentId = parentId;
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
      <button class="delete delete-btn"><i class="far fa-trash-alt"></i></button>
      </span>
    </h2>
    <p>${this.description}</p>
    `;

    // Construct jQuery object from template
    const $content = $(template);

    // Bind event listeners
    $content.find('.delete').click(() => this.delete());

    this.$element.empty();
    this.$element.append($content);
    this.$element.addClass(`${this.color}`);
  }

  async delete() {
    const res = await service.deleteCard(this.id);
    if (res.ok) {
      this.$element.remove();
    } else {
      alert('Column delete failed');
    }
  }
}
