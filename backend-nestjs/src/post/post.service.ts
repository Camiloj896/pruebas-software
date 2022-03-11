import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    const posts = await this.postRepository.find();
    return posts;
  }

  async getByUser(id: string): Promise<PostEntity[]> {
    const posts = await this.postRepository.find({ where: { user: id} });
    return posts;
  }

  async findOne(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findOne(id, { relations: ["comments","comments.user"] });
    return post;
  }

  async create(postDto: PostEntity): Promise<PostEntity> {    
    const post = await this.postRepository.save(postDto);
    return post;
  }


  async update(id: string, postDto: PostEntity): Promise<any> {
    await this.postRepository.update(id, postDto);
    const post = await this.postRepository.findOne(id);
    
    const res = {
        statusCode: 201,            
        message: 'El usuario se actualizó correctamente',
        data: post
    };
    
    return res;
  }

  async delete(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}