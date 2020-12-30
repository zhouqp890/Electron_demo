/* eslint-disable */
const ffi = require('ffi')
const path = require('path')


const dllPath = path.resolve(global.mainProcessPath , '../../cloudDylib/libgeneral_restful_sdk.dll')
module.exports = ffi.Library(dllPath, {
  'AstProcess': ['void', ['string', 'pointer', 'pointer']],
  'AstConfig': ['void', ['string', 'pointer']],
  // 'Add': ['double', ['double', 'double', 'pointer']]
})