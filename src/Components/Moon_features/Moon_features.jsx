import React from 'react'
import "./Moon_features.css"

function Moon_features() {
  return (
    <div className='py-4'>
      <div className="container">
        <div className="features_head">
            <h1 className='features_heading'>Features</h1>
        </div>



        <div className="row">
            <div className="col-md-3">
                <div className="d-flex">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:'1.75em',height:'1.75em'}}  fill="currentColor" className="bi bi-laptop text-muted flex-shrink-0 me-3" viewBox="0 0 16 16">
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"></path>
        </svg>
                    </div>
                    <div>
                        <h4 className='fw-bold text-start'>No coding required</h4>
                        <p className='text-start'>
            You don't need to be a developer or have any programming knowledge
            :)
          </p>
                    </div>
                </div>
         

            </div>
            <div className="col-md-3">
                <div className="d-flex">
                    <div>
                    <svg className="bi text-muted flex-shrink-0 me-3" style={{width:'1.75em',height:'1.75em'}} viewBox="0 0 16 16">
          <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
                    </div>
                    <div>
                        <h4 className='fw-bold text-start'>Make money</h4>
                        <p className='text-start'>
                        Potential to make millions of dollar with your own tokens!
          </p>
                    </div>
                </div>
         

            </div>
            <div className="col-md-3">
                <div className="d-flex">
                    <div>
                    <svg className="bi text-muted flex-shrink-0 me-3" style={{width:'1.75em',height:'1.75em'}} viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"></path>
        </svg>
                    </div>
                    <div>
                        <h4 className='fw-bold text-start'>Be proud</h4>
                        <p className='text-start'>
                        Share your tokens with your family, friends and the world


          </p>
                    </div>
                </div>
         

            </div>
            <div className="col-md-3">
                <div className="d-flex">
                    <div>
                    <svg className="bi text-muted flex-shrink-0 me-3" style={{width:'1.75em',height:'1.75em'}} viewBox="0 0 16 16">
          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path>
          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
        </svg>
                    </div>
                    <div>
                        <h4 className='fw-bold text-start'>Safe</h4>
                        <p className='text-start'>
                        No questions asked refund if you don't receive your tokens
          </p>
                    </div>
                </div>
         

            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Moon_features
