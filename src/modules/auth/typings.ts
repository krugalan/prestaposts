export type LoginPayload = {
  email: string;
  password: string;
};

export interface SignupForm {
  displayName: string;
  email: string;
  password: string;
}

export interface UpdateProfileDisplayNamePayload {
  firstName: string;
  lastName: string;
}

export type LoginResponse = {
  token: string;
  error?: ErrorResponse;
};

export type ErrorResponse = {
  code: number;
  message: string;
};
