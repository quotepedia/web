import type { components, operations } from "../types";

export type CreateCollectionFormData = {
  name: string;
  description: string;
};

export type Collection = components["schemas"]["CollectionResponse"];

export type CollectionSearchParams = operations["GetCurrentUserCollections"]["parameters"]["query"];
