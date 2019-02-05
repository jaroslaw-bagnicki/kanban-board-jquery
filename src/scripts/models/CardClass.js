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
      <span class="card-name-box">
        <span class="card-name">${this.name}</span>
        <button class="edit-name edit-btn"><i class="far fa-edit"></i></button>
      </span>
      <span class="buttons">
        <button class="delete delete-btn"><i class="far fa-trash-alt"></i></button>
      </span>
    </h2>
    <p>${this.description}</p>
    `;

    // Construct jQuery object from template
    const $content = $(template);

    // Bind event listeners
    $content.find('.delete').click(() => {
      const confirmation = confirm('Confirm deletion of the card.');
      if (confirmation) this.delete();
    });
    $content.find('.edit-name').click(() => {
      const name = prompt('Enter new name of column');
      if (name === null ) return;
      this.updateName(name);
    });

    this.$element.empty();
    this.$element.append($content);
    this.$element.addClass(`${this.color}`);
  }

  get $cardName() {
    return this.$element.find('.card-name');
  }

  async delete() {
    const res = await service.deleteCard(this.id);
    if (res.ok) {
      this.$element.remove();
    } else {
      alert('Column delete failed');
    }
  }

  async updateName(name) {
    const res = await service.updateCard({
      id: this.id, 
      name, 
      bootcamp_kanban_column_id: this.parentId
    });
    if (res.ok) {
      this.$cardName.text(name);
    } else {
      alert('Card update failed');
    }
  }
}
