/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { UserEntity } from '../entities/user.entity';

/* eslint-disable prettier/prettier */
export class ResponseUserDto {
  id: number;
  name: string;
  salary: number;
  enterprise: number;

  constructor(user: Partial<UserEntity>) {
    this.id = user.id ?? 0;
    this.name = user.name ?? '';
    this.salary = user.salary ?? 0;
    this.enterprise = user.enterprise ?? 0;
  }
}
