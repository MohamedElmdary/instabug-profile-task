export class NavLink {
  constructor(
    public name: string,
    public fragment: string = null,
    public route: string = '/'
  ) {}
}
