import { TestBed } from '@angular/core/testing';

import { FuncionarioService } from './FuncionarioService';

describe('FuncionarioService', () => {
  let service: FuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
