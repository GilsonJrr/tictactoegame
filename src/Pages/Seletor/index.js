import React, {useState, useEffect} from 'react';

import './Styles.css';

import Logo from '../../Img/Logo.png';

import XBlue from '../../Img/X-Blue.png';
import OBlue from '../../Img/O-Blue.png';

import XGrey from '../../Img/X-Grey.png';
import OGrey from '../../Img/O-Grey.png';

function Seletor(props) {

  const [xSelected, setXSelected] = useState (true)
  const [OSelected, setOSelected] = useState (false)

function Selection () {

    if(xSelected == true ){
        setXSelected(false)
    }
    if(xSelected == false ){
        setXSelected(true)
    }

    if(OSelected == true ){
        setOSelected(false)
    }
    if(OSelected == false ){
        setOSelected(true)
    }

}

  return (
    <div className="Main">

        <img src={Logo} className='Logo'/>

        <div className='SelectCard'>
            <p>PICK PLAYER 1’S MARK</p>
            <div className='SelectSymbol'>
                
                {xSelected ?
                    <button className='ButXActive'>
                        <img src={XBlue}/>
                    </button> :
                    <button className='ButXDeactivated' onClick={Selection}>
                        <img src={XGrey}/>
                    </button>
                }
                
                {OSelected ?
                    <button className='ButOActive'>
                        <img src={OBlue}/>
                    </button> :
                    <button className='ButODeactivated' onClick={Selection}>
                        <img src={OGrey}/>
                    </button>
                }   

            </div>
            <p>REMEMBER  X GOES FIRST</p>
        </div>

        <div className='NewGameCPU' onClick={()=> props.setSeletor(false)}>
            <p>NEW GAME (VS CPU)</p>
        </div>

        <div className='NewGamePLAYER'>
            <p>NEW GAME (VS PLAYER)</p>
        </div>

    </div>
  );
}

export default Seletor;
