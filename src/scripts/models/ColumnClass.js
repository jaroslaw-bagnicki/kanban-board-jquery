import { Base } from './BaseClass';

export class Column extends Base {
  constructor({ name, ...rest }) {
    super({...rest, className: 'column'});
    this.name = name;
  }

  addCard() {
    // TODO
  }

  deleteColumn() {
    // TODO
  }
}
