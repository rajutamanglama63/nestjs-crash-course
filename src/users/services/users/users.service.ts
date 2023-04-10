import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {id: 1, username: "Raju", email: "raju@fusemachine.com", posts: []},
        {id: 2, username: "Syldina", email: "syldina@codebeuty.com", posts: []}, 
        {id: 3, username: "Anisha", email: "anisha@fusemachine.com", posts: []},
        {id: 4, username: "Lekha", email: "lekha@lekhaengineer.com", posts: []},
    ]

    fetchUsers () {
        return this.fakeUsers
    }

    createUser (userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails)
        return userDetails;
    }

    fetchUserById (id: number) {
        let allUsers = this.fakeUsers

        let fetchedUser = allUsers.find((user) => user.id === id)

        if(!fetchedUser) {
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST)
        } else {

            return fetchedUser;
        }
    }
}
