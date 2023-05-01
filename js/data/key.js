export class Key {
  constructor(node, code, key, secondaryKey, keyOutput, mainEl) {
    this.htmlNode = node;
    this.keyCode = code;
    this.mainKey = key;
    this.secondaryKey = secondaryKey;
    this.keyOutput = keyOutput;
    this.mainEl = mainEl;
  }
}
