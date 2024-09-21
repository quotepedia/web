import { type DictionaryMap } from "~/lib/i18n";

export const dict: DictionaryMap = {
  routes: {
    404: {
      title: "Page not found",
      heading: "This page does not exist",
      paragraph: "Sorry, we couldn't find the page you're looking for.",
      back: "Take me home",
    },
    login: {
      title: "Sign in",
      heading: "Log in to your account",
      paragraph: "We're happy to see you again! Enter credentials in order to access your account:",
      form: {
        fields: {
          email: {
            label: "Email",
            placeholder: "Enter your email address…",
            description: "Use an organization email to easily collaborate with teammates.",
            required: "Please enter your email.",
            error: "The email address is badly formatted.",
          },
          password: {
            label: "Password",
            placeholder: "Enter your password…",
            description: "Passwords are encrypted.",
            forgot: "Forgot your password?",
            required: "Please enter your password.",
            minLength: "Your password must have 8 characters or more.",
          },
        },
        submit: "Log in",
      },
      footer: "Don't have an account? ",
      signup: "Sign up for free",
    },
    resetPassword: {
      title: "Reset password",
    },
    settings: {
      heading: "Settings",
      sections: {
        account: {
          heading: "Account",
          cards: {
            account: {
              heading: "Personal",
              description: "Avatar, email address and password, account management.",
            },
            signout: {
              heading: "Logout",
              description: "Logout from this account on this device.",
            },
          },
        },
        about: {
          heading: "About",
          cards: {
            app: {
              description: "© 2024. All rights reserved.",
            },
          },
        },
        appearance: {
          heading: "Appearance",
          cards: {
            theme: {
              heading: "Theme",
              description: "Change the color scheme across the application.",
              options: {
                light: "Light",
                dark: "Dark",
                night: "Night",
                system: "System",
              },
            },
            locale: {
              heading: "Language",
              description: "Change the language used in the user interface.",
            },
          },
        },
      },
      account: {
        heading: "Account",
        sections: {
          security: {
            heading: "Security",
            cards: {
              email: {
                heading: "Email address",
                description: "The address that receive notifications and used to log in and recover account access.",
              },
              password: {
                heading: "Password",
                description: "Permanent password used to log in your account.",
              },
            },
          },
        },
      },
    },
  },
  steps: {
    resetPassword: {
      email: {
        heading: "Password Recovery",
        back: "Back to login form",
      },
      password: {
        heading: "Change Password",
        paragraph: "You are setting a new password for ",
        form: {
          fields: {
            password: {
              label: "New password",
              placeholder: "Enter your new password…",
              description: "Regularly update your passwords for added security.",
              required: "Please enter your new password.",
              minLength: "Your new password must be at least {{ length }} characters long.",
            },
            confirm: {
              label: "Confirm new password",
              placeholder: "Re-enter your new password…",
              description: "Make sure both entered passwords match.",
              required: "Please re-enter your new password.",
              minLength: "The confirmation password must be at least {{ length }} characters long.",
            },
          },
          errors: {
            mismatch: "The entered passwords don't match!",
          },
          submit: "Update my password",
          success: "Password changed successfully.",
        },
      },
    },
    verification: {
      email: {
        label: "Email",
        placeholder: "Enter your email address…",
        description:
          "Enter the email address associated with your account and we'll send you a message with further instructions.",
        required: "We need your email address to send you a verification code.",
        error: "The email address is badly formatted.",
        submit: "Send verification code",
        notExists: "There is no user with this email address!",
      },
      otp: {
        heading: "Verification",
        sent: "We’ve sent an e-mail with verification code to your inbox: ",
        resend: "Re-send code",
        sending: "We’re sending an e-mail with verification code to your inbox: ",
        uncomplete: "Please enter the code completely.",
        incorrect: "The code you entered is incorrect!",
      },
    },
  },
  components: {
    sessionExpirationObserver: {
      expired: "Your session has expired!",
    },
    avatarEdit: {
      open: "Open original",
      update: "Update",
      select: "Select new avatar",
      remove: "Remove this avatar",
    },
  },
};

export default dict;
