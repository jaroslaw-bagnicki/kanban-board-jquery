import { Base } from './BaseClass';

export class Card extends Base {
  constructor({ description, color = 'white', ...rest }) {
    super({...rest, className: 'card'});
    this.description = description;
    this.color = color;
  }

  template() {
    return `
      <h1>${this.name}</h1>
      <button class="create-column">Add a column</button>
      <div class="column-container"></div>
    `;
  }

  deleteCard() {
    // TODO
  }

  moveCard() {
    // TODO
  }
}
