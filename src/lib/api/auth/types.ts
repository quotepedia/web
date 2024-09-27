export type LoginForm = {
  email: string;
  password: string;
  redirect: string | undefined;
};

export type RegisterForm = {
  email: string;
  password: string;
  otp: number;
};
