import { UpdatePasswordStepper } from "~/components/update-password";
import { protect } from "~/utils/router";

export default protect(() => {
  return <UpdatePasswordStepper />;
});
