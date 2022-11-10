import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { NoteDto } from './dto/note.dto';

@Controller('notes')
@ApiTags('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getNotes(): string {
    return this.notesService.getNotes();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The note has been successfully created.',
    type: NoteDto,
  })
  @ApiConflictResponse({
    description: 'Error',
  })
  async create(@Body() createNoteDto: CreateNoteDto): Promise<NoteDto> {
    const note = await this.notesService.create(createNoteDto);
    return new NoteDto(note);
  }
}
