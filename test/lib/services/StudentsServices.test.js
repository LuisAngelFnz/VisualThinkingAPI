const StudentsServices = require('../../../lib/services/StudentsServices');

describe('Suit test for class StudentsServices', () => {
    test('1.- Method loadStudents', () => {
        const result = StudentsServices.loadStudents();
        expect(result).not.toBeUndefined();
        expect(result).not.toBeNull();
        expect(result.length > 0).toBe(true);
    });

    test('2.- Method getMailsByhaveCertification, pass null and undefined params', () => {
        const callback = () => {StudentsServices.getMailsByhaveCertification(null,null)};
        expect(callback).toThrow(TypeError);
    });
});