const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');
const mqtt = require('mqtt')

class Scratch3YourExtension {

    constructor (runtime) {
        this.runtime = runtime;
        this.client = mqtt.connect('mqtt://test.mosquitto.org');
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'CircleArea',

            // colours to use for your extension blocks
            color1: '#000099',
            color2: '#660066',

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'myFirstBlock',

                    blockType: BlockType.REPORTER,

                    text: 'Circle radius [MY_NUMBER]',

                    terminal: false,

                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    arguments: {
                        MY_NUMBER: {
                            defaultValue: 5,
                            type: ArgumentType.NUMBER
                        }
                    }
                }
            ]
        };
    }


    myFirstBlock ({ MY_NUMBER }) {
        return 'The circle area is: ' + (3.1416 * (MY_NUMBER ** 2));
    }
}

module.exports = Scratch3YourExtension;
