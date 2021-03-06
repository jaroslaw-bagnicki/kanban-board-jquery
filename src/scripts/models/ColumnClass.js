import $ from 'jquery';
import { generateId } from '../utils';
import { Card } from './CardClass';
import * as service from '../service';

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
        <span class="column-name-box">
          <span class="column-name">${this.name}</span>
          <button class="edit-name edit-btn"><i class="far fa-edit"></i></button>
        </span>
        <span class="buttons">
        <button class="add-card add-btn"><i class="far fa-plus-square"></i></button>
        <button class="delete delete-btn"><i class="far fa-trash-alt"></i></button>
        </span>
      </h2>
      <div class="cards-container"></div>
    `;

    // Construct jQuery object from template
    const $content = $(template);

    // Bind event listeners
    $content.find('.add-card').click(() => {
      const name = prompt('Enter name of card');
      if (name === null ) return;
      const description = prompt('Enter descpription');
      if (description === null )  return;
      const color = prompt('Chose color (red, green, yellow, blue, violet). By default will be white');
      if (color === null ) return;
      this.createCard({ name, description, color });
    });
    $content.find('.delete').click(() => {
      const confirmation = confirm('Confirm deletion of the column.');
      if (confirmation) this.delete();
    });
    $content.find('.edit-name').click(() => {
      const name = prompt('Enter new name of the column.');
      if (name === null ) return;
      this.updateName(name);
    });
    
    // Append content to host container
    this.$element.empty();
    this.$element.append($content);
  }

  get $cardsContainer() {
    return this.$element.find('.cards-container');
  }
  get $columnName() {
    return this.$element.find('.column-name');
  }

  // Render card
  appendCard(data) {
    const card = new Card(data);
    this.$cardsContainer.append(card.$element);
    return card;
  }

  // Create new card
  async createCard(data) {
    data.name = data.name || 'Name fallback';
    const res = await service.createCard({ bootcamp_kanban_column_id: this.id, ...data });
    if (res.ok) {
      const { id } = await res.json();
      this.appendCard({ id, ...data});
    } else {
      alert('Card create failed');
    }
  }

  async delete() {
    const res = await service.deleteColumn(this.id);
    if (res.ok) {
      this.$element.remove();
    } else {
      alert('Column delete failed');
    }
  }

  async updateName(name) {
    const res = await service.updateColumn({id: this.id, name});
    if (res.ok) {
      this.$columnName.text(name);
    } else {
      alert('Column update failed');
    }
  }
}
