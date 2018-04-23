const expect = require('chai').expect
const greeting = require('..').default


describe('#greeting', function(){
  it('Saludo en cstellano', function(){
    const saludo = greeting('es')
    expect(saludo).to.equal("Hola!")
  })
  it('Saludo en ingles', function(){
    const saludo = greeting('en')
    expect(saludo).to.equal("Hello!")
  })
  it('Saludo en frances', function(){
    const saludo = greeting('fre')
    expect(saludo).to.equal("Salut!")
  })
})
