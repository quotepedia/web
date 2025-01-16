import { UpdateEmailStepper } from "~/components/update-email";
import { protect } from "~/hoc/session";

export default protect(() => {
  return <UpdateEmailStepper />;
});
