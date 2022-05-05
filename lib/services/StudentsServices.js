const Reader = require('../utils/Reader');

class StudentsServices{
    static loadStudents(){
        return JSON.parse(Reader.loadJson('students.json'));
    }

    static getMailsByhaveCertification(students){
        return students.filter((each_student) => each_student.haveCertification).map(
            (each_student) => {
                return each_student.email;
            }
        );
    }

    static filterStudentsByCredits(students, quantity, operant){
        return students.filter(
            (each_student) => {
                switch(operant) {
                    case 'e':
                        return each_student.credits == quantity;
                    
                    case 'lt':
                        return each_student.credits < quantity;
                    
                    case 'lte':
                        return each_student.credits <= quantity;
                    
                    case 'gt':
                        return each_student.credits > quantity;
                    
                    case 'gte':
                        return each_student.credits >= quantity;

                    default:
                        return false;
                }
            }
        )
    }
}

module.exports = StudentsServices;