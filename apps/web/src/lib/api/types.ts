export interface paths {
  "/auth/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Login */
    post: operations["Login"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Register */
    post: operations["Register"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/reset-password": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Reset Password */
    patch: operations["ResetPassword"];
    trace?: never;
  };
  "/authors/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Authors */
    get: operations["GetAuthors"];
    put?: never;
    /** Create Author */
    post: operations["CreateAuthor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/authors/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Author */
    get: operations["GetAuthor"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Public Collections */
    get: operations["GetPublicCollections"];
    put?: never;
    /** Create Collection */
    post: operations["CreateCollection"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/{collection_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Collection */
    get: operations["GetCollection"];
    put?: never;
    post?: never;
    /** Delete Collection */
    delete: operations["DeleteCollection"];
    options?: never;
    head?: never;
    /** Update Collection */
    patch: operations["UpdateCollection"];
    trace?: never;
  };
  "/collections/{collection_id}/quotes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Collection Quotes */
    get: operations["GetCollectionQuotes"];
    put?: never;
    /** Add Quote To Collection */
    post: operations["AddQuoteToCollection"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/{collection_id}/quotes/{quote_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** Remove Quote From Collection */
    delete: operations["RemoveQuoteFromCollection"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/media/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get File */
    get: operations["GetFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/otp/verify": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Verify Otp */
    post: operations["VerifyOtp"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/otp/send": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Send Otp */
    post: operations["SendOtp"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/quotes/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Quotes */
    get: operations["GetQuotes"];
    put?: never;
    /** Create Quote */
    post: operations["CreateQuote"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/quotes/{quote_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Quote */
    get: operations["GetQuote"];
    put?: never;
    post?: never;
    /** Delete Quote */
    delete: operations["DeleteQuote"];
    options?: never;
    head?: never;
    /** Update Quote */
    patch: operations["UpdateQuote"];
    trace?: never;
  };
  "/quotes/{quote_id}/collections": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Quote Collections */
    get: operations["GetQuoteCollections"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update Quote Collections */
    patch: operations["UpdateQuoteCollections"];
    trace?: never;
  };
  "/users/exists": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** User Exists */
    post: operations["UserExists"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Current User */
    get: operations["GetCurrentUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me/email": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update Current User Email */
    patch: operations["UpdateCurrentUserEmail"];
    trace?: never;
  };
  "/users/me/password": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Update Current User Password */
    patch: operations["UpdateCurrentUserPassword"];
    trace?: never;
  };
  "/users/me/avatar": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** Delete Current User Avatar */
    delete: operations["DeleteCurrentUserAvatar"];
    options?: never;
    head?: never;
    /** Update Current User Avatar */
    patch: operations["UpdateCurrentUserAvatar"];
    trace?: never;
  };
  "/users/me/collections": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Current User Collections */
    get: operations["GetCurrentUserCollections"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me/quotes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Current User Quotes */
    get: operations["GetCurrentUserQuotes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /**
     * AccessTokenResponse
     * @description Represents a response containing access token and its expiration datetime.
     */
    AccessTokenResponse: {
      /** Access Token */
      access_token: string;
      /**
       * Token Type
       * @default bearer
       */
      token_type: string;
      /**
       * Expires At
       * Format: date-time
       */
      expires_at: string;
    };
    /** AuthorCreateRequest */
    AuthorCreateRequest: {
      /** Name */
      name: string;
    };
    /** AuthorResponse */
    AuthorResponse: {
      /** Id */
      id: number;
      /** Name */
      name: string;
      /** Created By User Id */
      created_by_user_id: number | null;
    };
    /** Body_Login */
    Body_Login: {
      /** Grant Type */
      grant_type?: string | null;
      /** Username */
      username: string;
      /** Password */
      password: string;
      /**
       * Scope
       * @default
       */
      scope: string;
      /** Client Id */
      client_id?: string | null;
      /** Client Secret */
      client_secret?: string | null;
    };
    /** Body_UpdateCurrentUserAvatar */
    Body_UpdateCurrentUserAvatar: {
      /**
       * File
       * Format: binary
       */
      file: Blob;
    };
    /** CollectionCreateRequest */
    CollectionCreateRequest: {
      /** Name */
      name: string;
      /** Description */
      description?: string | null;
      /** Emote */
      emote?: string | null;
      /** @default 2 */
      visibility: components["schemas"]["Visibility"];
    };
    /** CollectionResponse */
    CollectionResponse: {
      /** Id */
      id: number;
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Emote */
      emote: string;
      visibility: components["schemas"]["Visibility"];
      /** Quotes Count */
      quotes_count: number;
      /** Created By User Id */
      created_by_user_id: number;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
    };
    /** CollectionUpdateRequest */
    CollectionUpdateRequest: {
      /** Name */
      name?: string | null;
      /** Description */
      description?: string | null;
      /** Emote */
      emote?: string | null;
      visibility?: components["schemas"]["Visibility"] | null;
    };
    /**
     * CurrentUserEmailUpdateRequest
     * @description Represents a request to update current user's email.
     */
    CurrentUserEmailUpdateRequest: {
      /** Otp */
      otp: number;
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /**
     * CurrentUserResponse
     * @description Represents the private response data for a user.
     */
    CurrentUserResponse: {
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      /** Id */
      id: number;
      /** Email */
      email: string;
      /** Avatar Url */
      avatar_url: string | null;
      /** Is Active */
      is_active: boolean;
      /** Is Verified */
      is_verified: boolean;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * OTPResponse
     * @description Represents a response containing One-Time Password (OTP) expiration datetime.
     */
    OTPResponse: {
      /**
       * Expires At
       * Format: date-time
       */
      expires_at: string;
    };
    /**
     * OTPVerifyRequest
     * @description Represents a request for verifying a One-Time Password (OTP).
     */
    OTPVerifyRequest: {
      /** Otp */
      otp: number;
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /** QuoteCollectionsResponse */
    QuoteCollectionsResponse: {
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      /** Id */
      id: number;
      /** Content */
      content: string;
      /** Created By User Id */
      created_by_user_id: number | null;
      author: components["schemas"]["AuthorResponse"] | null;
      /** Collections */
      collections: components["schemas"]["CollectionResponse"][];
    };
    /** QuoteCollectionsUpdateRequest */
    QuoteCollectionsUpdateRequest: {
      /** Collection Ids */
      collection_ids: number[];
    };
    /** QuoteCreateRequest */
    QuoteCreateRequest: {
      /** Content */
      content: string;
      /** Author Id */
      author_id?: number | null;
    };
    /** QuoteResponse */
    QuoteResponse: {
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      /** Id */
      id: number;
      /** Content */
      content: string;
      /** Created By User Id */
      created_by_user_id: number | null;
      author: components["schemas"]["AuthorResponse"] | null;
    };
    /** QuoteUpdateRequest */
    QuoteUpdateRequest: {
      /** Content */
      content?: string | null;
      /** Author Id */
      author_id?: number | null;
    };
    /**
     * UserEmailRequest
     * @description Represents a request containing a user's e-mail.
     */
    UserEmailRequest: {
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /**
     * UserExistenceResponse
     * @description Represents a response indicating whether a user exists.
     */
    UserExistenceResponse: {
      /** Exists */
      exists: boolean;
    };
    /**
     * UserPasswordRequest
     * @description Represents a request containing a user's password.
     */
    UserPasswordRequest: {
      /**
       * Password
       * Format: password
       */
      password: string;
    };
    /**
     * UserPasswordResetRequest
     * @description Represents a request for resetting a user's password.
     */
    UserPasswordResetRequest: {
      /** Otp */
      otp: number;
      /**
       * Password
       * Format: password
       */
      password: string;
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /**
     * UserQuotesType
     * @enum {string}
     */
    UserQuotesType: "all" | "saved" | "created";
    /**
     * UserRegistrationRequest
     * @description Represents a request for user registration.
     */
    UserRegistrationRequest: {
      /** Otp */
      otp: number;
      /**
       * Password
       * Format: password
       */
      password: string;
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
    /**
     * Visibility
     * @enum {integer}
     */
    Visibility: 1 | 2;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  Login: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["Body_Login"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AccessTokenResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  Register: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserRegistrationRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AccessTokenResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  ResetPassword: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserPasswordResetRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AccessTokenResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetAuthors: {
    parameters: {
      query?: {
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AuthorResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  CreateAuthor: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AuthorCreateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AuthorResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetAuthor: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        name: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AuthorResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetPublicCollections: {
    parameters: {
      query?: {
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CollectionResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  CreateCollection: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CollectionCreateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CollectionResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetCollection: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CollectionResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  DeleteCollection: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UpdateCollection: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CollectionUpdateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CollectionResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetCollectionQuotes: {
    parameters: {
      query?: {
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  AddQuoteToCollection: {
    parameters: {
      query: {
        quote_id: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteCollectionsResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  RemoveQuoteFromCollection: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        collection_id: number;
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetFile: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        name: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  VerifyOtp: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OTPVerifyRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  SendOtp: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserEmailRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["OTPResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetQuotes: {
    parameters: {
      query?: {
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  CreateQuote: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["QuoteCreateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetQuote: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteCollectionsResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  DeleteQuote: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UpdateQuote: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["QuoteUpdateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetQuoteCollections: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": number[];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UpdateQuoteCollections: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path: {
        quote_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["QuoteCollectionsUpdateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UserExists: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserEmailRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserExistenceResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetCurrentUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CurrentUserResponse"];
        };
      };
    };
  };
  UpdateCurrentUserEmail: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CurrentUserEmailUpdateRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CurrentUserResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UpdateCurrentUserPassword: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserPasswordRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CurrentUserResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  DeleteCurrentUserAvatar: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  UpdateCurrentUserAvatar: {
    parameters: {
      query?: never;
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["Body_UpdateCurrentUserAvatar"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CurrentUserResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetCurrentUserCollections: {
    parameters: {
      query?: {
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CollectionResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  GetCurrentUserQuotes: {
    parameters: {
      query?: {
        type?: components["schemas"]["UserQuotesType"];
        q?: string | null;
        offset?: number;
        limit?: number;
      };
      header?: {
        "accept-language"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["QuoteResponse"][];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
