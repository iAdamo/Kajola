import { Request, Response } from 'express';
import dbClient from '../config/database';
import User from '../models/userModel';

// GET /api/status
export default class AppController {
  static getStatus(req: Request, res: Response) {
    res.status(200).send({ "Server": "ON", db: dbClient.isAlive() });
  }

  // GET /api/stats Gets the api stats
  static async getStats(req: Request, res: Response) {
    const usersCount = await User.countDocuments();
    const buyersCount = await User.countDocuments({ userType: 'Buyer' });
    const sellersCount = await User.countDocuments({ userType: 'Seller' });
    const verifiedUsersCount = await User.countDocuments({ isVerified: true });
    const nonVerifiedUsersCount = await User.countDocuments({ isVerified: false });

    res.status(200).send({
      "Total Users": usersCount,
      "Buyers": buyersCount,
      "Sellers": sellersCount,
      "Verified Users": verifiedUsersCount,
      "Non-Verified Users": nonVerifiedUsersCount
    });
  }
}
