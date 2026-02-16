import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private students;
    private idCounter;
    create(dto: CreateStudentDto): Student;
    findAll(): Student[];
    findOne(id: number): Student | undefined;
    update(id: number, dto: UpdateStudentDto): Student | "Student not found";
    remove(id: number): string;
}
