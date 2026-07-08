import { useState } from 'react';
import {
  clearAdminAccess,
  grantAdminAccess,
  hasAdminAccess,
} from '../utils/adminAccess';

function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(hasAdminAccess);
  const [passcode, setPasscode] = useState('');
  const [accessError, setAccessError] = useState('');

  const handleAccessSubmit = (event) => {
    event.preventDefault();

    if (!grantAdminAccess(passcode)) {
      setAccessError('Incorrect passcode.');
      return;
    }

    setAccessError('');
    setPasscode('');
    setIsUnlocked(true);
  };

  const handleLogout = () => {
    clearAdminAccess();
    setIsUnlocked(false);
  };

  if (!isUnlocked) {
    return (
      <section className="page-section admin-page">
        <div className="admin-login">
          <p className="section-kicker">Private Access</p>
          <h1>Admin Panel</h1>
          <p>Enter the admin passcode to view private admin access.</p>

          <form onSubmit={handleAccessSubmit}>
            <label>
              Passcode
              <input
                type="password"
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            {accessError && <p className="admin-error">{accessError}</p>}
            <button className="button button-primary" type="submit">Unlock Admin</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section admin-page">
      <div className="admin-login">
        <p className="section-kicker">Admin</p>
        <h1>Admin features coming soon</h1>
        <p>
          Blog post creation and gallery uploads are disabled for now. A backend or CMS
          should be added before enabling production content management.
        </p>
        <button className="admin-logout" type="button" onClick={handleLogout}>
          Lock Admin
        </button>
      </div>
    </section>
  );
}

export default AdminPage;
