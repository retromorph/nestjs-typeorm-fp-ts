import {DynamicModule, Module} from "@nestjs/common";

@Module({})
export class TypeormFpTsModule {
  public static forRoot(): DynamicModule {
    return {
      module: TypeormFpTsModule,
    };
  }
}
