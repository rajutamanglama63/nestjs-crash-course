import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [{username: "Raju", email: "raju@fusemachine.com", posts: []}, {username: "Anisha", email: "anisha@fusemachine.com", posts: []}]
    }

    // This whole method looks quite old, as same as express
    // So, let's refactor it.

    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log("response from client: ", request.body)
    //     response.send("Hey, it's responding!")
    // }


    // Lets do it in more like nestJs way
    @Post()
    createUser(@Body() userData: CreateUserDto) {
        console.log("res from client: ", userData)
        return userData
    }

    @Get("posts")
    getposts() {
        return [{auther: "Raju", title: "Encoded", content: "This is blog post"}, {auther: "Shandy", title: "Decoded", content: "This is blog post"}]
    }
}
