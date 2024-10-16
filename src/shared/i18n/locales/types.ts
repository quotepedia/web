import type { Theme } from "~/shared/theme";

export type DictionaryMap = {
  routes: {
    404: {
      title: string;
      heading: string;
      description: string;
      home: string;
    };
    login: {
      title: string;
      heading: string;
      description: string;
      form: {
        fields: {
          email: {
            label: string;
            placeholder: string;
            description: string;
            required: string;
            invalid: string;
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
      home: string;
      settings: string;
      register: string;
    };
    register: {
      title: string;
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
              feedback: {
                heading: string;
                description: string;
              };
              contribute: {
                heading: string;
                description: string;
              };
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
                update: string;
              };
              email: {
                heading: string;
                description: string;
                update: string;
              };
              signout: {
                heading: string;
                description: string;
              };
            };
          };
        };
      };
    };
  };
  components: {
    forms: {
      email: {
        label: string;
        description: string;
        placeholder: string;
        required: string;
        invalid: string;
        registered: string;
        unregistered: string;
        submit: string;
      };
      otp: {
        heading: string;
        sent: string;
        resend: string;
        sending: string;
        minLength: string;
      };
      password: {
        newPassword1: {
          label: string;
          description: string;
          placeholder: string;
          required: string;
          minLength: string;
        };
        newPassword2: {
          label: string;
          description: string;
          placeholder: string;
          required: string;
          minLength: string;
        };
        mismatch: string;
        submit: string;
      };
    };
    registration: {
      steps: {
        email: {
          heading: string;
          description: string;
          home: string;
          settings: string;
          login: string;
        };
        password: {
          heading: string;
          description: string;
        };
      };
    };
    resetPassword: {
      steps: {
        email: {
          heading: string;
          description: string;
          login: string;
        };
        password: {
          heading: string;
          description: string;
        };
      };
    };
    changePassword: {
      steps: {
        password: {
          heading: string;
          description: string;
        };
        done: {
          heading: string;
          description: string;
          purpose: string;
          editable: string;
          close: string;
        };
      };
    };
    changeEmail: {
      steps: {
        email: {
          heading: string;
          description: string;
        };
        done: {
          heading: string;
          description: string;
          purpose: string;
          editable: string;
          close: string;
        };
      };
    };
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
