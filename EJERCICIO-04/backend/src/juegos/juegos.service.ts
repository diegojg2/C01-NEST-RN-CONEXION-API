import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, nombre: 'Zelda', genero: 'aventura' },
    { id: 2, nombre: 'Mario', genero: 'plataformas' },
    { id: 3, nombre: 'Metroid', genero: 'aventura' }
  ];

  findAll(genero?: string) {
    if (!genero) return this.juegos;
    return this.juegos.filter(j => j.genero === genero);
  }
}