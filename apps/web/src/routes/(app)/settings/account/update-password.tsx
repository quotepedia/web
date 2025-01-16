import { UpdatePasswordStepper } from "~/components/update-password";
import { protect } from "~/hoc/session";

export default protect(() => {
  return <UpdatePasswordStepper />;
});
