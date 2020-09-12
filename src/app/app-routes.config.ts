interface BaseRoutes {
  dashboard: string;
  login: string;
  bookEdit: string;
  bookAdd: string;
}

export const baseRoutes: BaseRoutes = {
  dashboard: '',
  login: 'login',
  bookEdit: 'book/edit/:id',
  bookAdd: 'book/add',
};
