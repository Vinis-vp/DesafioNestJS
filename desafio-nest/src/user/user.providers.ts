import { User } from './user.model';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];