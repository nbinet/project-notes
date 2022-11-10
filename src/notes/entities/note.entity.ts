import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

type NoteProperties = Required<Note>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({
    unique: true,
  })
  public title?: string;
  @Column({
    unique: true,
  })
  public text?: string;

  public static fromProperties(value: NoteProperties): Note {
    const note = new Note();
    note.id = value.id;
    note.title = value.title;
    note.text = value.text;
    return note;
  }
}
