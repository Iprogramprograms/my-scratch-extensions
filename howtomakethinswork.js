class Boolean {
  getInfo() {
    return {
      id: 'howtomakethiswork',
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
        },
        {
          opcode: 'whenconditionistrue',
          blockType: Scratch.BlockType.HAT,
          text: 'When [CONDITION] is true',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
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
  whenconditionistrue(args) {
    return args.CONDITION
  }
}

Scratch.extensions.register(new Boolean());
