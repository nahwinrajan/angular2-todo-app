/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MyNewServiceService } from './my-new-service.service';

describe('MyNewService Service', () => {
  beforeEachProviders(() => [MyNewServiceService]);

  it('should ...',
      inject([MyNewServiceService], (service: MyNewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
