import App from '@/App';
import Laboratory from '@/pages/laboratory';
import Tasks from '@/pages/Tasks';
import Users from '@/pages/Users';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([{
  path: "/",
  // element: <App/>
  Component: App,
  children: [
    {
      index: true,
      // path:"/users",
      Component: Users
    },
    {
      path: "/users",
      Component: Users
    }, {
      path: "/tasks",
      Component: Tasks
    }, {
      path: "/lab",
      Component: Laboratory
    }]
}])
export default router;