import { Base } from './BaseClass';

export class Board extends Base {
  constructor({name, ...rest}) {
    super({...rest, className: 'board'});
    this.name = name;
  }

  template() {
    return `
      <h1>${this.name}</h1>
      <button class="create-column">Add a column</button>
      <div class="columns-container"></div>
    `;
  }

  addColumn() {
    // TODO
  }
}
