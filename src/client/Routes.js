import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPages from "./pages/AdminsListPages";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...AdminsListPages,
        path: '/admins'
      },
      {
        ...NotFoundPage,
      }
    ],
  },
];
