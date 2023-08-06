import React from "react";
import Head from "./head";
import axios from "axios";

function App()
{      
          const [items,setItems]=React.useState([ ]);
        const [inp,setInp]=React.useState({
                nam:"",
                home:"",
                email:"",
                born:"",
                int:"",
                teacher:"",
                dream:"",
                visit:"",
                strength:"",
                life:"",
                name:"",
                mem:"",
                date:""
        });
        async function getItems(){
               const res = await axios.get("http://localhost:3000/getItems")
              
               setItems(prev =>{
                return [...prev,...res.data];
               })
        }
        React.useEffect(()=>{ 
                
                (getItems());
             
        },[])
        function handleChange(event)
        { 
                const {name,value}=event.target;
            
                setInp(prev =>{
                 return {
                        ...prev,
                        [name]:value
                }
                });
                    
        }

        async function handleButton()
        {     
           const obj=object();
            setItems(prev => {
              return [...prev,obj];
            })
            try{
                console.log("input value",inp);
              await axios.post("http://localhost:3000/add",inp);
            }catch(err){
                console.log(err);
            }
            
        }
        function object()
        {   
            const val=inp;
            setInp({ name:"",
            home:"",
            email:"",
            born:"",
            int:"",
            teacher:"",
            dream:"",
            visit:"",
            strength:"",
            life:"",
            nam:"",
            mem:"",
            date:""});
        
            return val;
        }

    return <div>
                <Head/>
                <center>
                        <div className="note" >
                        <input placeholder="I am known for" name="nam" key={1} onChange={handleChange} value={inp.nam}/>
                        <input placeholder="My Sweet home" name="home" key={11} onChange={handleChange} value={inp.home}/>
                        <input placeholder="Email " name="email" key={12} onChange={handleChange} value={inp.email}/>
                        <input placeholder="First Cry " name="born" key={10} onChange={handleChange} value={inp.born}/>
                        <input placeholder="Fascinating about " name="int" key={2} onChange={handleChange} value={inp.int}/>
                        <input placeholder="Teacher I like most" name="teacher" key={3} onChange={handleChange} value={inp.teacher}/>
                        <input placeholder="My Biggest dreams" name="dream" key={4} onChange={handleChange} value={inp.dream}/>
                        <input placeholder="I Would love to visit " name="visit" key={5} onChange={handleChange} value={inp.visit}/>
                        <input placeholder="My Hobbies" name="strength" key={6} onChange={handleChange} value={inp.strength}/>
                        <input placeholder="life is beautiful because " name="life" key={7} onChange={handleChange} value={inp.life}/>
                
                        <input placeholder="My Name" name="name" key={9} onChange={handleChange} value={inp.name}/>
                        <input placeholder="Most Memorable moments" name="mem" key={19} onChange={handleChange} value={inp.mem}/>
                        <input placeholder="Date " name="date" key={100} onChange={handleChange} value={inp.date}/>

                        <button onClick={handleButton}>ADD</button>
                
                        </div>
                </center>
                {
                        items &&  <div style={{float:"left"}}> {
                                items.map(item =>{
                                   return <div className="note2">
                                       
                                        <p>{item.name}</p>
                                        <p>{item.home}</p>
                                        <p>{item.email}</p>
                                        <p>{item.born}</p>
                                        <p>{item.int}</p>
                                        <p>{item.teacher}</p>
                                        <p>{item.dream}</p>
                                        <p>{item.visit}</p>
                                        <p>{item.strength}</p>
                                        <p>{item.life}</p>
                                        <p>{item.nam}</p>
                                        <p>{item.date}</p>
                                  </div>
                        })}
                        </div>
                }
          </div>
}

export default App;