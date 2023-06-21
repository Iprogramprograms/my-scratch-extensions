class Boolean {
  getInfo() {
    return {
      id: 'logic_extension',
      name: 'Logic Extension',
      blocks: [
        {
          opcode: 'truee',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'True'
        },
        {
          opcode: 'falsee',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'False'
        }
      ]
    };
  }

  truee() {
    return true;
  }
  falsee() {
    return false;
  }
}

Scratch.extensions.register(new Boolean());
