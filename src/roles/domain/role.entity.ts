export class Role {
  id: string;
  name: string;
  created_at: Date;

  constructor(partial: Partial<Role>) {
    Object.assign(this, partial);
  }
}
