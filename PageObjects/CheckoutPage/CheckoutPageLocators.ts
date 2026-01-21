import type { Locator } from 'playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class CheckoutPageLocators extends BaseLocator {
  readonly mrRadioButton: Locator = this.baseLocator.getByRole('radio', { name: ' Mr. ' });
  readonly mrsRadioButton: Locator = this.baseLocator.getByRole('radio', { name: ' Mrs. ' });
  readonly firstNameInput: Locator = this.baseLocator.locator('#field-firstname');
  readonly lastNameInput: Locator = this.baseLocator.locator('#field-lastname');
  readonly emailInput: Locator = this.baseLocator.locator('#field-email');

  readonly companyNameInput: Locator = this.baseLocator.locator('#field-company');
  readonly addressInput: Locator = this.baseLocator.locator('#field-address1');
  readonly addressComplementInput: Locator = this.baseLocator.locator('#field-address2');
  readonly cityInput: Locator = this.baseLocator.locator('#field-city');
  readonly stateInput: Locator = this.baseLocator.locator('#field-id_state');
  readonly postalCodeInput: Locator = this.baseLocator.locator('#field-postcode');
  readonly countryInput: Locator = this.baseLocator.locator('#field-id_country');
  readonly phoneInput: Locator = this.baseLocator.locator('#field-phone');

  readonly deliveryMessageInput: Locator = this.baseLocator.locator('#delivery_message');
  readonly addressForInvoiceCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: 'Use this address for invoice',
  });

  readonly payByBankWireRadio: Locator = this.baseLocator.locator(
    "[data-module-name='ps_wirepayment']"
  );
  readonly payByCheckRadio: Locator = this.baseLocator.locator(
    "[data-module-name='ps_checkpayment']"
  );
  readonly conditionsToApprove: Locator = this.baseLocator.locator(
    '.conditions_to_approve[terms-and-conditions]'
  );

  readonly agreeTermsCheckbox: Locator = this.baseLocator.getByLabel(
    ' I agree to the terms and conditions and the privacy policy '
  );
  readonly continueButton: Locator = this.baseLocator.getByRole('button', { name: 'Continue' });

  readonly placeOrderButton: Locator = this.baseLocator.getByRole('button', {
    name: ' Place order ',
  });
  readonly confirmedOrder: Locator = this.baseLocator.locator('.card-title', {
    hasText: 'Your order is confirmed ',
  });
}
