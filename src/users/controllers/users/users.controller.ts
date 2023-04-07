import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [{username: "Raju", email: "raju@fusemachine.com", posts: []}, {username: "Anisha", email: "anisha@fusemachine.com", posts: []}]
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log("response from client: ", request.body)
        response.send("Hey, it's responding!")
    }

    @Get("posts")
    getposts() {
        return [{auther: "Raju", title: "Encoded", content: "This is blog post"}, {auther: "Shandy", title: "Decoded", content: "This is blog post"}]
    }
}
