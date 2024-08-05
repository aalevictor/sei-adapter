import { Inject, Injectable } from '@nestjs/common';
import { Client as SoapClient } from 'nestjs-soap';
import ConsultarProcessosDTO from './dto/consultar-processos.dto';

@Injectable()
export class ProcessoService {
  constructor(
    @Inject('SEI_PROCESSO') private readonly Processo: SoapClient
  ){}
  async consultarProcessos(consultarProcessosRequest: ConsultarProcessosDTO) {
    const response = await new Promise (async (resolve, reject) => {
      await this.Processo['proc:consultarProcessos.v1.0.Retorno.Mensagem']({ ...consultarProcessosRequest }, (err: any, result: any) => {
        if (result) {
          resolve(result);
        } else {
          console.log(err);
          resolve(null);
        }
      });
    });
    console.log(response);
  }
}
