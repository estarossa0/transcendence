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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  changeAvatar: Scalars["Boolean"];
  deleteAvatar: Scalars["Boolean"];
};

export type MutationChangeDisplayNameArgs = {
  newName: Scalars["String"];
};

export type MutationChangeAvatarArgs = {
  file: Scalars["Upload"];
};

export type DeleteAvatarMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteAvatarMutation = {
  __typename?: "Mutation";
  deleteAvatar: boolean;
};

export const DeleteAvatarDocument = gql`
  mutation deleteAvatar {
    deleteAvatar
  }
`;

export function useDeleteAvatarMutation() {
  return Urql.useMutation<DeleteAvatarMutation, DeleteAvatarMutationVariables>(
    DeleteAvatarDocument,
  );
}
