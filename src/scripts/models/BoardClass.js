import { Base } from './BaseClass';
import { generateId } from '../utils';

export class Board extends Base {
  constructor({name, ...rest}) {
    super(rest);
    this.name = name;
  }

  addColumn() {
    // TODO
  }
}