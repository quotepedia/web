import { type DictionaryMap } from "~/lib/i18n";

export const dict: DictionaryMap = {
  routes: {
    404: {
      title: "Page not found",
      heading: "This page does not exist",
      description: "Sorry, we couldn't find the page you're looking for.",
      home: "Take me home",
    },
    login: {
      title: "Sign in",
      heading: "Log in to your account",
      description: "We're happy to see you again! Enter credentials in order to access your account:",
      form: {
        fields: {
          email: {
            label: "Email",
            placeholder: "Enter your email address…",
            description: "Your address is not transferred to third parties.",
            required: "You haven't entered your email address. Please provide it to continue.",
            invalid:
              "The email address you entered isn't in the correct format. Please enter a valid one (e.g. name@example.com).",
          },
          password: {
            label: "Password",
            placeholder: "Enter your password…",
            description: "Passwords are encrypted.",
            forgot: "Forgot your password?",
            required: "You haven't entered your password. Please provide it to continue.",
            minLength: "Your password must be at least {{ length }} characters long.",
          },
        },
        submit: "Login",
      },
      home: "Home",
      settings: "Settings",
      register: "Register",
    },
    register: {
      title: "Registration",
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
  components: {
    forms: {
      email: {
        label: "Email",
        description: "This address is not transferred to third parties.",
        placeholder: "Enter email address…",
        required: "You haven't entered the email address. Please provide it to continue.",
        invalid:
          "The email address you entered isn't in the correct format. Please enter a valid one (e.g. name@example.com).",
        registered: "This email address is already registered. Please try a different one.",
        unregistered: "This email address isn't registered yet. Please enter an existing one.",
        submit: "Continue",
      },
      otp: {
        heading: "Verification",
        sent: "We've sent a message with 6-digit verification code to your inbox:",
        resend: "Re-send code",
        sending: "We're sending a message with 6-digit verification code to your inbox:",
        minLength: "Please enter the code completely.",
      },
      password: {
        newPassword1: {
          label: "New password",
          description: "Regularly update your passwords for added security.",
          placeholder: "Enter your new password…",
          required: "Please enter your new password.",
          minLength: "Your new password must be at least {{ length }} characters long.",
        },
        newPassword2: {
          label: "Confirm new password",
          description: "Make sure both entered passwords match.",
          placeholder: "Re-enter your new password…",
          required: "Please re-enter your new password.",
          minLength: "The confirmation password must be at least {{ length }} characters long.",
        },
        mismatch: "The entered passwords don't match.",
        submit: "Set password",
      },
    },
    registration: {
      steps: {
        email: {
          heading: "Registration",
          description:
            "Enter your email to create an account. A one-time password (OTP) will be sent to this address for verification.",
          home: "Home",
          settings: "Settings",
          login: "Login",
        },
        password: {
          heading: "Set password",
          description: "Enter a password for your new account. You can always change it later.",
        },
      },
    },
    resetPassword: {
      steps: {
        email: {
          heading: "Forgot your password?",
          description:
            "Enter the email address associated with your account and we'll send you a message with further instructions.",
          login: "Go to login form",
        },
        password: {
          heading: "Set new password",
          description: "Enter a new password for your account. You can always change it later.",
        },
      },
    },
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
