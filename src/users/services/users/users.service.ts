import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {username: "Raju", email: "raju@fusemachine.com", posts: []},
        {username: "Syldina", email: "syldina@codebeuty.com", posts: []}, 
        {username: "Anisha", email: "anisha@fusemachine.com", posts: []},
        {username: "Lekha", email: "lekha@lechaengineer.com", posts: []},
    ]

    fetchUsers () {
        return this.fakeUsers
    }
}
