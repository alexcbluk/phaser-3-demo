import "phaser";

export default {
  type: Phaser.AUTO,  //Phaser.WEBGL / Phaser.CANVAS
  parent: "phaser-example",
  width: 1280,
  height: 768,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
};
