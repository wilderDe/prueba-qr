import { Injectable } from '@nestjs/common';
import { CreateQrDto } from './dto/create-qr.dto';
import { UpdateQrDto } from './dto/update-qr.dto';
import * as qrcode from 'qrcode';

@Injectable()
export class QrService {

  async create(createQrDto: CreateQrDto) {
    try {
      const qrCodigoDataURL = await qrcode.toDataURL("Hola mundo")
      return qrCodigoDataURL
    } catch (error) {
      throw new Error('Falló al generar código QR')
    }
  }

  findAll() {
    return `This action returns all qr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qr`;
  }

  update(id: number, updateQrDto: UpdateQrDto) {
    return `This action updates a #${id} qr`;
  }

  remove(id: number) {
    return `This action removes a #${id} qr`;
  }
}
