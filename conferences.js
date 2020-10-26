// Todo query backend for conf number and id
module.exports.createConf = async email => {
  const generateInteger = numDigits => {
    return Math.floor(Math.random() * Math.pow(10, numDigits))
  }
  // This phone number doesn't exist. Placeholder.
  const confPhoneNumber = '01 11 22 33 44'
  const confId = generateInteger(6)

  return Promise.resolve({ phoneNumber: confPhoneNumber, id: confId})
}