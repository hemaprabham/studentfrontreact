import axios from 'axios'
import React, { useState } from 'react'
import Addheader from './Addheader'


const Searchstudent = () => {
    const [inputfield,Changeinputfield]=useState(
        {
            
            "admno":""
        
        }
        
        )
        const [result,ChangeResult]=useState([]
            )
        
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                
                    axios.post("http://127.0.0.1:8000/search/",inputfield).then(
                        (response)=>{
                            ChangeResult(response.data)
                        }
                    )
                    
               

        }

    return (
        <div>
    <Addheader/>
    <div class="container">
     <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                    <div class="row g-3">
                        <div class="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="input-label">Admno</label>
                                <input type="text" className="form-control" name='admno' value={inputfield.admno} onChange={inputhandler} />
                        </div>
                        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readvalue}className="btn btn-warning">Search</button>
                        </div>
                        
                    </div>

            </div>
            

        </div>
        <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                        <table class="table table-striped">
                                        <thead>
                                        <tr>
                                        <th scope="col">Admission no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll no.</th>
                                        <th scope="col">College</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                            {result.map((value,index)=>{
                                return <tr>
                                            <th scope="row">{value.admno}</th>
                                            <td>{value.name}</td>
                                            <td>{value.rollno}</td>
                                            <td>{value.college}</td>
                                            </tr>

})}
                                            </tbody>
                                            </table>
                                
                                
                                    </div> 
                            
                            
                         
                            </div>
                            
                        </div>
                    </div>
                 
        
            
        </div>
    
    
        </div>
      )
    }


export default Searchstudent