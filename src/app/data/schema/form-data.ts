// Forgot password form.
export interface Email {
  email: string;
}

interface Password {
  password: string;
}

interface ConfirmPassword {
  confirmPassword: string;
}
// This is used for:
// Login form data;
// API login request body;
// API signup request body.
export type Credentials = Email & Password;

// Sign-up form. Turn to Credentials when submitting to API.
export type SignUp = Email & Password & ConfirmPassword;

// Password resetting form.
export type PwResetForm = Password & ConfirmPassword;

// Resetting password request body.
export type ResettingPassword = Password & {
  token: string;
};

export interface Team {
  name: string;
  invoiceTitle: string;
}
