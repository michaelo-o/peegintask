import netlifyIdentity from 'netlify-identity-widget'
import Navbar from '../pages/components/Navbar'
import { createContext, useState, useEffect } from 'react'


const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false //keeps track of when we load up our app, takes time to identify if they are ligged in or not
})
// //Provider-provides context to app

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [authReady, setAuthReady] = useState(false)
    //when refreshing the page, for a fraction of a second, it is unkown if we are logged in, this is to make it wait for the login/authentication status before displaying the login/logout button

    useEffect(() => {
        // to change the value of user and change it by listeneing for a login event so we know we are logged in
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close() //closes the modal after login
            console.log('login event')
        }) //listens for anyuser signing up or logging in and provides us with the user when they do

        netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('logout event')

        })

        netlifyIdentity.on('init', (user) => { //event listener to listen for initialisation event and set Auth ready state to true if we are logged in
            setUser(user)
            setAuthReady(true)
            console.log('init event')
        })

        // initialise? netlify identity connection
        netlifyIdentity.init()


        //the return statement that makes sure that we dont have multiple event listners when the component is rendered to the DOM 

        //must be the last thing in the useEffect so it happens at the end
        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logiut')
        }

    }, [])

    const login = () => {
        netlifyIdentity.open() //when you click login, display the login/signup modal
    }
    const logout = () => {
        netlifyIdentity.logout() //when you click logout, log the user out immediately
    }


    const context = { user, login, logout, authReady } //context to be acessed from all pages



    return (
        <AuthContext.Provider value={context}>
            {/* Wraps our entire application cus it needs to wrap the components it wants to provide data to, so we can acess th value from a different page */}
            {children}
            {/* Children are basicall all the things on our page */}
        </AuthContext.Provider>
    )
}

export default AuthContext
