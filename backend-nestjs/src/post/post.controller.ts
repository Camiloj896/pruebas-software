import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';

@Controller('api/post')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getAll(@Res() request): Promise<PostEntity[]> {
        const users = await this.postService.findAll();
        return request.status(HttpStatus.OK).json(users);
    }

    @Get(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(@Res() request, @Param('id') id: string): Promise<PostEntity> {
        const user = await this.postService.findOne(id);
        return request.status(HttpStatus.OK).json(user);
    }

    @Get('/user/:id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getByUser(@Res() request, @Param('id') id: string): Promise<PostEntity> {
        const user = await this.postService.getByUser(id);
        return request.status(HttpStatus.OK).json(user);
    }

    @Post()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     async create(@Res() request, @Body() postDto: PostEntity): Promise<PostEntity> {
        const user = await this.postService.create(postDto);
        return request.status(HttpStatus.CREATED).json(user);
    }

    @Put(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async update(@Res() request, @Body() postDto: PostEntity, @Param('id') id: string): Promise<any> {
        const user = await this.postService.update(id, postDto);
        return request.status(HttpStatus.OK).json(user);
    }

    @Delete(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async delete(@Res() request, @Param('id') id: string): Promise<any> {
        await this.postService.delete(id);
        return request.status(HttpStatus.OK);
    }

}