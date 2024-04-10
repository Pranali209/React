import  Conf  from '../Config/config'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    Client = new Client()
    databases
    bucket;

    constructor() {
        this.Client.setEndpoint(Conf.APPWRITE_ENDPOINT)
        this.Client.setProject(Conf.PROJECT_ID)
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async CreatePost({ title, slug, content, feauturedImage, status, userId }) {

        try {
            return await this.databases.createDocument(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    feauturedImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: CreatePost :: error", error);
        }
    }

    async UpdatePost(slug, { title, content, feauturedImage, status }) {
        try {
           return await this.databases.updateDocument(
            Conf.DATABASE_ID,
            Conf.COLLECTION_ID,
                slug, {
                title,
                content,
                feauturedImage,
                status
            }
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: UpdatePost :: error", error);
            return false
        }
    }

    async DeletePost(slug) {
        try {
            await this.databases.deleteDocument(
                Conf.DATABASE,
                Conf.COLLECTION_ID,
                slug)
            return true
        } catch (error) {
            console.log("Appwrite serive :: DeletePost :: error", error);
            return false
            
        }
    }

    async GetPost(slug){
        try {
           return await this.databases.getDocument(
            Conf.DATABASE,
            Conf.COLLECTION_ID,
                slug
                )
           
        } catch (error) {
            console.log("Appwrite serive :: GetPost :: error", error);
            return false
        }

    }
    async GetAllPosts (queries = [Query.equal("status", "active")]){
         try {
            return await this.databases.listDocuments(
                Conf.DATABASE, 
                Conf.COLLECTION_ID,
                queries
                )
            
         } catch (error) {
            console.log("Appwrite serive :: GetAllPosts :: error", error);
            return false
         }   
    }

    /// file upload services
    async UploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: UploadFile :: error", error);
            return false
        }
    }

    async DeleteFle(fileId){
       try {
        return await this.bucket.deleteFile(
            Conf.BUCKET_ID,
            fileId
        )

       } catch (error) {
        onsole.log("Appwrite serive :: DeleteFile :: error", error);
            return false
       }
    }

   getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.BUCKET_ID,
            fileId
        )
    }
}