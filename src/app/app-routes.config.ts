interface BaseRoutes {
  dashboard: string;
  login: string;
  register: string;
  settings: string;
  bookEdit: string;
  bookAdd: string;
}

export const baseRoutes: BaseRoutes = {
  dashboard: '',
  login: 'login',
  register: 'register',
  settings: 'settings',
  bookEdit: 'book/edit/:id',
  bookAdd: 'book/add',
};
