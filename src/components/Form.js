import React ,{useState} from 'react';


export default function Form(props) {

    const [news ,setNews]=useState({
        title:"",
        article:"",
        category:"",
        source:"",
        K1:"",
        K2:"",
        K3:"",
        K4:"",
        K5:""
    });
    const [isSubmit ,setSubmit]=useState(true);
    //const [img,SetImage]=useState();
    let name,value,file;
    const handleInputs = (e)=>{
        name=e.target.name;
        value=e.target.value;

        setNews({...news,[name]:value});
    }
    const handleImage=(e)=>{
        console.log(e.target.files);
        file=e.target.files[0];
        // let img = new Image();
        // img.src = window.URL.createObjectURL(file);
        // img.onload = () => {
        //     if(img.width!==1280 || img.height!==720){
        //         props.showAlert("Image size is not correct!","danger");
        //         //fstatus=false;
        //         //alert("Image is not correct");
        //     }
        //     else{
        //         props.showAlert("Image size is good!","success");
        //         //fstatus=true;
        //     }
    }   
    const finalCall=async (e)=>{ 
            let formdata=new FormData();
            formdata.append('discription',news.title);
            console.log(news.title);
            formdata.append('article',news.article);
            console.log(news.article);
            formdata.append('news',file);
            formdata.append('category',news.category);
            console.log(news.category);
            formdata.append('source',news.source);
            console.log(news.source);
            formdata.append('K1',news.K1);
            console.log(news.K1);
            formdata.append('K2',news.K2);
            console.log(news.K2);
            formdata.append('K3',news.K3);
            console.log(news.K3);
            formdata.append('K4',news.K4);
            console.log(news.K4);
            formdata.append('K5',news.K5);
            console.log(news.K5);
            const url="https://enews-api.herokuapp.com/api/news-route"
            await fetch(url, {
                method: 'POST',
                body: formdata,
                })
                .then((response) => response.json())
                .then((result) => {
                    setSubmit(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            //setSubmit(false);
    }
    
  return(
    isSubmit? 
    <>
    <form>
    <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" name="title" value={news.title} onChange={handleInputs}/>
    </div>
    
    <div className="form-group">
        <label htmlFor="article">Article</label>
        <textarea className="form-control" id="article" rows="3" name="article" value={news.article} onChange={handleInputs}></textarea>
    </div>

    <div className="form-group">
        <label htmlFor="category">Category</label>
        <input type="text" className="form-control" id="category" name="category" value={news.category} onChange={handleInputs}/>
    </div>

    <div className="form-group">
        <label htmlFor="keyword">Source</label>
        <input type="text" className="form-control" id="source" name="source" value={news.source} onChange={handleInputs}/>
    </div>

    <div className="card" style={{"marginTop":"20px"}}>
        <div className="card-body">
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Image</label>
                <input type="file" className="form-control-file" id="image" onChange={handleImage}/>
            </div>     
        </div>
    </div>

    <div className="form-group">
        <label htmlFor="keyword">Keywords</label>
        <input type="text" className="form-control" id="K1" name="K1" value={news.K1} onChange={handleInputs}/>
    </div>

    <div className="form-group">
        <label htmlFor="keyword">Keywords</label>
        <input type="text" className="form-control" id="K2" name="K2" value={news.K2} onChange={handleInputs}/>
    </div>

    <div className="form-group">
        <label htmlFor="Keyword">Keywords</label>
        <input type="text" className="form-control" id="K3" name="K3" value={news.K3} onChange={handleInputs}/>
    </div>

    <div className="form-group">
        <label htmlFor="Keyword">Keywords</label>
        <input type="text" className="form-control" id="K4" name="K4" value={news.K4} onChange={handleInputs}/>
    </div>

    <div className="form-group">
        <label htmlFor="Keyword">Keywords</label>
        <input type="text" className="form-control" id="K5" name="K5" value={news.K5} onChange={handleInputs}/>
    </div>

</form>
<div className="text-center">
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={finalCall} style={{'marginTop':"10px"}}>Submit!</button>
</div>


</>:<>
    <div className="jumbotron text-center">
    <h1 className="display-3">Your news added successfully!</h1>
    <p className="lead"><strong>Please check your database</strong> for further changes</p>
    <hr/>
    {/* <p>
        Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
    </p> */}
    <p className="lead">
        <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
    </p>
    </div>
</>


)
}
