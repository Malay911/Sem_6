import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './student.service';
export declare class StudentsController {
    private readonly service;
    constructor(service: StudentsService);
    create(dto: CreateStudentDto): Promise<import("./entities/student.entity").Student>;
    findAll(): Promise<import("./entities/student.entity").Student[]>;
    findOne(id: number): Promise<import("./entities/student.entity").Student | null>;
    update(id: number, dto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
