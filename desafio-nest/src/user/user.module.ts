import { Module } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers'
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...UserProviders],
  controllers: [UserController],
})
export class UserModule {}
