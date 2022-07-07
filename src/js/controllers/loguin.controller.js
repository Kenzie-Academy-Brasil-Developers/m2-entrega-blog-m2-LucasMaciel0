export default class LoguinRequest {
    static base_url = "https://blog-m2.herokuapp.com/users/login"
    
    static async loguin (loguinData){
        return await fetch(this.base_url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(loguinData)
        })
        .then(res => res.json())
        .then((res)=>{
            localStorage.setItem("@kenzie-blog:user",JSON.stringify(res.userId))
            localStorage.setItem("@kenzie-blog:token",JSON.stringify(res.token))
            return res
        })
        .catch(err => console.log(err))
    }
}