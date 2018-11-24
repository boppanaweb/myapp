
import Component,{tracked} from '@glimmer/component';

export default class MyGlimmer extends Component {
  @tracked private count = 0;

  private increment() {
      this.count++;
  }
}
