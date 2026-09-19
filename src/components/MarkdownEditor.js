import React, { useEffect, useState } from 'react'
import '../styles/App.css'
const MarkdownEditor = () => {
    let [text,setText]=useState('');
    let [preview,setPreview]=useState('');
    let getdata=(e)=>{
         setText(e.target.value);
    }
    useEffect(()=>{
        setPreview(text);
    },[text])
    
  return (
    <div>
    <div className='markdown'>
            <div className="input-section">
             <textarea value={text} onChange={getdata}/>
            </div>
        <div className="preview-section">
        {preview}
        </div>
    </div>
    </div>
  )
}

export default MarkdownEditor