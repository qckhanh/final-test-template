import {Request, Response, NextFunction } from 'express';
import {HttpResponse} from "../helpers/HttpResponse";
import {UserService} from "../service/user.service";

export class UserController {

    static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await UserService.getAllUsers();
            HttpResponse.sendYES(res, 200, 'All users fetched', result);
        } catch (err) {
            next(err);
        }
    }
}
