const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
  	console.log(this.state);
    return this.display();
  }
};
