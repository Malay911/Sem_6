import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 21,
    },
    {
      id: 3,
      name: 'Bob Doe',
      age: 22,
    },
  ];
  private idCounter = 3;

  create(dto: CreateStudentDto) {
    const student: Student = {
      id: this.idCounter++,
      ...dto,
    };

    this.students.push(student);
    return student;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find(s => s.id === id);
  }

  update(id: number, dto: UpdateStudentDto) {
    const student = this.findOne(id);
    if (!student) return 'Student not found';

    Object.assign(student, dto);
    return student;
  }

  remove(id: number) {
    this.students = this.students.filter(s => s.id !== id);
    return 'Student deleted';
  }
}