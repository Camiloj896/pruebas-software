import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./../user/user.entity";
import { PostEntity } from "./../post/post.entity";

@Entity({ name: 'comment' })
export class CommentEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, user => user.comments)
  user: UserEntity;

  @ManyToOne(() => PostEntity, post => post.comments)
  post: PostEntity;

  @Column({ type: 'varchar', nullable: false})
  text: string;

}