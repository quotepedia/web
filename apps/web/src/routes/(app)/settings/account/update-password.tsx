import { UpdatePasswordStepper } from "~/features/update-password";
import { protect } from "~/shared/utils/router";

export default protect(() => {
  return <UpdatePasswordStepper />;
});
