import { ValueOf } from '../@types';

export const RETCODE = <const>{
  SUCCESS: '100',

  'account/unregisteredAccount': '101',
  'account/wrongPassword': '102',
  'account/unregisteredIP': '103',
  'account/lockedAccountWithTime': '106',
  'account/wrongAccessCode': '107',
  'account/expiredLicense': '108',
  'account/usingAccount': '109',
  'account/noLicense': '110',
  'account/lockedAccount': '112',
  'account/concurrentUserCountOver': '114', // 동접자수초과
  'account/dormantAccount': '115', // 휴면계정
  'account/abnormalLogin': '116', // 비정상 동시 에이전트 로그인
  'account/expiredPassword': '122',
  'account/initPassword': '123',

  'license/expired': '208',
  'license/noLicense': '209',
  'license/notExist': '210',

  'server/notConfirm': '211',

  'auth/authorityNotPermitted': '403',
  'auth/notSupportedDevice': '407',

  'connect/exceededMaxSessions': '113',
  'connect/apiRequestExpired': '882',
  'connect/sessionExpired': '883',
  'demoHost/allInUse': '884',

  'currentPassword/notMatched': '885',

  'tempPassword/publicAccount': '881',
  'tempPassword/sameAsPriorPassword': '887',
  'tempPassword/noEmail': '992',
  'tempPassword/notMatched': '997',

  'common/noParameter': '992', // 유효한 파라미터가 없습니다.

  'system/exception': '999',

  browserNotMatched: '5408',

  'access/shortAccessCode': '7001',
  'access/shortPassword': '7002',
  'agent/loadAgentInfoFail': '7003',

  'permission/deniedCameraAccess': '7101',
  'permission/shouldGrantCameraPermission': '7102',
};

export type RetcodeKey = keyof typeof RETCODE;
export type RetcodeValue = ValueOf<typeof RETCODE>;

export const isCsCallingCode = (retcode: string) =>
  retcode === RETCODE['account/noLicense'] ||
  retcode === RETCODE['license/noLicense'] ||
  retcode === RETCODE['license/notExist'] ||
  retcode === RETCODE['license/expired'] ||
  retcode === RETCODE['account/expiredLicense'];

export const isValueOfRetcode = (data: string): data is RetcodeValue => {
  return (Object.values(RETCODE) as string[]).includes(data);
};
