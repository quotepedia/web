import { createAsync, useLocation, useNavigate, useSearchParams } from "@solidjs/router";
import { createEffect, createRenderEffect } from "solid-js";
import { getIsLoggedIn } from "./cache";

/**
 * Redirects to the login page if the current user is not logged in and tries to access the specified {@link pathname}.
 *
 * @param pathname - The path that requires the user to be logged in.
 * @param redirect - The path to redirect if user is not logged in.
 */
export const createEnsureLoggedIn = (pathname: string, redirect: string = `/login?redirect=${pathname}`) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

  createEffect(() => {
    if (isLoggedIn() === false && location.pathname === pathname) {
      navigate(redirect, { replace: true });
    }
  });
};

/**
 * Redirects to the home page if the current user is logged in and tries to access the specified {@link pathname}.
 *
 * @param pathname - The path that requires the user to be logged out.
 * @param redirect - The path to redirect if user is not logged out.
 */
export const createEnsureLoggedOut = (pathname: string, redirect: string = "/") => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

  // NOTE: `createRenderEffect` here is important to ensure that screen doesn't flash.
  createRenderEffect(() => {
    if (isLoggedIn() === true && location.pathname === pathname) {
      if (searchParams.redirect?.startsWith("/")) {
        navigate(searchParams.redirect, { replace: true });
      } else {
        navigate(redirect, { replace: true });
      }
    }
  });
};
