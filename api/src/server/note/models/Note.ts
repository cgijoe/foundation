import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  title: string;

  @Column()
  description: string;
}
