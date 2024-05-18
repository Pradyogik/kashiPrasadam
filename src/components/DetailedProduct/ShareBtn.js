import React from "react";
import { FacebookIcon, FacebookShareButton , WhatsappShareButton, WhatsappIcon , TwitterShareButton , 
    TwitterIcon
 } from "react-share";


function ShareBtn(){

    let shareUrl = 'https://getbootstrap.com/docs/4.0/components/forms/'
    let shareUrl1 = 'https://getbootstrap.com/docs/4.0/components/forms/'



    return(<>
    <div className="d-flex shareContainer">
    <FacebookShareButton url={shareUrl}>
    <FacebookIcon size={40} round={true}/>
    </FacebookShareButton>

    <WhatsappShareButton url={shareUrl1}>
    <WhatsappIcon size={40} round={true}/>
    </WhatsappShareButton>

    <TwitterShareButton url={shareUrl1}>
    <TwitterIcon size={40} round={true}/>
    </TwitterShareButton>
    </div>
    </>)
}

export default React.memo(ShareBtn);