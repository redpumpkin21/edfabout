import {Link} from "react-router-dom"
import { useState } from "react"
import Person from "./person"

const People = () => {
          
    return(
        <div>
            <div>
                <h4>Our People</h4>
                <p>We bring the right people together to solve environmental challenges 
                    from many different angles. Meet some of the experts who represent 
                    key parts of our work.</p>
            </div>

            <div>
                <Person />
            </div>
               
                <div>
                    <ul>
                        <li>Our Board</li>
                        <li>Exdcutive Team</li>
                        <li>Work With us</li>
                    </ul>
                </div>
               
            
            
        </div>
        
    )
}

export default People