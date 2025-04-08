/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFormEntry = /* GraphQL */ `mutation CreateFormEntry(
  $input: CreateFormEntryInput!
  $condition: ModelFormEntryConditionInput
) {
  createFormEntry(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFormEntryMutationVariables,
  APITypes.CreateFormEntryMutation
>;
export const updateFormEntry = /* GraphQL */ `mutation UpdateFormEntry(
  $input: UpdateFormEntryInput!
  $condition: ModelFormEntryConditionInput
) {
  updateFormEntry(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFormEntryMutationVariables,
  APITypes.UpdateFormEntryMutation
>;
export const deleteFormEntry = /* GraphQL */ `mutation DeleteFormEntry(
  $input: DeleteFormEntryInput!
  $condition: ModelFormEntryConditionInput
) {
  deleteFormEntry(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFormEntryMutationVariables,
  APITypes.DeleteFormEntryMutation
>;
