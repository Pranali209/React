import Conf from '../Config/config'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases
    bucket;

    constructor() {
        this.client.setEndpoint(Conf.APPWRITE_ENDPOINT)
        this.client.setProject(Conf.PROJECT_ID)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async CreatePost({ title, slug, content, featuredImage, status, userId }) {
          console.log(userId , " userid in service");
        
        try {
            return await this.databases.createDocument(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: CreatePost :: error", error);
        }
    }

    async UpdatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
          
        } catch (error) {
            console.log("Appwrite serive :: UpdatePost :: error", error);
           
        }
    }

    async DeletePost(slug) {
        try {
            await this.databases.deleteDocument(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: DeletePost :: error", error);
            return false

        }
    }

    async GetPost(slug) {
        try {
            return await this.databases.getDocument(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                slug
            )

        } catch (error) {
            console.log("Appwrite serive :: GetPost :: error", error);
            return false
        }

    }
    async GetAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            const allpost =  await this.databases.listDocuments(
                Conf.DATABASE_ID,
                Conf.COLLECTION_ID,
                queries
            ) 
           
            return allpost;

        } catch (error) {
            console.log("Appwrite serive :: GetAllPosts :: error", error);
            return false
        }
    }

    /// file upload services
    async UploadFile(file) {
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

    async DeleteFile(fileId) {
        try {
          await this.bucket.deleteFile(
                Conf.BUCKET_ID,
                fileId
            )
          return true
        } catch (error) {
            onsole.log("Appwrite serive :: DeleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            Conf.BUCKET_ID,
            fileId
        )
    }
}
const service = new Service()
export default service