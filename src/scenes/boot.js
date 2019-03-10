import "phaser";

export default class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    console.log("Boot.js preload()");
    this.load.image("logo", "src/assets/logo.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
