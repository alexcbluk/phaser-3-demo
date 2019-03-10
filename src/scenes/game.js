import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    // load images
    this.load.image("logo", "src/assets/logo.png");
    this.load.spritesheet(
      "mummy",
      "assets/sprites/metalslug_mummy37x45.png",
      37,
      45,
      18
    );
  }

  create() {
    const { width, height } = this.game.config;

    this.GO = {};
    //this.GO["Logo_Image"] = this.add.image(width / 2, height / 2, "logo").setOrigin(0.5, 0.5);
    //this.GO["Player"] = this.add.sprite(0, game.height, 'mummy');
    this.cursor = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update() {
    this.fNavigate();
  }

  fNavigate() {
    if (this.cursor.up.isDown) console.log("up");
    else if (this.cursor.down.isDown) console.log("down");
    else if (this.cursor.left.isDown) console.log("left");
    else if (this.cursor.right.isDown) console.log("right");

    if (this.jumpButton.isDown) console.log("Jump");
  }
}
