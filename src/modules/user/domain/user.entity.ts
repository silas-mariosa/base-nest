export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    private password: string,
  ) {}

  setPassword(hashedPassword: string) {
    this.password = hashedPassword;
  }

  getPassword(): string {
    return this.password;
  }
}
