class SignInPage {
  usernameField() {
    return cy.get('#login-username');
  }

  passwordField() {
    return cy.get('#password-input');
  }
}

export default SignInPage;
