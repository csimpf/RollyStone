import * as Phaser from 'phaser';

/*
Todo: Increase Border width of stone
*/

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    private circle: Phaser.GameObjects.Ellipse & { body: Phaser.Physics.Arcade.Body };

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.circle = this.add.circle(400, 400, 100, 0x006140) as any;
        this.physics.add.existing(this.circle);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();
        const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        if (this.circle.y < 100 && this.circle.body.velocity.y < 0 ||
            this.circle.y > window.innerHeight - 100 && this.circle.body.velocity.y > 0) {
            this.circle.body.setVelocityY(-this.circle.body.velocity.y);
        }

        if (this.circle.x < 100 && this.circle.body.velocity.x < 0 ||
            this.circle.x > window.innerWidth - 100 && this.circle.body.velocity.x > 0) {
            this.circle.body.setVelocityX(-this.circle.body.velocity.x);
        }

        if (cursorKeys.down.isDown) {
            this.circle.body.setVelocityY(500);
        }

        if (cursorKeys.up.isDown) {
            this.circle.body.setVelocityY(-500);
        }

        if (cursorKeys.left.isDown) {
            this.circle.body.setVelocityX(-500);
        }

        if (cursorKeys.right.isDown) {
            this.circle.body.setVelocityX(500);
        }

        if (spaceKey.isDown) {
            this.circle.body.setVelocity(0);
        }

    }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',
    scene: GameScene,

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },

    parent: 'game',
    backgroundColor: '#FFFFFF',
};

export const game = new Phaser.Game(gameConfig);
