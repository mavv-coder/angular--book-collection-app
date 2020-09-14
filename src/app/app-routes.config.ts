interface BaseRoutes {
  dashboard: string;
  login: string;
  register: string;
  bookEdit: string;
  bookAdd: string;
}

export const baseRoutes: BaseRoutes = {
  dashboard: '',
  login: 'login',
  register: 'register',
  bookEdit: 'book/edit/:id',
  bookAdd: 'book/add',
};
