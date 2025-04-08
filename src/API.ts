/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFormEntryInput = {
  id?: string | null,
  name: string,
  email: string,
  message?: string | null,
  createdAt?: string | null,
};

export type ModelFormEntryConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFormEntryConditionInput | null > | null,
  or?: Array< ModelFormEntryConditionInput | null > | null,
  not?: ModelFormEntryConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type FormEntry = {
  __typename: "FormEntry",
  id: string,
  name: string,
  email: string,
  message?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateFormEntryInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  message?: string | null,
  createdAt?: string | null,
};

export type DeleteFormEntryInput = {
  id: string,
};

export type ModelFormEntryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormEntryFilterInput | null > | null,
  or?: Array< ModelFormEntryFilterInput | null > | null,
  not?: ModelFormEntryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFormEntryConnection = {
  __typename: "ModelFormEntryConnection",
  items:  Array<FormEntry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFormEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormEntryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFormEntryMutationVariables = {
  input: CreateFormEntryInput,
  condition?: ModelFormEntryConditionInput | null,
};

export type CreateFormEntryMutation = {
  createFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateFormEntryMutationVariables = {
  input: UpdateFormEntryInput,
  condition?: ModelFormEntryConditionInput | null,
};

export type UpdateFormEntryMutation = {
  updateFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteFormEntryMutationVariables = {
  input: DeleteFormEntryInput,
  condition?: ModelFormEntryConditionInput | null,
};

export type DeleteFormEntryMutation = {
  deleteFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetFormEntryQueryVariables = {
  id: string,
};

export type GetFormEntryQuery = {
  getFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListFormEntriesQueryVariables = {
  filter?: ModelFormEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormEntriesQuery = {
  listFormEntries?:  {
    __typename: "ModelFormEntryConnection",
    items:  Array< {
      __typename: "FormEntry",
      id: string,
      name: string,
      email: string,
      message?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFormEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFormEntryFilterInput | null,
};

export type OnCreateFormEntrySubscription = {
  onCreateFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFormEntryFilterInput | null,
};

export type OnUpdateFormEntrySubscription = {
  onUpdateFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFormEntryFilterInput | null,
};

export type OnDeleteFormEntrySubscription = {
  onDeleteFormEntry?:  {
    __typename: "FormEntry",
    id: string,
    name: string,
    email: string,
    message?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
