import './style.css';

const forms = ()=>{


    return(
        <div className="forms">

            <form action='/' method="POST">
                  <ul>
                    <h1>Sign in to your workspace</h1>
                  <li>
                    <label for="Username">Username:</label>
                    <input type="text" name="user-name" id="username" required />
                  </li>
                  <li className="inputfild">
                    <label for="password">password:</label>
                    <input type="password" name="password" id="password" required />
                    <p><a href="#">forgot password?</a></p>
                  </li>

                  <li className="bottons">
                  <button type="submit"><a href="#">Sign up</a></button>
                  <button type="submit">Login</button>

                  </li>
                  </ul>
                  
                  


                </form>
        </div>
    )
}

export default forms;