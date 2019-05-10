import { payload, results } from './fetchApi';

class studentApi {
  static getAllStudents() {
    return results(`${process.env.API_HOST}/api/Student`, 'GET', 'Student').then(students => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], students));
      });
    });
  }

  static getStudentById(studentId) {
    return results(`${process.env.API_HOST}/api/Student/${studentId}`, 'GET', 'Student').then(student => {
      return new Promise((resolve, reject) => {
        resolve(student);
      });
    });
  }

  static saveStudent(student) {
    student = Object.assign({}, student); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstudentNameLength = 3;
      if (student.firstName.length < minstudentNameLength) {
        reject(`First Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.lastName.length < minstudentNameLength) {
        reject(`Last Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.studentId) {
        results(`${process.env.API_HOST}/api/Student/${student.studentId}`, 'PUT', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message)); // eslint-disable-line no-console
      } else {
        results(`${process.env.API_HOST}/api/Student`, 'POST', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message)); // eslint-disable-line no-console
      }
    });
  }

  static deleteStudent(student) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Student/${student.studentId}`, 'DELETE', 'Student', student);
      resolve();
    });
  }
}

export default studentApi;

