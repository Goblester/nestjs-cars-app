import { Field, InputType } from '@nestjs/graphql';
import { Length, Max, Min, IsUrl } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field()
  @Min(10, { message: 'daily price is too low' })
  @Max(1000, { message: 'daily price is too high' })
  dailyPrice: number;

  @Field()
  @Min(1000, { message: 'daily price is too low' })
  @Max(10000, { message: 'daily price is too high' })
  monthlyPrice: number;

  @Field()
  @Length(1, 20)
  mileage: string;

  @Field()
  @Length(1, 20)
  gas: string;

  @Field()
  @Length(1, 20)
  gearType: string;

  @Field()
  @IsUrl()
  thumbnailUrl: string;
}
