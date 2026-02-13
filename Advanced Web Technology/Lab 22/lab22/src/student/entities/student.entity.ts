import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  student_id: number;

  @Column()
  student_name: string;

  @Column()
  student_age: number;

  @Column()
  student_gender: string;

  @Column()
  student_roll_no: string;

  @Column()
  student_semester: number;
}
