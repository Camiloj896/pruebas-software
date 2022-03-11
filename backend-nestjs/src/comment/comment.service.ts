import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<CommentEntity[]> {
    const comments = await this.commentRepository.find();
    return comments;
  }

  async findOne(id: string): Promise<CommentEntity> {
      const comment = await this.commentRepository.findOne(id);
    return comment;
  }

  async create(commentDto: CommentEntity): Promise<CommentEntity> {    
    const comment = await this.commentRepository.save(commentDto);
    return comment;
  }


  async update(id: string, commentDto: CommentEntity): Promise<any> {
    await this.commentRepository.update(id, commentDto);
    const comment = await this.commentRepository.findOne(id);
    
    const res = {
        statusCode: 201,            
        message: 'El comentario se actualizó correctamente',
        data: comment
    };
    
    return res;
  }

  async delete(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}