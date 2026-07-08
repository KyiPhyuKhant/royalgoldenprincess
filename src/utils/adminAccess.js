const ADMIN_SESSION_KEY = 'rgp_admin_access';
const ADMIN_PASSCODE = 'royalgoldenprincess';

export function hasAdminAccess() {
  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'granted';
}

export function grantAdminAccess(passcode) {
  if (passcode !== ADMIN_PASSCODE) {
    return false;
  }

  window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'granted');
  return true;
}

export function clearAdminAccess() {
  window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
