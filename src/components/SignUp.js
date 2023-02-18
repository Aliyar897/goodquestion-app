import React from 'react'
// import Center from './Center';
import styles from '../style/style.module.css'

export default function SignUp() {
  
    return (
    <div>
        <form  className={styles.signup}>
                <div className="mb-3">
                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

    </div>

  )

}
