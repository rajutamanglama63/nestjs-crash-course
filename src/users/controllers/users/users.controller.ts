import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
        this.userService
    }

    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers()
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
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log("res from client: ", userData.age.toPrecision())

        return this.userService.createUser(userData)
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
        
        return this.userService.fetchUserById(id)
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
