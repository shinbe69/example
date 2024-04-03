import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/my-request/view';

// ----------------------------------------------------------------------

export default function CreateRequest() {
  return (
    <>
      <Helmet>
        <title> Tạo phép mới </title>
      </Helmet>

      <UserView />
    </>
  );
}