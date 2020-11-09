import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

interface protectedRoutesProps extends RouteProps {
    component: React.ComponentType  
}

const ProtectedRoute  = ({component: Component, ...rest}: protectedRoutesProps) => {
    
    const currentUser = useSelector((state:any) => state.user.currentUser);
    
    return (
        <Route 
            {...rest}
            render={() => 
                currentUser ? (
                    <Component /> 
                ): (
                    <Redirect 
                      to="/login"
                    />
                )
             }
        />
    )
}

export default ProtectedRoute;