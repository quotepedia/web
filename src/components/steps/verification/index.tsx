import { EmailStep } from "./email";
import { OtpStep } from "./otp";
import { useVerification, VerificationProvider } from "./provider";

export const Verifier = Object.assign({}, {
  Provider: VerificationProvider,
  Steps: {
    Email: EmailStep,
    Otp: OtpStep,
  },
  useContext: useVerification,
})
