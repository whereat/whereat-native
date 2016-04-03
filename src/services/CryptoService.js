/**
 *
 * Copyright (c) 2016-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 *
 */

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

// string, object -> string
export const encrypt = (text, options = {}) => sjcl.encrypt(bitKey, text, options);

// string -> string
export const decrypt = (ct) => sjcl.decrypt(bitKey, ct);
