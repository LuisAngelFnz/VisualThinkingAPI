const Reader = require('../utils/Reader');

class StudentsServices{
    static loadStudents(){
        return Reader.loadJson('students.json')
    }
}

module.exports = StudentsServices;