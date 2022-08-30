import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//import { Button } from "@walmart/styleguide";

function Car() {
  /*<!--
    <Button onClick={toggleLoggedIn}>
  {isLoggedIn ? "Log out" : "Log in"}
</Button>
  */

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return <div class="container">

<BrowserRouter>
<Link to="/seguridad/usuario/0" >
          Ir a usuario
</Link>
</BrowserRouter>
  <div class="card">
      <div class="card-header">
          Personas
      </div> <br/>
    

      <div class="card-body">
          <div class="table-responsive">
              
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ana </td>
                    <td>Lopez</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Pedro</td>
                    <td>Garcia</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Andres</td>
                    <td>Zepeda</td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>
    </div>

</div>
;
}

export default Car;