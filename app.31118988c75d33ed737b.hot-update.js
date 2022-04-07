"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterolly_stone"]("app",{

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.game = exports.GameScene = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/*\nTodo: Increase Border width of stone\nTodo: Floating score\n*/\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Game',\n};\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    GameScene.prototype.create = function () {\n        this.circle = this.add.circle(400, 400, 100, 0x006140);\n        this.physics.add.existing(this.circle);\n        this.scoreText = this.add.text(0, 0, 'Hello World', { fontSize: '32px', color: '#000' });\n    };\n    GameScene.prototype.update = function () {\n        var cursorKeys = this.input.keyboard.createCursorKeys();\n        var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);\n        if (this.circle.y < 100 && this.circle.body.velocity.y < 0 ||\n            this.circle.y > window.innerHeight - 100 && this.circle.body.velocity.y > 0) {\n            this.circle.body.setVelocityY(-this.circle.body.velocity.y);\n        }\n        if (this.circle.x < 100 && this.circle.body.velocity.x < 0 ||\n            this.circle.x > window.innerWidth - 100 && this.circle.body.velocity.x > 0) {\n            this.circle.body.setVelocityX(-this.circle.body.velocity.x);\n        }\n        if (cursorKeys.down.isDown) {\n            this.circle.body.setVelocityY(500);\n        }\n        if (cursorKeys.up.isDown) {\n            this.circle.body.setVelocityY(-500);\n        }\n        if (cursorKeys.left.isDown) {\n            this.circle.body.setVelocityX(-500);\n        }\n        if (cursorKeys.right.isDown) {\n            this.circle.body.setVelocityX(500);\n        }\n        if (spaceKey.isDown) {\n            this.circle.body.setVelocity(0);\n        }\n    };\n    return GameScene;\n}(Phaser.Scene));\nexports.GameScene = GameScene;\nvar gameConfig = {\n    title: 'Sample',\n    scene: GameScene,\n    type: Phaser.AUTO,\n    scale: {\n        width: window.innerWidth,\n        height: window.innerHeight,\n    },\n    physics: {\n        default: 'arcade',\n        arcade: {\n            debug: false,\n        },\n    },\n    parent: 'game',\n    backgroundColor: '#FFFFFF',\n};\nexports.game = new Phaser.Game(gameConfig);\n\n\n//# sourceURL=webpack://rolly-stone/./src/main.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("238e6031a4f22018cb90")
/******/ })();
/******/ 
/******/ }
);