const StudentsService = require('../../../lib/services/StudentsService');

describe('Suit test for class StudentsService', () => {
    test('1.- Method loadStudents', () => {
        const result = StudentsService.loadStudents();
        expect(result).not.toBeUndefined();
        expect(result).not.toBeNull();
        expect(result.length > 0).toBe(true);
    });
});