import $ from 'jquery';
import { generateId } from '../utils';
export class Board {
  constructor({ id = generateId(), name }) {
    this.id = id;
    this.name = name;
    this.$element = $('<div>').attr('id', this.id).addClass('board');
    this.render();
  }

  render() {
    const template = `
      <div class="board-header">
        <h1>${this.name}</h1>
        <span class="buttons">
          <button class="add-column-btn">Add  col</button>
        </span>
      </div>
      <div class="columns-container"></div>
    `;

    const $content = $(template);
    $content.find('.add-column-btn').click(this.addColumn);
    this.$element.empty();
    this.$element.append($content);
  }

  addColumn() {
    // TODO
    console.log('Add column ...');
  }
}
