import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import AuthDTO from './auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOne(id);
    return user;
  }

  async create(userDto: UserEntity): Promise<UserEntity> {    
    const user = await this.usersRepository.save(userDto);
    return user;
  }

  async login(userDto: AuthDTO): Promise<any> {
    
    const User = await this.usersRepository.findOne({ user: userDto.user, pass: userDto.password });
    
    const res = {
        statusCode: 200,
        data: User
    };
    
    return res;
    
  }

  async update(id: string, userDto: UserEntity): Promise<any> {
    await this.usersRepository.update(id, userDto);
    const User = await this.usersRepository.findOne(id);
    
    const res = {
        statusCode: 201,            
        message: 'El usuario se actualizó correctamente',
        data: User
    };
    
    return res;
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}