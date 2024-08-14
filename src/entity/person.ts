import { Timestamp } from "src/entity/timestamp";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Person extends Timestamp{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    firstName: string

    @Column({
        nullable: false,
        default: ''
    })
    lastName: string

    @Column({
        nullable: true,
        default: ''
    })
    contact: string
}