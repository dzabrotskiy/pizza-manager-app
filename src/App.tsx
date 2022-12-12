import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '@layouts/Layout';
import { Sider } from '@components/Sider';
import { Header } from '@layouts/Header';
import { FlexRow } from '@components/Flex';
import { NewOrder } from '@pages/NewOrder';
import { Status } from '@pages/Status';
import { Dashboard } from '@pages/Dashboard';

const routes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
  },
  {
    path: '/new',
    element: <NewOrder />,
    title: 'New Order',
  },
  {
    path: '/status',
    element: <Status />,
    title: 'Status',
  },
];

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <Layout>
      <Header />
      <FlexRow>
        <Sider
          selectedItemKey={pathname}
          items={routes.map(route => ({
            key: route.path,
            label: route.title,
          }))}
          onChange={item => {
            if (item.key) {
              navigate(item.key);
            }
          }}
        />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </FlexRow>
    </Layout>
  );
}

export default App;
