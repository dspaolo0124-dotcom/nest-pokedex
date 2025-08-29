// este modulo se crea desde terminal -----> sirve cpara colocar los pippes personalizados
// nest g mo common
import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';


@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {}
