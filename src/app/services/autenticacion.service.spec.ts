import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('debería autenticarse con éxito', () => {
    const service: AutenticacionService = TestBed.get(AutenticacionService);
    const result = service.login('JN', '123456');
    expect(result).toBe(true);
  });

  it('no debería autenticarse con credenciales inválidas', () => {
    const service: AutenticacionService = TestBed.get(AutenticacionService);
    const result = service.login('usuario incorrecto', 'contraseña incorrecta');
    expect(result).toBe(false);
  });

});
