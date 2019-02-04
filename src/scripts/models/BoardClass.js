import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/disable-selection';

import { generateId } from '../utils';
import { Column } from './ColumnClass';
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
          <button class="add-column-btn"><i class="far fa-plus-square"></i></button>
        </span>
      </div>
      <div class="columns-container"></div>
    `;

    const $content = $(template);
    $content.find('.add-column-btn').click(() => {
      const name = prompt('Enter name of column');
      if (name === null ) return;
      this.addColumn({name});
    });
    this.$element.empty();
    this.$element.append($content);
  }

  get $columnsContainer() {
    return this.$element.find('.columns-container');
  }

  addColumn(data) {
    this.$columnsContainer.append(new Column(data).$element);
    this.initSortable();
  }

  initSortable() {
    $('.cards-container').sortable({
      connectWith: '.cards-container',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
}
