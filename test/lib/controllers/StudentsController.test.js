const StudentsController = require('../../../lib/controllers/StudentsController');

hasattr = Object.prototype.hasOwnProperty.call;

describe('Suit test for class StudentsController', () => {
    test('1.- Requerimiento 1: consultar todos los estudiantes con todos sus campos', () => {
        const result = StudentsController.getAllStudents();
        expect(result).not.toBeUndefined();
        expect(hasattr(result, 'length')).toBe(true);
        expect(result.length > 0).toBe(true);
    });

    test('2.- Requerimiento 2: consultar los emails de todos los estudiantes que tengan certificación haveCertification', () => {

        let result = StudentsController.getMailsByhaveCertification();
        expect(result).not.toBeUndefined();
        expect(hasattr(result, 'length')).toBe(true);
    });

    test('3. Requerimiento 3: consultar todos los estudiantes que tengan credits mayor a 500.', () => {
        let result = StudentsController.getStudentsCreditsGt500();
        expect(result).not.toBeUndefined();
        expect(hasattr(result, 'length')).toBe(true); 
    });
});