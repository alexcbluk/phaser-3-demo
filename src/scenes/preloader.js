import "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {}

  create() {
    console.log("preloader.js create()");
    this.scene.start("Title");
  }
}
