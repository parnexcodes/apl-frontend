import React from 'react'
// import '../cssFiles/footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row grid sm:grid-cols-3 ml-6">
          <div className="col-md-6 col-lg-8 col-span-3">
            <div className="row grid sm:grid-cols-3" >
              <div className="col-md-6 col-lg-4">
                <div className="footer-link">
                  <h3> Supported By</h3>
                  <a href="">MY TEAM 11</a>
                  <a href="">BSV SPORTS</a>
                  
                 </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer-link">
                  <h3>QUICK LINKS</h3>
                  <a href="">HOME</a>
                  <a href="">TEAMS</a>
                  <a href="">SCHEDULE</a>
                  <a href="">POINTS TABLE</a>
                  <a href="">BLOGS</a>
                   <a href="">GALLERY</a>
                   <a href="">ABOUT US</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer-contact">
                  <h3>Get In Touch</h3>
                  <p><i className="fa fa-map-marker-alt"></i>SP-42 ARYA COLLEGE OF ENGINEERING & I.T.</p>
                  <p><i className="fa fa-phone-alt"></i>+91 9829090750</p>
                  <p><i className="fa fa-envelope"></i>info@aryacollege.in</p>
                  <div className="footer-social">
                    
                  
                    <a href="https://www.youtube.com/channel/UCVOyq8xshRagLTudoGDx2kg"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/aryapremierleague/?igshid=YmMyMTA2M2Y%3D"><i className="fab fa-instagram"></i></a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="#">ARYA APL</a> All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By <a href="https://htmlcodex.com">TEAM ZERO</a></p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className='text-center mb-3 text-white font-bold text-lg '>Developed with ❤️ by</h3>
          <div className="flex space-x-2">
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="demo.png" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="demo.png" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-gray-700 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?4" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
            <img alt="" className="w-6 h-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-gray-700 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?4" />
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Footer