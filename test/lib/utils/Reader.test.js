const Reader = require('../../../lib/utils/Reader');

describe('Test Suite for class Reader',() => {
    test('1.- Method loadJson, pass params null and undefined', () => {
        let callback = () => {Reader.loadJson(null);};
        expect(callback).toThrow(/Received null/);

        callback = () => {Reader.loadJson(undefined);};
        expect(callback).toThrow(/Received undefined/);
    });

    test('2.- Method loadJson, pass param json OK', () => {
        const result = Reader.loadJson('students.json');
        expect(result).not.toBeUndefined();
        expect(result.length > 0).toBe(true);
    });

    test('3. Method loadJson, pass path no valid', () => {
        const callback = () => {Reader.loadJson(`students_${new Date().valueOf()}.json`);};
        expect(callback).toThrow(/no such file/);

    });
});