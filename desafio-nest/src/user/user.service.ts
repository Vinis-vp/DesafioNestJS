import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private numeroX: number;

  constructor(
    @Inject('USER_REPOSITORY')
    private userModel: typeof User
  ) {
    this.numeroX = 0;   
    // Incrementa numeroX a cada 30 segundos.
    setInterval(() => {
      this.numeroX += 1;
    }, 30000); 
  }

  async create(createDto: any): Promise<User> {
    createDto.numeroX = this.numeroX; 
    return this.userModel.create(createDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateDto: any): Promise<User> {
    await this.userModel.update(updateDto, { where: { id } });
    return this.userModel.findByPk(id);
  }

  async delete(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id } });
  }
}
