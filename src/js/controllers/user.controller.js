export default class UserRequests {
    static base_url = "https://blog-m2.herokuapp.com/users/register"

    static async createUser(createUserData){
       return await fetch(this.base_url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(createUserData)
       }) 
       .then(res => res.json())
       .then(res => res)
       .catch(err => (err))
    }  

    
}