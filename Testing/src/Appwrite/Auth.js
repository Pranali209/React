import { Client, Account, ID } from "appwrite";
import  Conf  from  '../Config/config';

// to not expose the code  into the component  we make use of class 
export class AuthService {
    client = new Client()
    account
    // rather then directly creating an account we use consucttor bcoz we want to create  a account 
    // only wen an  AuthService is accessed by its object
    constructor() {
        this.client
            .setEndpoint(Conf.APPWRITE_ENDPOINT )
            .setProject(Conf.PROJECT_ID );
        this.account = new Account(this.client);
            
    }




    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.Login({ email, password })
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async Login({ email,password }) {
        try {
            return  await this.account.createEmailSession(email, password)
         
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null
    }

    async LogOut() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}
const authservice = new AuthService();



// as we are directly exporting a class to access the method of the class we always have to create a object 
// of that class to avoid we export the class object itself.
export default authservice