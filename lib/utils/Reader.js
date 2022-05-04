const fileSystem = require('fs');

class Reader{
    static loadJson(path){
        return fileSystem.readFileSync(path)
    }
}

module.exports = Reader;