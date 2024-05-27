import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsAlpha()
  name: string;
  @Field({ nullable: true })
  gender?: string;
}
