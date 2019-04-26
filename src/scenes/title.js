import "phaser";

export default class Title extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create() {
    const { width, height } = this.game.config;
    this.logo = this.add.image(width / 2, height / 2, "logo")//.setScale(2)
    this.welcomeText = this.add.text(width / 2, height - 100, 'Press spacebar to start', { fontSize: '32px', fill: '#fff' });
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (this.spaceBar.isDown) this.scene.start("Game");
  }
}
