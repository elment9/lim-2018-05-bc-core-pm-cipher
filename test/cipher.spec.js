describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "3456789012" para "0123456789" con offset 33', () => {
      assert.equal(cipher.encode(33,'0123456789'), '3456789012');
    });

    it('debería retornar "(" para "%" con offset 33', () => {
      assert.equal(cipher.encode(33,'%'), '(');
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.encode(33,' '), ' ');
    });

    it('debería retornar "é" para "é" con offset 33', () => {
      assert.equal(cipher.encode(33,'é'), 'é');
    });  
  
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "0123456789" para "3456789012" con offest 33', () => {
      assert.equal(cipher.decode(33,'3456789012'), '0123456789');
    });

    it('debería retornar "%" para "(" con offest 33', () => {
      assert.equal(cipher.decode(33,'('), '%');
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.decode(33,' '), ' ');
    });

    it('debería retornar "é" para "é" con offset 33', () => {
      assert.equal(cipher.decode(33,'é'), 'é');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.property({cipher.createCipherWithOffse.encode:{string}}, 'string');
    });

  });

});
