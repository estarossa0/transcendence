import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class user {
  @Field()
  id: string;

  @Field()
  name: string;
}
