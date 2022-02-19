import React, {useState, useEffect} from 'react';

import './Styles.css';

import Logo from '../../Img/Logo.png';

import X from '../../Img/X.png';
import O from '../../Img/O.png';

import Restart from '../../Img/Restart.png'

import xs from '../../Img/X-Small.png'
import os from '../../Img/O-Small.png'

const data = [

  { id: 1001, XO: '', activated: false, win: '' },
  { id: 1002, XO: '', activated: false, win: '' },
  { id: 1003, XO: '', activated: false, win: '' },
  { id: 1004, XO: '', activated: false, win: '' },
  { id: 1005, XO: '', activated: false, win: '' },
  { id: 1006, XO: '', activated: false, win: '' },
  { id: 1007, XO: '', activated: false, win: '' },
  { id: 1008, XO: '', activated: false, win: '' },
  { id: 1009, XO: '', activated: false, win: '' },

]

function GamePage(props) {

  const [score, setScore] = useState(data)

  const [winer, setWiner] = useState(1)
  const [XO, setXO] = useState(X);
  const [XOs, setXOs] = useState(xs);
  const [alerta, setAlerta] = useState(false);
  const [restart, setRestart] = useState(false);

  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);
  const [ties, setTies] = useState(0);

  const SetXorO = currentId => {

    setScore(existingItems => {
      const itemIndex = existingItems.findIndex(item => item.id === currentId)

        
        return [

          ...existingItems.slice(0, itemIndex),
          {
            // spread all the other items in the object and update only the score
            ...existingItems[itemIndex],
            XO: existingItems[itemIndex].XO = XO, // adicionar X ou O
            activated: existingItems[itemIndex].activated = true,
            win: existingItems[itemIndex].win = winer,
          },
          ...existingItems.slice(itemIndex + 1),
            
        ]
        
      })

    if(XO === X){
      setXO(O)
      setWiner(2)
      setXOs(os)
    }

    if(XO === O){
      setXO(X)
      setWiner(1)
      setXOs(xs)
    }

  }

  useEffect(() => {
    Reset();
    setXScore(0);
    setOScore(0);
    setTies(0);
    setXO(X);
    setXOs(xs);
    setWiner(1);
    setRestart(false);
  },[]);

  useEffect(() => {
    //X winer
    function HandleX (){

      if(
        (score[3].win == 1 && score[4].win == 1 && score[5].win == 1) || 
        (score[0].win == 1 && score[1].win == 1 && score[2].win == 1) ||
        (score[6].win == 1 && score[7].win == 1 && score[8].win == 1) ||
        (score[0].win == 1 && score[3].win == 1 && score[6].win == 1) ||
        (score[1].win == 1 && score[4].win == 1 && score[7].win == 1) ||
        (score[2].win == 1 && score[5].win == 1 && score[8].win == 1) ||
        (score[0].win == 1 && score[4].win == 1 && score[8].win == 1) ||
        (score[6].win == 1 && score[4].win == 1 && score[2].win == 1)
        ){

          setAlerta(true)
          setXO(X)
          setXScore(XScore + 1)
          Reset();

      }

    }

    HandleX ();

    //O winer
    function HandleO (){

      if(
        (score[3].win == 2 && score[4].win == 2 && score[5].win == 2) || 
        (score[0].win == 2 && score[1].win == 2 && score[2].win == 2) ||
        (score[6].win == 2 && score[7].win == 2 && score[8].win == 2) ||
        (score[0].win == 2 && score[3].win == 2 && score[6].win == 2) ||
        (score[1].win == 2 && score[4].win == 2 && score[7].win == 2) ||
        (score[2].win == 2 && score[5].win == 2 && score[8].win == 2) ||
        (score[0].win == 2 && score[4].win == 2 && score[8].win == 2) ||
        (score[6].win == 2 && score[4].win == 2 && score[2].win == 2)
        ){

          setAlerta(true)
          setXO(O)
          setOScore(OScore + 1)
          Reset();
        
      }

    }

    HandleO ();

    function HandleTie () {
      if(
        score[0].win != '' && score[1].win != '' && score[2].win != '' && 
        score[3].win != '' && score[4].win != '' && score[5].win != '' &&
        score[6].win != '' && score[7].win != '' && score[8].win != ''
      ){
        // setAlerta(true)
        setTies(ties + 1)
        Reset();
        setXO(X);
        setXOs(xs);
      }
    }

    HandleTie ();

  });

  function Reset (){
    setScore([
      { id: 1001, XO: '', activated: false, win: '' },
      { id: 1002, XO: '', activated: false, win: '' },
      { id: 1003, XO: '', activated: false, win: '' },
      { id: 1004, XO: '', activated: false, win: '' },
      { id: 1005, XO: '', activated: false, win: '' },
      { id: 1006, XO: '', activated: false, win: '' },
      { id: 1007, XO: '', activated: false, win: '' },
      { id: 1008, XO: '', activated: false, win: '' },
      { id: 1009, XO: '', activated: false, win: '' },
    ]);
    setWiner(1);
  }

  function Next (){
    setAlerta(false)
    setXO(X);
  }

  function ResetAll (){
    Reset();
    setXScore(0);
    setOScore(0);
    setTies(0);
    setXO(X);
    setXOs(xs);
    setWiner(1);
    setRestart(false);
  }

  function Quit (){
    Reset();
    setXScore(0);
    setOScore(0);
    setTies(0);
    setXO(X);
    setXOs(xs);
    setWiner(1);
    setRestart(false);
    props.setSeletor(true);
  }

  return (
    <div className='Main'>

        <div className='Top'>
            <img src={Logo} className='Logo'/>
            <div className='Turn'>
                <img src={XOs}/>
                <p>TURN</p>
            </div>
            <div className='Restart' onClick={()=> setRestart(true)}>
              <img src={Restart} />
            </div>
        </div>

        <div className='BodyGame'>
          {score.map(item => {
          return (
            <div key={item.id}>
              <button className='Bloc' onClick={() => SetXorO(item.id)} disabled={item.activated}>
                <img src={item.XO}/>
              </button>
              
            </div>
          )
        })}
        </div>

        <div className='Bottom'>
          <div className='Player01'>
            <p1>X (YOU)</p1>
            <p2>{XScore}</p2>
          </div>
          <div className='Tie'>
            <p1>TIES</p1>
            <p2>{ties}</p2>
          </div>
          <div className='Player02'>
            <p1>O (CPU)</p1>
            <p2>{OScore}</p2>
          </div>
        </div> 
        
        { alerta === true && 
        <div className='BackGround'>
          <div className='AlertDiv'>
            
            <p>YOU WON !</p>

            <div className='Winner'>
              <img src={XO}/>

              <p2> TAKES THE ROUND</p2>
            </div>

            <div>
              <button className='ButQuit' onClick={Quit}>
                QUIT
              </button>
              <button className='ButNext' onClick={Next}>
                NEXT ROUND
              </button>
            </div>
            
          </div>  
        </div> 
        }

        { restart === true &&
          <div className='BackGround'>
            <div className='AlertDiv'>

              <p1> RESTART GAME ? </p1>

              <div>
                <button className='ButCancel' onClick={()=> setRestart(false)}>
                NO, CANCEL
                </button>
                <button className='ButRest' onClick={ResetAll}>
                YES, RESTART
                </button>
              </div>
              
            </div>  
          </div> 
        }
        
    </div>

  );
}

export default GamePage;