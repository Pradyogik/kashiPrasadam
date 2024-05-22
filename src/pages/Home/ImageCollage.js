import React from "react";

function ImageCollage() {
  return (
    <>
    <div className="container-fluid  imageCollage">
      <div className="container imageCollageChild  ">
        <h1 className="py-3 text-center">Categories</h1>
        <div className="zero  d-flex  ">
          {/* 0 */}
          <div className="one  mr-3  w-50">
            {/* 1 */}
            <a href="#">
              <img
                className="w-100 h-100 object-fit-cover"
                src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/ram-Photoroom.jpg"
              />
            </a>
          </div>
          <div className="two d-flex flex-column w-50">
            {/* 2 */}
            <div className="three w-100 h-50 mb-3">
              {/* 3 */}
              <a href="#">
                <img
                  className="w-100 h-100 object-fit-cover "
                  src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                />
              </a>
            </div>
            <div className="four  d-flex w-100  h-50">
              {/* 4 */}
              <div className="five  w-50 mr-3">
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
        <div className="seven px-0 mt-3 d-flex">
          {/* 1 */} 
          <div className="eight w-50 d-flex">
            {/* 2 */}
            <div className="nine mr-3 w-50">
              {/* 3 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>
            <div className="ten mr-3 w-50">
              {/* 4 */}
              <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
              </div>
          </div>
          <div className="eleven w-50">
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
        <div className="twelve px-0 mt-3 d-flex">
          {/* 1 */} 
          
          <div className="thirteen w-50">
            {/* 5 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>

            <div className="fourteen w-50 d-flex">
            {/* 2 */}
            <div className="fifteen ml-3 w-50">
              {/* 3 */}
            <a href="#">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg"
                  />
                </a>
            </div>
            <div className=" sixteen ml-3 w-50">
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
