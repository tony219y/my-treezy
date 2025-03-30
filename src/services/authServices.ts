import wretch from "wretch";
import { toast } from "sonner";

//User login
export const userLogin = async(email: string, password: string) =>{
    const response = await wretch("/api/auth/login")
      .post({ email, password })
      .badRequest((error) => {
        toast.error(JSON.parse(error.message).message);
      })
      .unauthorized((error) => {
        toast.error(JSON.parse(error.message).message);
      })
      .notFound((error) => {
        toast.error(JSON.parse(error.message).message);
      })
      .res()

      if(response.ok){
        const token = await response.json();
        localStorage.setItem('token' , token.token)
        return toast.success("Welcome back!")
      }

}


//User register
export const userRegister = async(fullname : string, username: string, email:string, password: string, confirmPassword: string)=>{

    const response = await wretch('/api/auth/register')
    .post({
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
    .badRequest((error)=>{
      toast.error(JSON.parse(error.message).message)
    })
    .unauthorized((error)=>{
      toast.error(JSON.parse(error.message).message)
    })
    .res()

    if(response.ok) toast.success("User created! Welcome to my garden.")

}


//Get token
export const getToken = () =>{
    return localStorage.getItem('token');
}
