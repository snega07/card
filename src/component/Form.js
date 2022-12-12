import React, { useState } from 'react';
function From(){
    const initialData = Object.freeze({name:'',email:'',phn:'',url:''});
  const [list,setList]= useState([]);
  const [data,changeData]= useState(initialData);
  const handleChange=(e)=>{
    changeData({...data,[e.target.name]:e.target.value.trim()});
  }
  const handleSubmit=(e)=>{
    const newlist = list
    newlist.unshift({name : data.name,email:data.email,phn:data.phn,url:data.url}) 
    setList([...newlist]);
    console.log(list);

  }
  const deleteData=(i)=>{
    alert(i);
    var newlist = list;
    newlist.splice(i,1);
    setList([...newlist]);
    console.log(list);
  }
  
    return(
        <div className="App">
        <div className='box1'>
        <p style={{ fontWeight: 'bold' }}>Card creator</p>
        <label>Name:</label><br />
        <input name='name' onChange={handleChange} /><br />
        <label>Email:</label><br />
        <input name='email' onChange={handleChange} /><br />
        <label>Contact Number:</label><br />
        <input name='phn' onChange={handleChange} /><br />
        <label>Url:</label><br />
        <input name='url' onChange={handleChange} /><br />
        <button onClick={handleSubmit}>Post</button>
      </div>
      <div>
{list.map(
          (info, ind) => {
            return (

              <div className='box2'>
                <div key={ind}
                  style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "powderblue",
                  }}
                >
                  <div style={{ paddingTop: '20px' }}>

                    <img src={info.url} alt='profile' /><br />
                    <div><label>name: {info.name}<br /> </label>
                      <label>email: {info.email}<br /> </label>
                      <label>contact number: {info.phn}<br /> </label>
                    </div>
                    <button onClick={() => deleteData(ind)}>delete</button>

                  </div>
                </div>
              
              </div>

            );
          }
        )}
</div>
      </div>
    );
}
export default From;