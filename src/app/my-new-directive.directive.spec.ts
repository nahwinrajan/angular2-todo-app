/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MyNewDirective } from './my-new-directive.directive';

describe('MyNewDirective Directive', () => {
  it('should create an instance', () => {
    let directive = new MyNewDirective();
    expect(directive).toBeTruthy();
  });
});
