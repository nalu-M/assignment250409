/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFormEntry = /* GraphQL */ `subscription OnCreateFormEntry($filter: ModelSubscriptionFormEntryFilterInput) {
  onCreateFormEntry(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFormEntrySubscriptionVariables,
  APITypes.OnCreateFormEntrySubscription
>;
export const onUpdateFormEntry = /* GraphQL */ `subscription OnUpdateFormEntry($filter: ModelSubscriptionFormEntryFilterInput) {
  onUpdateFormEntry(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFormEntrySubscriptionVariables,
  APITypes.OnUpdateFormEntrySubscription
>;
export const onDeleteFormEntry = /* GraphQL */ `subscription OnDeleteFormEntry($filter: ModelSubscriptionFormEntryFilterInput) {
  onDeleteFormEntry(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFormEntrySubscriptionVariables,
  APITypes.OnDeleteFormEntrySubscription
>;
