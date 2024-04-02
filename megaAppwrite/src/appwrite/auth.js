import conf from '../conf/conf.js';
import {Client, Account , ID} from 'appwrite';

export class AuthService {
  client = new client();
  account;

  constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account = new Account (this.account);
  }

  async createAccount({email,password,name}) {
    try {
       const userAccount = await this.account.create(ID.unique(),email,password,name);
       if (userAccount) {
        return this.login({email,password});
       } else {
        return userAccount;
       }
    } catch (error) {
      throw error;
    }
  }

  async login ({email,password}) {
    try{
     return await this.account.creatEmailSession(ID.unique(),email,password);
     }
     catch (error) {
      throw error;
    }
  }

  async getCurrntUser() {
    try {

    } catch (error) {
       console.log("Appwrite serive :: getCurrentUser :: error",error);

    }
    return null;
  }

  async logout() {
    try{
      await this.account.deleteSession();
    } catch(error) {
      console.log("Apppwrite serive:: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService
