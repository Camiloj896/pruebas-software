import { Module, Logger } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';


@Module({
  imports: [
    DatabaseModule,
    UserModule,
    PostModule,
    CommentModule
  ],
  controllers: [],
  providers: [ Logger ],
})
export class AppModule {}
