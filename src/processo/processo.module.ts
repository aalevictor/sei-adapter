import { Module } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { ProcessoController } from './processo.controller';
import { SoapModule } from 'nestjs-soap';
import { timeout } from 'rxjs';

@Module({
  imports: [
    SoapModule.register({
      clientName: 'SEI_PROCESSO',
      uri: 'http://osb2.hosb.pp9802.prodam:8011/gestao/proxyservice/processo.v1?wsdl',
      clientOptions: {
        wsdl_headers: {
          txtSenhaCAC: process.env.txtSenhaCAC,
          txtSenhaSOA: process.env.txtSenhaSOA,
          nomUsuarioSistema: process.env.nomUsuarioSistema
        },
        normalizeNames: true,
        wsdl_options: {
          timeout: 120000
        }
      },
    }),
  ],
  controllers: [ProcessoController],
  providers: [ProcessoService],
})
export class ProcessoModule {}
