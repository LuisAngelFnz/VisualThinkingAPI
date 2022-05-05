const Reader = require('../utils/Reader');

class StudentsServices{
    static loadStudents(){
        return Reader.loadJson('students.json');
    }

    static getMailsByhaveCertification(students){
        return students.filter((each_student) => each_student.haveCertification).map(
            (each_student) => {
                return each_student.email;
            }
        );
    }
}

module.exports = StudentsServices;