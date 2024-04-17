import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
}

interface TaskQuery {
    limit?: number;
}

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getTasks({limit = 2}: TaskQuery): Task[]{
        return this.tasks.slice(0, limit);
    }

    getTaskById(id: string) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            return new NotFoundException('Task not found'); // This will return a 404 status code
        }
        return task;
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({
            id: randomUUID(),
            ...task,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        return 'Updating a task';
    }

    deleteTask() {
        return 'Deleting a task';
    }

    updateTaskStatus() {
        return 'Updating a task status';
    }
}