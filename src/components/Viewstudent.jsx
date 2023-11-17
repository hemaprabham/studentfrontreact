import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'


const Viewstudent = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/").then(
            (response)=>{
                ChangeData(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                        <table class="table table-striped">
                                        <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Admission no.</th>
                                        <th scope="col">Roll no.</th>
                                        <th scope="col">College</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                            {data.map((value,index)=>{
                                return <tr>
                                            <th scope="row">{value.rollno}</th>
                                            <td>{value.name}</td>
                                            <td>{value.admno}</td>
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
export default Viewstudent