import React from "react"
import oneStarImg from '../../images/Score.png';
import twoStarImg from '../../images/Score (1).png';
import threeStarImg from '../../images/Score (2).png';
import fourStarImg from '../../images/Score (3).png';
import fiveStarImg from '../../images/Score (4).png';


// css
import './Filter.css';



function Filter(){


    return(<>
    <div  className="filterDiv p-3 mr-5">
<h5 className="text-dark">Filters</h5>
<div className="firstSection ml-2 mb-4">
<h6>Pricing</h6>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
<label class="form-check-label" for="defaultCheck1">
Under 300
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
<label class="form-check-label" for="defaultCheck2">
Under 500
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
<label class="form-check-label" for="defaultCheck3">
Under 800
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
<label class="form-check-label" for="defaultCheck4">
Under 1000
</label>
</div>
</div>
{/* second section i.e stock */}
<div className="secondFilter ml-2 mb-4">
<h6>Availability</h6>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
<label class="form-check-label" for="defaultCheck5">
In Stock
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck6" />
<label class="form-check-label" for="defaultCheck6">
Out of Stock
</label>
</div>
</div>

{/* third section */}
<div className="thirdFilter ml-2 mb-4">
<h6>Availability</h6>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck7"/>
<label class="form-check-label" for="defaultCheck7">
Price: Low to high
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck8" />
<label class="form-check-label" for="defaultCheck8">
Price: High to low
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck9" />
<label class="form-check-label" for="defaultCheck9">
Alphabetically: A-Z
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck10" />
<label class="form-check-label" for="defaultCheck10">
Alphabatically: Z-A
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck11" />
<label class="form-check-label" for="defaultCheck11">
Featured
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck12" />
<label class="form-check-label" for="defaultCheck12">
New Arrivals
</label>
</div>
</div>
{/* fourth section i.e starts section */}
<div className="fourthFilter ml-2 mb-4">
<h6>Customer Reviews</h6>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck13"/>
<label class="form-check-label" for="defaultCheck13">
<img src={oneStarImg} />
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck14" />
<label class="form-check-label" for="defaultCheck14">
<img src={twoStarImg} />
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck15" />
<label class="form-check-label" for="defaultCheck15">
<img src={threeStarImg} />

</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck16" />
<label class="form-check-label" for="defaultCheck17">
<img src={fourStarImg} />

</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck18" />
<label class="form-check-label" for="defaultCheck18">
<img src={fiveStarImg} />
</label>
</div>
</div>
</div>
    </>)
}



export default React.memo(Filter);

