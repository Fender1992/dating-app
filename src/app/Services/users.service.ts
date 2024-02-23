import { HttpClient } from '@angular/common/http';
import { CreateUserComponent } from '../homepage/create-user/create-user.component';

export class UserService {
  usersDatabase = [
    {
      name: 'Lois Griffin',
      age: 34,
      profilePhoto: 'assets/profilePhotos/loisG.png',
    },
    {
      name: 'Peter Griffin',
      age: 44,
      profilePhoto: 'assets/profilePhotos/PeterG.png',
    },
    {
      name: 'Chris Griffin',
      age: 14,
      profilePhoto: '',
    },
  ];
}
