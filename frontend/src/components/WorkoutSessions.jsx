import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Get ready to push your limits with our signature HIIT session! Designed to maximize calorie burn and improve endurance, this workout is perfect for those looking to elevate their fitness game.

        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Discover bootcamps for all fitness levels, designed to challenge and inspire. Achieve your goals with expert guidance and personalized workouts.

        </p>
        <div className="bootcamps">
        <div>
            <h4>Strength & Conditioning Bootcamp.</h4>
            <p>
             Build power and endurance with this full-body workout that combines weight training and cardio for a complete conditioning session.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp.</h4>
            <p>
             Improve your everyday strength with functional fitness training that targets core stability, balance, and mobility.
            </p>
          </div>
          <div>
            <h4> Cardio Burn Bootcamp</h4>
            <p>
            Elevate your heart rate and torch calories with our high-energy cardio-focused bootcamp, perfect for all fitness levels.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp.</h4>
            <p>
             Enhance flexibility and mindfulness through yoga-based movements designed to improve balance and posture.
            </p>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default WorkoutSessions
