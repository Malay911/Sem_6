import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {

  @Get()
  findAll(): string {
    return 'Returning all teachers';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning teacher with id ${id}`;
  }

  @Post()
  insert(@Body() body: any): string {
    return 'Teacher inserted successfully';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `Teacher ${id} updated successfully`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Teacher ${id} deleted successfully`;
  }

}