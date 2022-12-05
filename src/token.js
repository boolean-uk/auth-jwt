const jwt = require("jsonwebtoken");

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken() {
  let token = jwt.sign({ foo: "bar" }, "shhhhh");
  return token;
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry() {
  let token = jwt.sign(
    {
      data: { foo: "bar" },
    },
    "shhhhh",
    { expiresIn: "1h" }
  );
  return token;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token) {
    let decoded = jwt.verify(token, 'shhhhh');
    if (decoded) {
        return decoded
    }
}

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
