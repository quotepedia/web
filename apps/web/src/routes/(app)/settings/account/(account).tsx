import { Button, Container, Heading, NavigationBar } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/shared/i18n";
import { protect } from "~/shared/router";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/settings";

export default protect(() => {
  const t = useScopedTranslator("settings");

  return (
    <div class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/settings" style="ghost" leadingIcon="f7:chevron-left">
            {t("title")}
          </Button>
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("account.heading")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing />
      </NavigationBar>
      <Container size="wide" class="flex flex-col space-y-6 max-lg:grow">
        <AccountInfoSection />
        <AccountSecuritySection />
      </Container>
    </div>
  );
});
