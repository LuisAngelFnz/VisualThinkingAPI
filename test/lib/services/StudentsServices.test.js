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
                'email': 'Todd@visualpartnership.xyz',
                'haveCertification': true,
            },
            {
                'email': 'Sexton@visualpartnership.xyz',
                'haveCertification': true
            },
            {
                'email': 'Sharlene@visualpartnership.xyz',
                'haveCertification': false
            }
        ]

        let result = StudentsServices.getMailsByhaveCertification(students);
        expect(result).not.toBeUndefined();
        expect(result.length === 2).toBe(true);
        expect(result).toContain('Todd@visualpartnership.xyz');
        expect(result).toContain('Sexton@visualpartnership.xyz');
    });  

    test('4.- Method filterStudentsByCredits, pass params null and undefined', () => {
        let callback = () => {StudentsServices.filterStudentsByCredits(null, null, null);}
        expect(callback).toThrow(TypeError);

        callback = () => {StudentsServices.filterStudentsByCredits(undefined, undefined, undefined);}
        expect(callback).toThrow(TypeError);
    });

    test('5.- Method filterStudentsByCredits, pass params OK', () => {
        const students = [
            {'credits': 400},
            {'credits': 500},
            {'credits': 600},
        ];

        let result =  StudentsServices.filterStudentsByCredits(students, 500, 'e');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(1);
        expect(result[0].credits).toBe(500);

        result =  StudentsServices.filterStudentsByCredits(students, 500, 'gte');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(2);
        expect(result[0].credits).toBe(500);
        expect(result[1].credits).toBe(600);

        result =  StudentsServices.filterStudentsByCredits(students, 500, 'gt');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(1);
        expect(result[0].credits).toBe(600);

        result =  StudentsServices.filterStudentsByCredits(students, 500, 'lte');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(2);
        expect(result[0].credits).toBe(400);
        expect(result[1].credits).toBe(500);

        result =  StudentsServices.filterStudentsByCredits(students, 500, 'lt');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(1);
        expect(result[0].credits).toBe(400);

        result =  StudentsServices.filterStudentsByCredits(students, 500, 'unknow');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(0);
    })
});