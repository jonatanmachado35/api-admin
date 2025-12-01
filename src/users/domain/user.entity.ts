export class User {
  id: string;
  email: string;
  password?: string;
  refreshToken?: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
