/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFormEntry = /* GraphQL */ `query GetFormEntry($id: ID!) {
  getFormEntry(id: $id) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFormEntryQueryVariables,
  APITypes.GetFormEntryQuery
>;
export const listFormEntries = /* GraphQL */ `query ListFormEntries(
  $filter: ModelFormEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFormEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFormEntriesQueryVariables,
  APITypes.ListFormEntriesQuery
>;
