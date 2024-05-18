import React from "react";




function Specification(){


    return(<>
    <div class="container-fluid specificationDiv table-responsive py-5"> 
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    {/* <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Brand</td>
      <td>SVKT</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      {/* <th scope="row">2</th> */}
      <td>Material Type</td>
      <td>Brass Idol</td>
      {/* <td>@fat</td> */}
    </tr>
    <tr>
      {/* <th scope="row">3</th> */}
      <td>colour</td>
      <td> Light Yello</td>
      {/* <td>@twitter</td> */}
    </tr>
     <tr>
      {/* <th scope="row">4</th> */}
      <td>Weight</td>
      <td>270 Grams</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      {/* <th scope="row">5</th> */}
      <td>Package Content</td>
      <td>NA</td>
      {/* <td>@twitter</td> */}
    </tr>
  </tbody>
</table>
</div>
    </>)
}


export default React.memo(Specification);