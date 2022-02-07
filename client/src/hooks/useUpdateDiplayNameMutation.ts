import gql from "graphql-tag";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: "user";
  id: Scalars["String"];
  displayName: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  changeDisplayName: User;
};

export type MutationChangeDisplayNameArgs = {
  newName: Scalars["String"];
};

export type UpdateDiplayNameMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type UpdateDiplayNameMutation = {
  __typename?: "Mutation";
  changeDisplayName: { __typename?: "user"; id: string; displayName: string };
};

export type UserFieldsFragment = {
  __typename?: "user";
  id: string;
  displayName: string;
};

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on user {
    id
    displayName
  }
`;
export const UpdateDiplayNameDocument = gql`
  mutation updateDiplayName($name: String!) {
    changeDisplayName(newName: $name) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useUpdateDiplayNameMutation() {
  return Urql.useMutation<
    UpdateDiplayNameMutation,
    UpdateDiplayNameMutationVariables
  >(UpdateDiplayNameDocument);
}
