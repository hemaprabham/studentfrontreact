import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'


const Addstudent = () => {
    const [inputfield,Changeinputfield]=useState(
        {
            
            "name": "",
            "admno":"" ,
            "rollno":"" ,
            "college": ""
            
        
        }
        
        )
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                
                    axios.post("http://127.0.0.1:8000/addall/",inputfield).then(
                        (response)=>{
                            alert(response.data.status)
                        }
                    )
                    
               

        }

  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                        <div className="row g-3" >
                        <div class="card">
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label-control">name</label>
                                <input type="text" className="form-control" name='name' value={inputfield.name} onChange={inputhandler} />                            
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label-control">admno</label>
                                <input type="text" className="form-control" name='admno' value={inputfield.admno} onChange={inputhandler} />                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">rollno</label>
                                <input type="text" className="form-control" name='rollno' value={inputfield.rollno} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">college</label>
                                <input type="text" className="form-control" name='college' value={inputfield.college} onChange={inputhandler} />
                            </div>
                            
                            
                            
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <button  onClick={readvalue}className="btn btn-warning">Add student</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}


export default Addstudent