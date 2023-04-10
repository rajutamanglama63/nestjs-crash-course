import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
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
    // for validation purpose we have to use certain decorators
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log("res from client: ", userData)
        return userData
    }

    // express way of params handling in nest

    // @Get("/:id")
    // getUserById(@Req() request: Request, @Res() response: Response) {
    //     console.log("params: ", request.params)
    //     response.send("It's working")
    // }

    // Now let's handle it in nestjs way
    @Get("/:id")
    // By default nestjs assumes everything in url as string
    // To convert number string like id from url, we can use parser pipe of nestjs
    getUserById(@Param("id", ParseIntPipe) id: number) {
        console.log("id: ", id)
        return {id}
    }

    // doing stuffs with query parameter
    // we can use query parameter for different stuffs like filtering, searching etc
    @Get()
    // we can validate query parameter too
    getFilteredUser(@Query("sortBy", ParseBoolPipe) sortBy: boolean) {
        console.log("sort by: ", sortBy)
        return {msg: "It helps in sorting as per query parameter"}
    }

    @Get("posts")
    getposts() {
        return [{auther: "Raju", title: "Encoded", content: "This is blog post"}, {auther: "Shandy", title: "Decoded", content: "This is blog post"}]
    }
}
