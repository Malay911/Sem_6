import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(dto: CreateStudentDto): import("./entities/student.entity").Student;
    findAll(): import("./entities/student.entity").Student[];
    findOne(id: string): import("./entities/student.entity").Student | undefined;
    update(id: string, dto: UpdateStudentDto): import("./entities/student.entity").Student | "Student not found";
    remove(id: string): string;
}
