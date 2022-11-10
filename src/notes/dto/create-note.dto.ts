import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ example: 'title' })
  @IsNotEmpty()
  title: string;
  @ApiProperty({ example: 'insert text here' })
  @IsNotEmpty()
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}
