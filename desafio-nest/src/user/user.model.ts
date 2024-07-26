import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  numeroX: number;
}
