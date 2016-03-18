import sjcl from "../../lib/sjcl";

// "dummy" shared secret for now.
const key = 'shared secret';
const bitKey = sjcl.codec.utf8String.toBits(key);
const hmac = new sjcl.misc.hmac(bitKey);

// string -> hexString
// Computes hmac for provided string
export const createHmac = (data) => {

  const bitSignature = hmac.encrypt(data);
  return sjcl.codec.hex.fromBits(bitSignature);

};

// {} -> hexString
export const  hmacLoc = (loc) => createHmac(`${loc.latitude}${loc.longitude}`);
