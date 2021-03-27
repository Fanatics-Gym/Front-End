import React from 'react'


const PickGear = () => {
    return <div> <div>
        <h1>Pick Gear</h1>
    </div>
        <div>                
            <h3>Helmet</h3>
            <span>
                <input type='radio' name='helmet' value='M' />
                <label for='M'>M</label>
                <input type='radio' name='helmet' value='L' />
                <label for='L'>L</label>
                <input type='radio' name='helmet' value='XL'/>
                <label for='XL'>XL</label>
            </span>
        </div>
        <div>
            <h3>Shoulder Pads</h3>
            <span>                
                <input type='radio' name='Shoulder' value='M' />
                <label for='M'>M</label>
                <input type='radio' name='Shoulder' value='L' />
                <label for='L'>L</label>
                <input type='radio' name='Shoulder' value='XL'/>
                <label for='XL'>XL</label>
            </span>
        </div>
        <div>
            <h3>Jeresy</h3>
            <span>                
                <input type='radio' name='Jeresy' value='M' />
                <label for='M'>M</label>
                <input type='radio' name='Jeresy' value='L' />
                <label for='L'>L</label>
                <input type='radio' name='Jeresy' value='XL'/>
                <label for='XL'>XL</label>
            </span>
        </div>
        
    </div>
}


export default PickGear;