import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QrService } from './qr.service';
import { CreateQrDto } from './dto/create-qr.dto';
import { UpdateQrDto } from './dto/update-qr.dto';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Post()
  async create(@Body() createQrDto: CreateQrDto) {
    const result = await this.qrService.create(createQrDto);
    console.log(result)
    
    return result
  }
}
