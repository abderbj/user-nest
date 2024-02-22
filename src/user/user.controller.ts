import { Controller, Get , Post, Patch, Delete, Body, Param} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from '../user.schema';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post()
    create(@Body() createdUser : User): Promise<User> {
        return this.userService.create(createdUser);
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.getOne(id);
    }
    @Delete(':id')
    delete(@Param('id') id : string): Promise<string> {
        return this.userService.delete(id);
    }
    @Patch()
    update(@Param('id') id : string, @Body() updatedUser : User): Promise<User> {
        return this.userService.update(id, updatedUser);
    }
}
