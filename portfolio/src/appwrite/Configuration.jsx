import config from '../config'
import { Client, Databases } from 'appwrite'

export class Service {
    client = new Client()
    databases

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createPost({slug, views}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,    
                slug,  //document id
                {
                   views,
                } 
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
            alert("Appwrite Service :: createPost :: error", error);
            
        }
    }

    async updateView(id, views){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id,
                {
                    views
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updateView :: error", error);
        }
    }

    async getCount(id){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id
            
            )
        } catch (error) {
            console.log("Appwrite Service :: getCount :: error", error);
            return false
        }
    }
}
 
const service = new Service()
export default service 