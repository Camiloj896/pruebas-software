import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from "./../comment/comment.entity";
import { PostEntity } from "./../post/post.entity";

@Entity({ name: 'user' })
export class UserEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false})
  name: string;

  @Column({ type: 'varchar', nullable: false})
  lastname: string;

  @Column({ type: 'varchar', nullable: false})
  career: string;

  @Column({ type: 'varchar', nullable: false})
  user: string;

  @Column({ type: 'varchar', nullable: false})
  pass: string;

  @OneToMany(() => CommentEntity, comment => comment.post)
  comments: CommentEntity[];

  @OneToMany(() => PostEntity, post => post.user)
  posts: PostEntity[];

}