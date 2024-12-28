import { UpdatePasswordStepper } from "~/features/update-password";
import { protect } from "~/shared/router";

export default protect(() => {
  return <UpdatePasswordStepper />;
});
