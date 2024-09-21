import * as i18n from "@solid-primitives/i18n";
import { Theme } from "~/lib/theme";
import { SUPPORTED_CULTURES } from "~/lib/i18n";

export type Locale = keyof typeof SUPPORTED_CULTURES;

export type DictionaryMap = {
  routes: {
    404: {
      title: string;
      heading: string;
      paragraph: string;
      back: string;
    };
    login: {
      title: string;
      heading: string;
      paragraph: string;
      form: {
        fields: {
          email: {
            label: string;
            placeholder: string;
            description: string;
            required: string;
            error: string;
          };
          password: {
            label: string;
            placeholder: string;
            description: string;
            forgot: string;
            required: string;
            minLength: string;
          };
        };
        submit: string;
      };
      footer: string;
      signup: string;
    };
    resetPassword: {
      title: string;
    };
    settings: {
      heading: string;
      sections: {
        account: {
          heading: string;
          cards: {
            account: {
              heading: string;
              description: string;
            };
            signout: {
              heading: string;
              description: string;
            };
          };
        };
        appearance: {
          heading: string;
          cards: {
            theme: {
              heading: string;
              description: string;
              options: { [K in Theme]: string };
            };
            locale: {
              heading: string;
              description: string;
            };
          };
        };
        about: {
          heading: string;
          cards: {
            app: {
              description: string;
            };
          };
        };
      };
      account: {
        heading: string;
        sections: {
          security: {
            heading: string;
            cards: {
              password: {
                heading: string;
                description: string;
              };
              email: {
                heading: string;
                description: string;
              };
            };
          };
        };
      };
    };
  };
  steps: {
    verification: {
      email: {
        label: string;
        placeholder: string;
        description: string;
        required: string;
        error: string;
        submit: string;
        notExists: string;
      };
      otp: {
        heading: string;
        sent: string;
        resend: string;
        sending: string;
        uncomplete: string;
        incorrect: string;
      };
    };
    resetPassword: {
      email: {
        heading: string;
        back: string;
      };
      password: {
        heading: string;
        paragraph: string;
        form: {
          fields: {
            password: {
              label: string;
              placeholder: string;
              description: string;
              required: string;
              minLength: string;
            };
            confirm: {
              label: string;
              placeholder: string;
              description: string;
              required: string;
              minLength: string;
            };
          };
          errors: {
            mismatch: string;
          };
          submit: string;
          success: string;
        };
      };
    };
  };
  components: {
    sessionExpirationObserver: {
      expired: string;
    };
    avatarEdit: {
      open: string;
      update: string;
      select: string;
      remove: string;
    };
  };
};

export type LocalizedDictionary = i18n.Flatten<DictionaryMap>;
export type LocalizedTranslator = i18n.ChainedTranslator<LocalizedDictionary, string>;
