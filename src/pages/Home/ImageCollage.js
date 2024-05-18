import React from "react";

function ImageCollage() {
  return (
    <>
    <div className="container-fluid  imageCollage">
      <div className="container  ">
        <h3 className="py-3">Categories</h3>
        <div className="  d-flex  ">
          {/* 0 */}
          <div className="one  mr-2  w-50">
            {/* 1 */}
            <a href="#">
              <img
                className="w-100 h-100 object-fit-cover"
                src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/ram-Photoroom.jpg"
              />
            </a>
          </div>
          <div className="two d-flex flex-column h-50 w-50">
            {/* 2 */}
            <div className="three w-100 h-50 mb-2">
              {/* 3 */}
              <a href="#">
                <img
                  className="w-100 h-50 object-fit-cover "
                  src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                />
              </a>
            </div>
            <div className="four  d-flex  h-50">
              {/* 4 */}
              <div className="five  w-50 mr-2">
                {/* 5 */}
                <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
              </div>
              <div className="six  w-50">
                {/* 6 */}
                <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className=" px-0 mt-2 d-flex">
          {/* 1 */} 
          <div className=" w-50 d-flex">
            {/* 2 */}
            <div className=" mr-2 w-50">
              {/* 3 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>
            <div className="mr-2 w-50">
              {/* 4 */}
              <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
              </div>
          </div>
          <div className="bg-info w-50">
            {/* 5 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>
        </div>
        {/* 3rd section */}
        <div className=" px-0 mt-2 d-flex">
          {/* 1 */} 
          
          <div className="bg-info w-50">
            {/* 5 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>

            <div className=" w-50 d-flex">
            {/* 2 */}
            <div className=" ml-2 w-50">
              {/* 3 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>
            <div className="ml-2 w-50">
              {/* 4 */}
              <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
              </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default React.memo(ImageCollage);
