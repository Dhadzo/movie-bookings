interface userProps{
    username:string,
    id:string
}
export const signInSuccess = (user:userProps) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: user
})
export  const signInToken = (token:string) => ({
    type: 'SIGN_IN_TOKEN',
    payload: token
})

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS',
})

export const addSearchedMovie = (movie:userProps) => ({
    type: 'ADD_SEARCHED_MOVIE',
    payload: movie
})