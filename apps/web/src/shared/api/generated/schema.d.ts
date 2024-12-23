export interface paths {
  "/api/v1/auth/register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Register */
    post: operations["register_api_v1_auth_register_post"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/auth/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Login */
    post: operations["login_api_v1_auth_login_post"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/auth/reset-password": {
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
    patch: operations["reset_password_api_v1_auth_reset_password_patch"];
    trace?: never;
  };
  "/api/v1/otp/verify": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Verify Otp */
    post: operations["verify_otp_api_v1_otp_verify_post"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/otp/send": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Send Otp */
    post: operations["send_otp_api_v1_otp_send_post"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/users/exists": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** User Exists */
    post: operations["user_exists_api_v1_users_exists_post"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/users/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get Current User */
    get: operations["get_current_user_api_v1_users_me_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/v1/users/me/email": {
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
    patch: operations["update_current_user_email_api_v1_users_me_email_patch"];
    trace?: never;
  };
  "/api/v1/users/me/password": {
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
    patch: operations["update_current_user_password_api_v1_users_me_password_patch"];
    trace?: never;
  };
  "/api/v1/users/me/avatar": {
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
    delete: operations["delete_current_user_avatar_api_v1_users_me_avatar_delete"];
    options?: never;
    head?: never;
    /** Update Current User Avatar */
    patch: operations["update_current_user_avatar_api_v1_users_me_avatar_patch"];
    trace?: never;
  };
  "/api/v1/media/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get File */
    get: operations["get_file_api_v1_media__name__get"];
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
    /** Body_login_api_v1_auth_login_post */
    Body_login_api_v1_auth_login_post: {
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
    /** Body_update_current_user_avatar_api_v1_users_me_avatar_patch */
    Body_update_current_user_avatar_api_v1_users_me_avatar_patch: {
      /**
       * File
       * Format: binary
       */
      file: Blob;
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
      /** Password */
      password: string;
    };
    /**
     * UserPasswordResetRequest
     * @description Represents a request for resetting a user's password.
     */
    UserPasswordResetRequest: {
      /** Otp */
      otp: number;
      /** Password */
      password: string;
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /**
     * UserRegistrationRequest
     * @description Represents a request for user registration.
     */
    UserRegistrationRequest: {
      /** Otp */
      otp: number;
      /** Password */
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
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  register_api_v1_auth_register_post: {
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
  login_api_v1_auth_login_post: {
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
        "application/x-www-form-urlencoded": components["schemas"]["Body_login_api_v1_auth_login_post"];
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
  reset_password_api_v1_auth_reset_password_patch: {
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
  verify_otp_api_v1_otp_verify_post: {
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
  send_otp_api_v1_otp_send_post: {
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
  user_exists_api_v1_users_exists_post: {
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
  get_current_user_api_v1_users_me_get: {
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
  update_current_user_email_api_v1_users_me_email_patch: {
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
  update_current_user_password_api_v1_users_me_password_patch: {
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
  delete_current_user_avatar_api_v1_users_me_avatar_delete: {
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
  update_current_user_avatar_api_v1_users_me_avatar_patch: {
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
        "multipart/form-data": components["schemas"]["Body_update_current_user_avatar_api_v1_users_me_avatar_patch"];
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
  get_file_api_v1_media__name__get: {
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
}
