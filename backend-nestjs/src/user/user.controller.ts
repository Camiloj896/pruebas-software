import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import AuthDTO from './auth.dto';

@Controller('api/user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getAll(@Res() request): Promise<UserEntity[]> {
        const users = await this.userService.findAll();
        return request.status(HttpStatus.OK).json(users);
    }

    @Get(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(@Res() request, @Param('id') id: string): Promise<UserEntity> {
        const user = await this.userService.findOne(id);
        return request.status(HttpStatus.OK).json(user);
    }

    @Post()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     async create(@Res() request, @Body() userDto: UserEntity): Promise<UserEntity> {
        const user = await this.userService.create(userDto);
        return request.status(HttpStatus.CREATED).json(user);
    }

    @Post('/login')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     async login(@Res() request, @Body() userDto: AuthDTO): Promise<any> {
        const user = await this.userService.login(userDto);
        return request.status(HttpStatus.OK).json(user);
    }

    @Put(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async update(@Res() request, @Body() userDto: UserEntity, @Param('id') id: string): Promise<any> {
        const user = await this.userService.update(id, userDto);
        return request.status(HttpStatus.OK).json(user);
    }

    @Delete(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async delete(@Res() request, @Param('id') id: string): Promise<any> {
        await this.userService.delete(id);
        return request.status(HttpStatus.OK);
    }

}