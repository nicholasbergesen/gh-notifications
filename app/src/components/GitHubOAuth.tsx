import { useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { Auth } from "../services/Auth"

function GitHubOAuth() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [code, setCode] = useState<string>(
        searchParams.get("code") ?? ""
    );

    if (code !== "") {
        Auth.setCode(code)
        return <Navigate to="/" replace={true} />
    }
    
    return <Navigate to="/error" replace={true} />
}

export default GitHubOAuth