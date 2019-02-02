import { Base } from './BaseClass';

export class Column extends Base {
  constructor({ name, ...rest }) {
    super(rest);
    this.name = name;
  }

  addCard() {
    // TODO
  }

  deleteColumn() {
    // TODO
  }
}