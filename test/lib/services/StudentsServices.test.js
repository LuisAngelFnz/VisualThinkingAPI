const StudentsServices = require('../../../lib/services/StudentsServices');

describe('Suit test for class StudentsServices', () => {
    test('1.- Method loadStudents', () => {
        const result = StudentsServices.loadStudents();
        expect(result).not.toBeUndefined();
        expect(result).not.toBeNull();
        expect(result.length > 0).toBe(true);
    });

    test('2.- Method getMailsByhaveCertification, pass null and undefined params', () => {
        let callback = () => {StudentsServices.getMailsByhaveCertification(null)};
        expect(callback).toThrow(TypeError);

        callback = () => {StudentsServices.getMailsByhaveCertification(undefined)};
        expect(callback).toThrow(TypeError);
    });

    test('3.- Method getMailsByhaveCertification, pass params OK', () => {
        const students = [
            {
                "email": "Todd@visualpartnership.xyz",
                "haveCertification": true,
            },
            {
                "email": "Sexton@visualpartnership.xyz",
                "haveCertification": true
            },
            {
                "email": "Sharlene@visualpartnership.xyz",
                "haveCertification": false
            }
        ]

        let result = StudentsServices.getMailsByhaveCertification(students);
        expect(result).not.toBeUndefined();
        expect(result.length === 2).toBe(true);
        expect(result).toContain('Todd@visualpartnership.xyz');
        expect(result).toContain('Sexton@visualpartnership.xyz');
    });    


});