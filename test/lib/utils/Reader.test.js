const Reader = require('../../../lib/utils/Reader');

describe('Test Suite for class Reader',() => {
    test('1.- Method loadJson, pass params null and undefined', () => {
        let callback = () => Reader.loadJson(null);
        expect(callback).toThrow(TypeError);

        callback = () => eader.loadJson(undefined);
        expect(callback).toThrow(TypeError);
    });

    test('2.- Method loadJson, pass param json OK', () => {
        const result = Reader.loadJson('students.json');
        expect(result).not.toBeUndefined();
        expect(result.length > 0).toBe(true);
    });
});