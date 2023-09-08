import React from 'react';
import '../style.css';

function AboutScreen() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit
            quis hendrerit. Phasellus nec tincidunt arcu, non bibendum tellus. Fusce fringilla
            lacus ut elit volutpat, ut faucibus lacus feugiat.
          </p>
  
        </div>
        <div className="about-section">
          <h2>Success Stories</h2>
          <div className="success-story">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80" alt="Success Story" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat velit.
              Quisque auctor feugiat sapien, vel placerat leo dignissim id.
            </p>
          </div>
          <div className="success-story">
            <img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Success Story" />
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Proin consequat nulla non metus semper, id pretium purus rhoncus.
            </p>
          </div>
        </div>
        <div className="about-section">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Testimonial" />
            <blockquote>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat
              velit."
            </blockquote>
            <cite>- John Doe</cite>
          </div>
          <div className="testimonial">
            <img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Testimonial" />
            <blockquote>
              "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae."
            </blockquote>
            <cite>- Jane Smith</cite>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
