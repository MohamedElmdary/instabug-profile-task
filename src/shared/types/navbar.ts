export class NavLink {
  constructor(
    public name: string,
    public fragment: string = null,
    public route: string = '/'
  ) {}
}

export const links = [
  new NavLink('home', 'about'),
  new NavLink('projects', 'projects'),
  new NavLink('contacts', 'contacts')
];
