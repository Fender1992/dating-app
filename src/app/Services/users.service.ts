import { HttpClient } from '@angular/common/http';
import { CreateUserComponent } from '../homepage/create-user/create-user.component';

export class UserService {
  usersDatabase = [
    {
      name: 'Lois Griffin',
      age: 34,
      profilePhoto: 'src/assets/profilePhotos/loisG.png',
    },
    {
      name: 'Peter Griffin',
      age: 44,
      profilePhoto: 'src/app/matches-page/images/female.jpg',
    },
    {
      name: 'Chris Griffin',
      age: 14,
      profilePhoto: '',
    },
  ];
}
