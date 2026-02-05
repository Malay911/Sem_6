import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
  } from '@nestjs/common';
  
  @Controller('student')
  export class StudentController{
  
    @Get()
    findAll(): string{
      return 'Returning all students';
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): string{
      return `Returning student with id ${id}`;
    }
  
    @Post()
    insert(@Body() body: any): string{
      return 'Student inserted successfully';
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any): string{
      return `Student ${id} updated successfully`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): string{
      return `Student ${id} deleted successfully`;
    }
}