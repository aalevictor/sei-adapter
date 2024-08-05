import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import ConsultarProcessosDTO from './dto/consultar-processos.dto';

@Controller('processo')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @Get('consultar-processos')
  consultarProcessos(@Body() consultarProcessosRequest: ConsultarProcessosDTO) {
    return this.processoService.consultarProcessos(consultarProcessosRequest);
  }
}
