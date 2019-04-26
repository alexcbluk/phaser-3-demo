import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet('dude', 'src/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('ground', 'src/assets/platform.png');
    this.load.image('crate', 'src/assets/crate32.png');
  }

  create() {
    this.fSetupVariables();
    this.fSetupLevel();
    this.fSetupPlayer();
    this.fSetupCollisions();
  }

  update() {
    this.fPlayerNavigate();
  }

  fSetupVariables() {
    this.score = 0;
  }

  fSetupLevel() {
    //Platform
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(1000, 550, 'ground');
    this.platforms.create(400, 700, 'ground').setScale(2).refreshBody();

    //Crates
    this.crates = this.physics.add.group({
      key: 'crate',
      repeat: 17,
      setXY: { x: 0, y: 0, stepX: 70 }
    });

    this.crates.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.2));
    });

    this.scoreText = this.add.text(16, 16, 'Score: ' + this.score, { fontSize: '32px', fill: '#fff' });
  }

  fSetupPlayer() {
    this.player = this.physics.add.sprite(150, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(1.25);

    this.anims.create({
      key: 'WalkLeft',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'WalkIdle',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'WalkRight',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursor = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  fSetupCollisions() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.crates, this.platforms);
    this.physics.add.overlap(this.player, this.crates, this.fCollectCrate, null, this);
  }

  fPlayerNavigate() {
    var Player = this.player;
    var Cursor = this.cursor;

    if (Cursor.left.isDown) {
      Player.setVelocityX(-160);
      Player.anims.play('WalkLeft', true);
    }
    else if (Cursor.right.isDown) {
      Player.setVelocityX(160);
      Player.anims.play('WalkRight', true);
    }
    else {
      Player.setVelocityX(0);
      Player.anims.play('WalkIdle');
    }

    if ((Cursor.up.isDown || this.jumpButton.isDown) && Player.body.touching.down) {
      Player.setVelocityY(1500);
    }
  }

  fCollectCrate(player, crate) {
    crate.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
  }


}
