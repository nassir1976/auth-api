'use strict';

module.exports = (capability) => {
console.log(capability)
  return (req, res, next) => {

    try {
      console.log(req.user.capabilities)
      if (req.user.capabilities.includes(capability)) {
        
        next();
        
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  }

}
