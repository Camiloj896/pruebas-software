import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';

@Controller('api/comments')
export class CommentController {

    constructor(private commentService: CommentService) {}

    @Get()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getAll(@Res() request): Promise<CommentEntity[]> {
        const users = await this.commentService.findAll();
        return request.status(HttpStatus.OK).json(users);
    }

    @Get(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(@Res() request, @Param('id') id: string): Promise<CommentEntity> {
        const user = await this.commentService.findOne(id);
        return request.status(HttpStatus.OK).json(user);
    }

    @Post()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     async create(@Res() request, @Body() commentDto: CommentEntity): Promise<CommentEntity> {
        const user = await this.commentService.create(commentDto);
        return request.status(HttpStatus.CREATED).json(user);
    }

    @Put(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async update(@Res() request, @Body() commentDto: CommentEntity, @Param('id') id: string): Promise<any> {
        const user = await this.commentService.update(id, commentDto);
        return request.status(HttpStatus.OK).json(user);
    }

    @Delete(':id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async delete(@Res() request, @Param('id') id: string): Promise<any> {
        await this.commentService.delete(id);
        return request.status(HttpStatus.OK);
    }

}