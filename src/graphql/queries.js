/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstance = /* GraphQL */ `
  query GetInstance($id: ID!) {
    getInstance(id: $id) {
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
export const listInstances = /* GraphQL */ `
  query ListInstances(
    $filter: ModelInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
