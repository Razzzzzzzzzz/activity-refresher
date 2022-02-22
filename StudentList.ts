import { threadId } from "worker_threads";
import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
        let valid = false;

        for (let index = 0; index < this.students.length; index++) {
            const element = this.students[index];

            if (element.studentId === id) {
                valid = true;
            }
        }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }


    updateCourse(id: string, course: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.course = course;
                    return element;
                }
            }
        }

        return "student course doesn't exists";
    }

    updateCollege(id: string, collegeName: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.college = collegeName;
                    return element;
                }
            }
        }
        return "student college doesn't exists"

    }

    updateAddress(id: string, address: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.address = address;
                    return element;
                }
            }
        }
        return "student address doesn't exists"

    }

    numberOfStudents(){
        let numLoop = 0;
        for (let index = 0; index < this.students.length; index++) {
            numLoop = numLoop + 1;
            
        }
        return numLoop;
    }

    removeStudent(id: string) {
            for (let index = 0; index < this.students.length; index++) {
               const element = this.students[index];
    
                if (element.studentId === id) {
                    this.students.splice(index, 1);
                    return element;
                }
                return "failed to removed selected id"
            }
        
    }



    // create method and return number of students
    // delete one student and return list of students, use splice method (index, 1)
}
