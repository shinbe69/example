import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Trang tổng quan',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Phiếu đăng ký nghỉ phép của tôi',
    path: '/my-request',
    icon: icon('ic_user'),
  },
  {
    title: 'Phiếu đăng ký nghỉ phép của nhân viên',
    path: '/staff-request',
    icon: icon('ic_cart'),
  }
];

export default navConfig;
