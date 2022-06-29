import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field()
  dailyPrice: number;

  @Field()
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
