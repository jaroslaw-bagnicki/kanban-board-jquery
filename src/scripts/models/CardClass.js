import { Base } from './BaseClass';

export class Card extends Base {
  constructor({ description, color = 'white', ...rest }) {
    super(rest);
    this.description = description;
    this.color = color;
  }

  deleteCard() {
    // TODO
  }

  moveCard() {
    // TODO
  }


}