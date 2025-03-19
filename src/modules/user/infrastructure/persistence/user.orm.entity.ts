import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Nome da tabela no banco de dados
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
