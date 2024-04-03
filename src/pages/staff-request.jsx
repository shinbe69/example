import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/staff-request/view';

// ----------------------------------------------------------------------

export default function StaffRequest() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
