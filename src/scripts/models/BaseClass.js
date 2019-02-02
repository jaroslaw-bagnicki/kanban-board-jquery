import { generateId } from '../utils';

export class Base {
  constructor({ id = generateId(), $element, className }) {
    this.id = id;
    this.$element = $element.attr('id', id).addClass(className);
  }

  render() {
    this.$element.empty();
    this.$element.append(this.template());
  }
}