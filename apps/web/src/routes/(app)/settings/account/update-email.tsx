import { UpdateEmailStepper } from "~/components/update-email";
import { protect } from "~/utils/router";

export default protect(() => {
  return <UpdateEmailStepper />;
});
