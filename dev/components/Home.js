import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import './../css/Home.css';

class Home extends React.Component{
    constructor(props) {
    super(props);
    }
    
   render(){

            return (
               <div className="backgroundContainer">
                    <HomeMain/>
                    <HomeContent/>
                    <HomeFooter />
               </div>
          ); 
					
   }
      
   
}

class HomeMain extends React.Component{
    constructor(props) {
    super(props);
    }
    
   render(){
    var divStyle = {
					padding:0,
					width: '100%',
					minHeight: 210,
					background:'url(/output/priscilla-du-preez-293218.jpg)',
					backgroundPosition: 'center bottom',
					backgroundSize: 'cover',
					textAlign: 'center',
					overflow: 'hidden'
					};
	var divStyleOverlay = {
	                padding:0,
					width: '100%',
					minHeight: 210,
					background:'rgba(1,1,1,.5)',
					overflow: 'hidden'
	                };
	var titleStyle = {
					color: 'white',
					fontSize: 80,
					paddingTop: 20,
					margin: 0
					};
	var hrStyle = {
	    width: 700,
	    borderColor: 'white'
	};
	var subtitleStyle = {
					color: 'white',
					fontSize: 20,
					paddingTop: 10,
					margin: 0,
					fontFamily: 'Lucida Console'
                    };
                    var pStyle = {
                        fontFamily: 'Arial',
                        color: '#797979'
                    };
                    var hStyle = {
                        color: '#5C0700',
                        marginBottom:0
                    };
            return (
               <div className='frontContainer'>
               <div className='frontLeftContainer'>
                    <h1>Book Trading Club</h1>
                    <hr/>
                    <p>Trade your used books with other readers</p>
                    <Link to="/signup"><button>Get Started</button></Link>
               </div>
               <div className="frontRightContainer">
               </div>
                </div>
                
          ); 
					
   }
      
   
}
class HomeContent extends React.Component{
    constructor(props) {
    super(props);
    }
    
   render(){
    var pStyle = {
        fontFamily: 'Arial',
        color: '#797979'
    };
    var hStyle = {
        color: '#5C0700',
        marginBottom:0
    };
            return (
                <div className='infoSection'>
                <div className='infoBox'>
                    <h1 className='infoHeader' style={hStyle}>Browse Catalogue</h1>
                    <hr/>
                    <p className='infoText'>Look through the catalogue to see which books our users own and see which ones you would be interested in reading.</p>
                </div>
                <div className='infoBox'>
                    <h1 className='infoHeader' style={hStyle}>Exchange Books</h1>
                    <hr/>
                    <p className='infoText'>Catalogue and submit books that you own that you would be interested in exchanging with the books of other readers.</p>
                </div>
                <div className='infoBox'>
                    <h1 className='infoHeader' style={hStyle}>Personal Homepage</h1>
                    <hr/>
                    <p className='infoText'>Maintain your public profile, confirm or cancel your trades, update your personal catalogue, and connect with other readers.</p>
                </div>
                <div className="infoEmptySpace">
                </div>
           </div>
          ); 
					
   }
      
   
}

class HomeFooter extends React.Component{
    render(){
        return (
            <div className="footer">
                <p>&#169; David Magee</p>
            </div>
        );
    }
}

class ProjectInfo extends React.Component{
    constructor(props) {
    super(props);
    }
    
   render(){
            var divStyle = {
                backgroundColor: 'gray',
                width:'100%',
                minHeight:300,
                textAlign:'center'
                };
            var infoBoxStyle = {
                width:300,
                display:'inline-block',
                margin: '50px 50px 0px 50px',
                verticalAlign: 'top',
                textAlign: 'left',
                padding: '0px 0px 20px 30px',
                borderLeft:'2px solid black'
            };
            var pStyle = {
                fontFamily: 'Arial',
                color: '#E0E0E0'
            };
            var hStyle = {
                color: 'white',
                marginBottom:0
            };
            return (
               <div style={divStyle}>
                    <div style={infoBoxStyle}>
                        <h1 style={hStyle}>Background</h1>
                        <p style={pStyle}>This book trading club app is a</p>
                        <p style={pStyle}>FreeCodeCamp full-stack project</p>
                    </div>
                    <div style={infoBoxStyle}>
                        <h1 style={hStyle}>Technologies</h1>
                        <p style={pStyle}>Front-end: React, React Router, Redux</p>
                        <p style={pStyle}>Back-end: Express.js, Mongoose</p>
                    </div>
                    <div style={infoBoxStyle}>
                        <h1 style={hStyle}>Author</h1>
                        <p style={pStyle}>David Magee is a web developer in</p>
                        <p style={pStyle}>Houston, TX</p>
                    </div>
               </div>
          ); 
					
   }
      
   
}

export default Home