import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
            }).catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline ">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;