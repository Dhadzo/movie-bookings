import React from 'react';
import { useHistory } from 'react-router-dom';
import './welcome.styles.scss'

const WelcomePage: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <div className="welcome">
      <div className="intro">
        Welcome to our movie booking app.
        Sign up to get started.
      </div>
      <button onClick={() => {
        history.push('/register')
      }} className="signup-btn">Get started</button>
      
    </div>
  );
}
export default WelcomePage