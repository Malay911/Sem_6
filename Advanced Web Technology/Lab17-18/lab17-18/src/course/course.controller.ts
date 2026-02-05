import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('course')
export class CourseController {

  @Get()
  findAll(): string {
    return 'Returning all courses';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning course with id ${id}`;
  }

  @Post()
  insert(@Body() body: any): string {
    return 'Course inserted successfully';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `Course ${id} updated successfully`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Course ${id} deleted successfully`;
  }
}