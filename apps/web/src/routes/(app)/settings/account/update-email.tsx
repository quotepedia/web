import { UpdateEmailStepper } from "~/features/update-email";
import { protect } from "~/shared/utils/router";

export default protect(() => {
  return <UpdateEmailStepper />;
});
