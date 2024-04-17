import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller({
    path: 'tasks'
})
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Get()
    getAllTasks(@Query() query: any){
        return this.taskService.getTasks(query);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string){
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto){
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.taskService.updateTaskStatus();
    }

    @Get('/greet')
    greet(@Query() query: {name: string, age: number}){
        return `Hello ${query.name}, you are ${query.age} years old.`
    }
}