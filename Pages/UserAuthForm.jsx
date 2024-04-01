import { Link } from "react-router-dom"
import { Toaster,toast } from "react-hot-toast"
import InputBox from "../src/components/InputBox"
import AnimationWrapper from "../src/components/AnimationWrapper"
import '../src/styles/userAuthForm.css'

const UserAuthForm = ({type}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    let form = new FormData(formElement);
    let formData = {};

    for(let[key, value] of form.entries()){
        formData[key] = value;
    } 

    let{fullname,email, password} = formData;

    if(fullname){

        if(fullname.length < 3){
            return toast.error("Full-name must be > 3");
        }
    }
    if(!email.length){
        return toast.error("Enter Email");
    }
    if(!emailRegex.test(email)){
        return toast.error("Email Invalid!");
    }
    if(!passwordRegex.test(password)){
        return toast.error("6 to 20 char long, with numeric, 1 lowercase, 1 uppercase");
    }

    console.log(formData)
}

  return (
    <AnimationWrapper keyValue={type}> 
        <section className='h-cover flex items-center justify-center py-4 px-[5vw] md:px-[7vw] lg:px-[10vw] '>
            <Toaster/>
            <form id="formElement" className="w-11/12 max-w-lg">
                <h1 className="mb-2 text-center text-[2rem] capitalize">
                    {type == "sign-in"? "Welcome Back": "Join us today"}
                </h1>
                {
                    type != "sign-in"? <InputBox name="fullname" type="text" placeholder="fullname" icon="fi-rr-user"/>:""
                }
                <InputBox name="email" type="email" placeholder="Email" icon="fi-rr-envelope"/>
                <InputBox name="password" type="password" placeholder="Password" icon="fi-rr-lock"/>
                <button className='whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14' type="submit" 
                    onClick={handleSubmit}
                >
                    {type.replace("-","")}
                </button>
                {
                    type == "sign-in"? 
                    <p className='mt-6 text-dark-grey text-xl text-center'>Don't have and account?
                        <Link to="/signup" className="underline text-black text-xl ml-1">
                            join us today.
                        </Link>
                    </p>
                    :
                    <p className='mt-6 text-dark-grey text-xl text-center'>already have an account?
                        <Link to="/login" className="underline text-black text-xl ml-1">
                            Sign in here.
                        </Link>
                    </p>
                    
                }

            </form>
        </section>
    </AnimationWrapper> 

  )
}

export default UserAuthForm
