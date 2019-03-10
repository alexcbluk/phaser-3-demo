import "phaser";

export default class Title extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {}

  create() {
    console.log("title.js create()");
    this.scene.start("Game");
  }
}
