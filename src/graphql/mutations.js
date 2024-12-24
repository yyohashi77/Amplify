/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstance = /* GraphQL */ `
  mutation CreateInstance(
    $input: CreateInstanceInput!
    $condition: ModelInstanceConditionInput
  ) {
    createInstance(input: $input, condition: $condition) {
      instanceId
      instanceName
      region
      state
      launchTime
      collectionTime
      totalStorage
      stopRequestTime
      startRequestTime
      backupRequestTime
      autoStartStop
      weekdaysOnly
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInstance = /* GraphQL */ `
  mutation UpdateInstance(
    $input: UpdateInstanceInput!
    $condition: ModelInstanceConditionInput
  ) {
    updateInstance(input: $input, condition: $condition) {
      instanceId
      instanceName
      region
      state
      launchTime
      collectionTime
      totalStorage
      stopRequestTime
      startRequestTime
      backupRequestTime
      autoStartStop
      weekdaysOnly
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInstance = /* GraphQL */ `
  mutation DeleteInstance(
    $input: DeleteInstanceInput!
    $condition: ModelInstanceConditionInput
  ) {
    deleteInstance(input: $input, condition: $condition) {
      instanceId
      instanceName
      region
      state
      launchTime
      collectionTime
      totalStorage
      stopRequestTime
      startRequestTime
      backupRequestTime
      autoStartStop
      weekdaysOnly
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
