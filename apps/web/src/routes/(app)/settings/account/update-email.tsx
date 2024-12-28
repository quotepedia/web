import { UpdateEmailStepper } from "~/features/update-email";
import { protect } from "~/shared/router";

export default protect(() => {
  return <UpdateEmailStepper />;
});
