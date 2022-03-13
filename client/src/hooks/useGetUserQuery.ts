import * as Urql from "urql";

type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
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

type GetUserQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

type GetUserQuery = {
  __typename?: "Query";
  user?:
    | { __typename?: "user"; id: string; displayName: string }
    | null
    | undefined;
};

const UserFieldsFragmentDoc = Urql.gql`
  fragment UserFields on user {
    id
    displayName
  }
`;
const GetUserDocument = Urql.gql`
  query getUser($userId: String!) {
    user(id: $userId) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, "query"> = {},
) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
}
