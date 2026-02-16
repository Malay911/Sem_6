"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    students = [
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
    idCounter = 3;
    create(dto) {
        const student = {
            id: this.idCounter++,
            ...dto,
        };
        this.students.push(student);
        return student;
    }
    findAll() {
        return this.students;
    }
    findOne(id) {
        return this.students.find(s => s.id === id);
    }
    update(id, dto) {
        const student = this.findOne(id);
        if (!student)
            return 'Student not found';
        Object.assign(student, dto);
        return student;
    }
    remove(id) {
        this.students = this.students.filter(s => s.id !== id);
        return 'Student deleted';
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map