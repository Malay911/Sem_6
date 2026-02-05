import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [StudentModule, TeacherModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
