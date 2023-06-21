class Boolean {
  getInfo() {
    return {
      id: 'logic_extension',
      name: 'Logic Extension',
      blocks: [
        {
          opcode: 'logic_true',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'True'
        },
        {
          opcode: 'logic_false',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'False'
        }
      ]
    };
  }

  logic_true() {
    return true;
  }
  logic_false() {
    return false;
  }
}

Scratch.extensions.register(new Boolean());
