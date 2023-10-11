import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import { LeadRouter } from './src/routers/LeadRouter';
import { CompanyRouter } from './src/routers/CompanyRouter';
import { ContactRouter } from './src/routers/ContactRouter';

class App {

  private server: Express;

  constructor() {
    dotenv.config();
    this.server = express();
    this.init()
    this.listen()
  }

  private init() {
    this.server.use(cors())
    const routers = [new LeadRouter(), new ContactRouter(), new CompanyRouter()]

    for (const router of routers) {
      this.server.use('/api/v1',router.getRouter())
    }
  }

  private listen() {
    const port = process.env.PORT;
    this.server.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  }
}

const app = new App()