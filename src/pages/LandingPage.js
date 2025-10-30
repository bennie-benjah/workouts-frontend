// src/pages/LandingPage.js
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Perfect
              <span className="highlight"> Workout Buddy</span>
            </h1>
            <p className="hero-subtitle">
              Connect with fitness partners who share your goals, schedule, and workout style.
              Stay motivated, accountable, and achieve more together.
            </p>

            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">Start Your Journey</Link>
              <Link to="/login" className="btn btn-secondary">Already a Member?</Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="workout-showcase">
              <div className="workout-card card-1">
                <div className="card-content">
                  <span className="emoji">💪</span>
                  <p>Strength Training</p>
                </div>
              </div>
              <div className="workout-card card-2">
                <div className="card-content">
                  <span className="emoji">🏃‍♂️</span>
                  <p>Cardio Partners</p>
                </div>
              </div>
              <div className="workout-card card-3">
                <div className="card-content">
                  <span className="emoji">🧘‍♀️</span>
                  <p>Yoga & Flexibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose Workout Buddy?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Perfect Match</h3>
                <p>Find partners with similar fitness levels, goals, and availability</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Schedule Sync</h3>
                <p>Coordinate workout times that work for both of you</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Goal Tracking</h3>
                <p>Set and achieve fitness goals together with progress tracking</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Stay Connected</h3>
                <p>Chat, share tips, and motivate each other along the way</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">Get Started in 3 Easy Steps</h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Create Your Profile</h3>
                <p>Tell us about your fitness goals, preferred workouts, and schedule</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>Find Your Match</h3>
                <p>Browse and connect with compatible workout partners nearby</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Start Training</h3>
                <p>Schedule your first session and begin your fitness journey together</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Transform Your Fitness Journey?</h2>
            <p>Join thousands of members achieving their goals together</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-large">Join Now - It's Free</Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>10K+</strong>
                <span>Active Members</span>
              </div>
              <div className="stat">
                <strong>50K+</strong>
                <span>Workouts Completed</span>
              </div>
              <div className="stat">
                <strong>95%</strong>
                <span>Success Rate</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer always outside main content */}
      <Footer />
    </>
  );
};

export default LandingPage;
