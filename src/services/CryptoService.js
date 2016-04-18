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
const { 
  codec: { utf8String: { toBits }, hex: { fromBits } }, 
  misc: { hmac } 
} = sjcl;

import { findKey, flow, toPairs, unzip } from 'lodash';

export const keyStore = {};
keyStore.me = toBits('shared secret');
keyStore.key1 = toBits('key1');
keyStore.key2 = toBits('key2');

const hash = (key, text) => fromBits(new hmac(key).encrypt(text));

export const getKey = (id) => keyStore[id];

// bitArray (key), string, {} -> string (stringified json)
export const encrypt = (key, text, options = {}) => sjcl.encrypt(key, text, options);

// bityArray (key), string (ct, stringified json) -> string
export const decrypt = (key, ct) => sjcl.decrypt(key, ct);

// Signs the provided data. 
// Takes a key and data, concatenates the vals and stores the keys (in order).
// bitArray (key), obj -> obj
export const sign = (key, data) => {
  const [fields, values] = flow(toPairs, unzip)(data);
  
  return {
      ...data,
    sig: {
      fields: fields,
      hmac: hash(key, values.join(''))
    }
  };
};

// obj -> str
export const verify = (message) => {
  const joinedVals = message.sig.fields.map(field => message[field]).join('');
  const keyId = findKey(keyStore, (key) => (hash(key, joinedVals) === message.sig.hmac));
  return keyId || '';
};
