import React from 'react'

export default function About(props) {
    
    
    // const [myStyle, setMyStyle] =useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid white'
    //    })
       
    let myStyle={

      color: props.mode==="dark"?'white':'rgb(29 26 26)',
      backgroundColor: props.mode==='dark'?'rgb(29 26 26)':'white'
    }
  

  return (
    <>

    <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button 
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyse your text quickly and efficiently.Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item"style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample" 
          >
            <div className="accordion-body"style={myStyle}>
              Textutils is free character counter tool that provides instant character count & word count,character count for a text. Textutils reports the number of words and characters.Thus it is sutable for writing text with word/charater limit.
            </div>
          </div>
        </div>
        <div className="accordion-item"style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    
  );
}
