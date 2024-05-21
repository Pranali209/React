import { Client, Account, ID, Databases, Query } from 'appwrite';
import Config from './Config';

export class Auth {
    client = new Client()
    account
    database

    constructor() {
        this.client
            .setEndpoint(Config.appwrite)
            .setProject(Config.PROJECT_ID);
        this.account = new Account(this.client);
        this.database = new Databases(this.client)
    }

    async GetMessage() {
       
        try {
            const response = await this.database.listDocuments(
                Config.DATABASE_ID,
                Config.COLLECTION_ID,
              
              
            )
          console.log(response , "list documents");
            return response
        }
        catch (error) {
            console.log("Appwrite servier GetMessage error", error);
            return false
        }

    }

    async CreateMessage(payload) {
        try {
           
            const response = await this.database.createDocument(
                Config.DATABASE_ID,
                Config.COLLECTION_ID,
                ID.unique(),
                payload
            )
            return response
        } catch (error) {
            console.log("Appwrite servier CreateMessage error", error);
            return false
        }
    }

    async DeleteMessage(message_id){
        try {
            const res = await this.database.deleteDocument(
                Config.DATABASE_ID,
                Config.COLLECTION_ID,
                message_id
            )
            return res
        } catch (error) {
            console.log("Appwrite service DeleteMessage error", error);
            return false
        }
    }

    async Subscribing(){
        try {
            this.client.subscribe(`database.${Config.DATABASE_ID}.collections.${Config.COLLECTION_ID}.documents`, response => {
                 console.log('realTime',response);
             
            });
        } catch (error) {
            console.log("Appwrite service Subscribing error", error);
        }
    }
}
const auth = new Auth()

export default auth


