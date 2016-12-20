import { FormGroup } from '@angular/forms';

export function matchingEmails(passwordKey:string,confirmPasswordKey:string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedEmails: true
      }
    }
  }
}
