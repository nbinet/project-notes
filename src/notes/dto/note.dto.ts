import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../entities/note.entity';

type NoteProperties = Required<NoteDto>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}
export class NoteDto {
  @ApiProperty()
  id: number;
  @ApiProperty({ example: 'title' })
  title: string;
  @ApiProperty({ example: 'insert text here' })
  text: string;

  constructor(value: Note) {
    this.id = value.id ?? 0;
    this.title = value.title ?? '';
    this.text = value.text ?? '';
  }
}
