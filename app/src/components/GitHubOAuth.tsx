import { useSearchParams, Navigate } from "react-router-dom";
import { Auth } from "../services/Auth"

function GitHubOAuth() {
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const code: string = searchParams.get("code") ?? ""

    if (code !== "") {
        Auth.setCode(code)
        return <Navigate to="/" replace={true} />
    }
    
    return <Navigate to="/error" replace={true} />
}

export default GitHubOAuth