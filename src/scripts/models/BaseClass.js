import { generateId } from '../utils';

export class Base {
  constructor({ id = generateId(), $element }) {
    this.id = id;
    this.$element = $element;
  }
}