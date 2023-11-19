import { useState, useEffect } from "react"
import hideLoaderSubject from "../../../services/loader.service";
function PreLoaderComponent() {
    const [active, setActive]=useState('active');
    useEffect(()=>{
        hideLoaderSubject.subscribe((value)=>{
          if(value) {
            hidePreloader();
          }  
        });
    },[]);
    const hidePreloader = () => {
        window.setTimeout(()=>{
            setActive('');
        },500);
    }
    return (
        <div className={`${active} ai-preloader`}>
            <div className="ai-preloader-inner h-100 d-flex align-items-center justify-content-center">
                <div className="ai-child ai-bounce1" />
                <div className="ai-child ai-bounce2" />
                <div className="ai-child ai-bounce3" />
            </div>
        </div>
    )
}

export default PreLoaderComponent