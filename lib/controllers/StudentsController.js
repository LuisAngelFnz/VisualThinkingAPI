const StudentsServices = require('../services/StudentsServices');

class StudentsController{
    static getAllStudents(){
        return StudentsServices.loadStudents();
    }

    static getMailsByhaveCertification(){
        return StudentsServices.getMailsByhaveCertification(this.getAllStudents());
    }

    static getStudentsCreditsGt500(){
        const all_students = this.getAllStudents();
        return StudentsServices.filterStudentsByCredits(all_students, 500, 'gt')
    }
}

module.exports = StudentsController;