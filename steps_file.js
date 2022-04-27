// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    
    login(email, password) {
      this.fillField('Email address', email);
      this.fillField('Password', password);
      this.pressKey('Enter')
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
