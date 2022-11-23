import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserInfo {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("text")
    name : string  = "";

    @Column()
    age : number = 0;

}