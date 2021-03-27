import React from 'react'


const PickGear = () => {
    return <div className='pickGearPage'> 
        <div className='pickGearHeader'>
            <h2>Pick Gear</h2>
        </div>
        <div className='pickGearContainer'>
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
        <div>
            <h3>Pants</h3>
            <span>                
                <input type='radio' name='Pants' value='M' />
                <label for='M'>M</label>
                <input type='radio' name='Pants' value='L' />
                <label for='L'>L</label>
                <input type='radio' name='Pants' value='XL'/>
                <label for='XL'>XL</label>
            </span>
        </div>
        <div>
            <h3>Back Plate - Do you want one?</h3>
            <span>
                <input type='radio' name='backPlate' value='Yes' />
                <label for='Yes'>Yes</label>
                <input type='radio' name='backPlate' value='No' />
                <label for='No'>No</label>
            </span>
        </div>
        <div>
            <h3>Pick Up</h3>
        </div>
        </div>
    </div>
}


export default PickGear;