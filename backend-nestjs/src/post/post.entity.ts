import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "./../user/user.entity";
import { CommentEntity } from "./../comment/comment.entity";

@Entity({ name: 'post' })
export class PostEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, user => user.posts)
  user: UserEntity;

  @Column({ type: 'varchar', nullable: false})
  title: string;

  @Column({ type: 'text', nullable: false})
  description: string;

  @Column({ type: 'varchar', nullable: false})
  career: string;

  @OneToMany(() => CommentEntity, comment => comment.post)
  comments: CommentEntity[];

}