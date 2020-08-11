import { NextFunction, Request, Response } from 'express';

class UserController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.send().status(200);
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
