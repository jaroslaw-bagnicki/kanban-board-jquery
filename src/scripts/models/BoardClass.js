import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/disable-selection';

import { generateId } from '../utils';
import { Column } from '.';

export class Board {
  constructor({ id = generateId(), name = 'Name fallback' }) {
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
          <button class="add-column-btn"><i class="far fa-plus-square"></i></button>
        </span>
      </div>
      <div class="columns-container"></div>
    `;

    // Construct jQuery object from template
    const $content = $(template);

    // Bind event listeners
    $content.find('.add-column-btn').click(() => {
      const name = prompt('Enter name of column') || 'Name fallback';
      this.addColumn({name});
    });

    // Append content to host container
    this.$element.empty();
    this.$element.append($content);
  }

  get $columnsContainer() {
    return this.$element.find('.columns-container');
  }

  addColumn(data) {
    const column = new Column(data);
    this.$columnsContainer.append(column.$element);
    return column;
  }

  initSortable() {
    $('.cards-container').sortable({
      connectWith: '.cards-container',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
}
