export interface IGithubAccessToken {
    access_token: string
    scope: string
    token_type: string
}

export class Auth {
    private static OAUTH_ACCESS_URL = process.env.NODE_ENV === "production" 
            ? "https://github.com/login/oauth/authorize?client_id=acba20c02c0651aec5f0&scope=notifications&redirect_uri=https://nicholasbergesen.github.io/gh-notifications/"
            : "https://github.com/login/oauth/authorize?client_id=acba20c02c0651aec5f0&scope=notifications&redirect_uri=http://127.0.0.1:3000/gh-notifications/"
    private static CLIEND_ID = process.env.REACT_APP_CLIENT_ID || "acba20c02c0651aec5f0"
    private static SECRET = process.env.REACT_APP_CLIENT_SECRET || "5759960a3199f0d2014559a294418f0004865ebb"
    private static githubAccessToken: IGithubAccessToken
    private static code: string
    public static IsAuthenitcated: boolean

    //https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
    static getGitHubAccessToken = async (): Promise<string> => {
        if (this.githubAccessToken) {
            return `${this.githubAccessToken.token_type} ${this.githubAccessToken.access_token}`
        }

        this.githubAccessToken = {
            access_token: process.env.REACT_APP_SECRET_TEST || "",
            scope: "",
            token_type: "bearer"
        }

        // if (!this.code) {
        //     console.log("Requesting code")
        //     window.location.href = this.OAUTH_ACCESS_URL
        // }

        // console.log(`Requesting access_token for ${this.code}`)
        // const response = await fetch("https://github.com/login/oauth/access_token", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         client_id: this.CLIEND_ID,
        //         client_secret: this.SECRET,
        //         code: this.code
        //     })
        // })

        // if (!response.ok) {
        //     console.error(await response.text())
        // }

        // this.githubAccessToken = await response.json()
        return `${this.githubAccessToken.token_type} ${this.githubAccessToken.access_token}`
    }

    static setCode(code: string) {
        this.code = code
        console.log(`Set code ${this.code}`)
    }

    static getCode() {
        console.log(`Displaying code ${this.code}`)
        return this.code
    }
}