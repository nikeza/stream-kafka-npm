import { DynamicModule, Global, Module } from '@nestjs/common';
import { StreamService } from './stream.service';

@Global()
@Module({})
export class StreamModule {
    static register(kafkaConfig: KafkaConfig): DynamicModule {
        return {
            global: true,
            module: StreamModule,
            providers: [
                {
                    provide: StreamService,
                    useValue: new StreamService(kafkaConfig),
                },
            ],
            exports: [StreamService],
        };
    }
}

export declare class KafkaConfig {
    clientId: string;
    brokers: string[];
    groupId: string;
}
