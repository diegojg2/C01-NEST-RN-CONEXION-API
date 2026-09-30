import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Kira' },
    { id: 2, nombre: 'Thor' }
  ];

  findOne(id: number) {
    return this.mascotas.find(m => m.id === id);
  }
}