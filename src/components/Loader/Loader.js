import $ from 'jquery';

const Loader = {
  init() {
    this.catchDOM();
    this.removeLoader();
  },
  catchDOM() {
    this.loader = $('.loader');
  },
  removeLoader() {
    this.loader.addClass('-displayNone');
  }
}
export default Loader;

