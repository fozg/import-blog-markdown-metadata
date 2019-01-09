var yamlFront = require('yaml-front-matter');

module.exports = class MarkdownParser {
  constructor(content) {
    this.content = content;
  }

  parseIt () {
    let metadata = yamlFront.loadFront(this.content);
    this.body = metadata.__content;
    delete metadata.__content;
    this.metadata = metadata;
  }

  getBody () {
    return this.body; 
  }

  getMetadata () {
    return this.metadata;
  }
}