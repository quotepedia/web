import type { DictionaryMap } from "./types";

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
          },
        },
        about: {
          heading: "About",
          cards: {
            app: {
              description: "All rights reserved.",
              feedback: {
                heading: "Feedback",
                description: "Report bugs and other issues.",
              },
              contribute: {
                heading: "Contribute",
                description: "Explore application’s source code.",
              },
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
                description: "The address used to log in and recover account access.",
                update: "Change email address",
              },
              password: {
                heading: "Password",
                description: "Permanent password used to log in your account.",
                update: "Change password",
              },
              signout: {
                heading: "Logout",
                description: "Logout from this account on this device.",
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
    changePassword: {
      steps: {
        password: {
          heading: "Enter new password",
          description: "Enter password for your account which will be used to log in.",
        },
        done: {
          heading: "Password changed!",
          description: "You have successfully changed permanent password for your current account.",
          purpose: "Now it will be used to log into your account and verify your identity.",
          editable: "You can always change it again later.",
          close: "Done",
        },
      },
    },
    changeEmail: {
      steps: {
        email: {
          heading: "Enter new email",
          description: "The address that can be used to log in and recover account access.",
        },
        done: {
          heading: "Email changed!",
          description: "You have successfully changed and verified the email address for your current account.",
          purpose: "Now it will receive security notifications and can be used to log in and recover account access.",
          editable: "You can always change it again later.",
          close: "Done",
        },
      },
    },
    sessionExpirationObserver: {
      expired: "Your session has expired!",
    },
    avatarEdit: {
      update: "Update",
      dropdown: {
        open: "Open original",
        select: "Select new avatar",
        remove: "Remove this avatar…",
      },
      confirm: {
        title: "Remove avatar",
        description: "Do you really want to remove this avatar? This action cannot be undone.",
        close: "Cancel",
        remove: "Remove",
      },
    },
    
  },
};

export default dict;
