import "phaser";
import config from "./config/config";
import GameScene from "./scenes/game";
import BootScene from "./scenes/boot";
import TitleScene from "./scenes/title";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Title", TitleScene);
    this.scene.add("Game", GameScene);
    this.scene.start("Boot");
  }
}

window.game = new Game();
