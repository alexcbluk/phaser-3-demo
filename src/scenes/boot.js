import "phaser";

export default class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("logo", "src/assets/logo.png");
    //GameConfig JSON...
    //Language JSON...
  }

  create() {
    //Initialise any 3rd party API
    // - Server side: AWS
    // - Platform specific: Facebook Instant Game

    this.scene.start("Title");
  }
}
