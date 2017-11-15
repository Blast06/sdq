'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
function isCedula$1(e) {
  return (
    'string' == typeof e &&
    (11 === (e = e.replace(/[^\d]/g, '')).length &&
      (exceptions.indexOf(e) > -1 || luhn(e)))
  )
}
function isRnc$1() {}
var luhn = _interopDefault(require('luhn-alg')),
  exceptions = [
    '00000000018',
    '11111111123',
    '00100759932',
    '00105606543',
    '00114272360',
    '00200123640',
    '00200409772',
    '00800106971',
    '01200004166',
    '01400074875',
    '01400000282',
    '03103749672',
    '03200066940',
    '03800032522',
    '03900192284',
    '04900026260',
    '05900072869',
    '07700009346',
    '00114532330',
    '03121982479',
    '40200700675',
    '40200639953',
    '00121581750',
    '00119161853',
    '22321581834',
    '00121581800',
    '09421581768',
    '22721581818',
    '90001200901',
    '00301200901',
    '40200452735',
    '40200401324',
    '10621581792'
  ],
  SDQ = { isCedula: isCedula$1, isRnc: isRnc$1 }
module.exports = SDQ
//# sourceMappingURL=sdq.js.map
