import { Role } from '../../roles/domain/role.entity';

export class User {
  id: string;
  name: string;
  email: string;
  telephone?: string;
  document?: string;
  pix?: string;
  password?: string;
  refreshToken?: string;
  roles?: Role[];
  created_at?: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
