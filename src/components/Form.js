import React ,{useState} from 'react';



export default function Form(props) {

    const [news ,setNews]=useState({
        title:"",
        article:"",
        category:"",
        source:"",
        k1:"",
        k2:"",
        k3:"",
        k4:"",
        k5:""
    });
    const [isNews ,setNew]=useState(true);
    const [fstatus,setFstatus]=useState(false);
    const [img,SetImage]=useState(null);
    //const [id,setId]=useState(0);
    //const [isKey,setKey]=useState(true);
    let name,value;
    const handleInputs = (e)=>{
        name=e.target.name;
        value=e.target.value;

        setNews({...news,[name]:value});
    }
    const handleImage=(e)=>{
        console.log(e.target.files);
        let img = new Image();
        img.src = window.URL.createObjectURL(e.target.files[0]);
        img.onload = () => {
            if(img.width!==1280 || img.height!==720){
                props.showAlert("Image size is not correct!","danger");
                setFstatus(false);
                alert("Image is not correct");
            }
            else{
                props.showAlert("Image size is good!","success");
                SetImage(e.target.files[0]);
                setFstatus(true);
            }
        }
    }   
    const finalCall=async (e)=>{ 
        if(fstatus){
            //props.check();
            let formdata=new FormData();
            formdata.append('discription',news.title);
            console.log(news.title);
            formdata.append('article',news.article);
            console.log(news.article);
            formdata.append('news',img);
            alert(img);
            formdata.append('category',news.category);
            console.log(news.category);
            formdata.append('source',news.source);
            console.log(news.source);
            const url="https://enews-api.herokuapp.com/api/news-route"
            await fetch(url, {
                method: 'POST',
                body: formdata,
                })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.id);
                    //id=result.id;
                    console.log(result.id);
                    setNew(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            setNew(false);
        }
        else{
            props.showAlert("Button is disabled!","primary");
        }
    }
    // const keyCall=async (e)=>{
    //     //console.log(data);
    //         const url="https://enews-api.herokuapp.com/api/keywords"
    //         await fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify({'id':id,'k1':news.k1,'k2':news.k2,'k3':news.k3,'k4':news.k4,'k5':news.k5}),
    //             })
    //             .then((response) => response.json())
    //             .then((result) => {
    //                 //setKey(false);
    //                 console.log(result);
    //             })
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //             });
    // }
    
  return(
    isNews?
    <>
    <form>
    <div classNameName="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" classNameName="form-control" id="title" name="title" value={news.title} onChange={handleInputs}/>
    </div>
    
    <div classNameName="form-group">
        <label htmlFor="article">Article</label>
        <textarea classNameName="form-control" id="article" rows="3" name="article" value={news.article} onChange={handleInputs}></textarea>
    </div>

    <div classNameName="form-group">
        <label htmlFor="category">Category</label>
        <input type="text" classNameName="form-control" id="category" name="category" value={news.category} onChange={handleInputs}/>
    </div>

    <div classNameName="form-group">
        <label htmlFor="keyword">Source</label>
        <input type="text" classNameName="form-control" id="source" name="source" value={news.source} onChange={handleInputs}/>
    </div>

    <div classNameName="card" style={{"marginTop":"20px"}}>
        <div classNameName="card-body">
            <div classNameName="form-group">
                <label htmlFor="exampleFormControlFile1">Image</label>
                <input type="file" classNameName="form-control-file" id="image" onChange={handleImage}/>
            </div>     
        </div>
    </div>
</form>
<div classNameName="text-center">
    <button type="button" classNameName="btn btn-primary btn-lg btn-block" onClick={finalCall} style={{'marginTop':"10px"}}>Next!</button>
</div>
</>:<>
    <div className="jumbotron text-center">
    <h1 className="display-3">Thank You!</h1>
    <p className="lead"><strong>Please check your Database!</strong></p>
    <hr/>
    <p>
      <br/>
    </p>
    <p className="lead">
      <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
    </p>
  </div>
</>
)
}
