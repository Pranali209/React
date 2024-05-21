const Config = {
    appwrite: String(import.meta.env.VITE_APPWRITE_URL),
    PROJECT_ID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    DATABASE_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
 }
 
 export default Config