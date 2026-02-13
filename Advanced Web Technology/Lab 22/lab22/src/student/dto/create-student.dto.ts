import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  student_name: string;

  @IsNumber()
  student_age: number;

  @IsString()
  student_gender: string;

  @IsString()
  student_roll_no: string;

  @IsNumber()
  student_semester: number;
}