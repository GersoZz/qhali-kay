import React from 'react';
import { Fire } from '../svgs/Fire';

const data = {
  profile: {
    name: "John",
    lastname: "Doe",
    profilePicture: "https://picsum.photos/200/300",
    streak: {
      weeks: 3
    }
  },
  progress: {
    percentage: 55
  },
  greeting: {
    message: "Hoy es un día para ser más fuerte que tus excusas."
  }
};

function Profile() {
  return (
    <div className="profile px-8 py-12 h-full w-60 bg-accent text-background flex flex-col items-center p-4 justify-between">
      <div className="info-profile flex flex-col items-center mb-4">
        <img
          src={data.profile.profilePicture}
          alt={`${data.profile.name} ${data.profile.lastname}`}
          className="rounded-full w-24 h-24 mb-2"
        />
        <h2 className="text-lg font-bold">{`${data.profile.name} ${data.profile.lastname}`}</h2>
      </div>

      <div className="current-streak bg-white py-2 px-5 text-black rounded-lg p-2 flex flex-row gap-2 items-center mb-4">
        <Fire></Fire>
        <div className="info-streak flex flex-col gap-0">
          <span className="font-bold text-xl">{`${data.profile.streak.weeks} semanas`}</span>
          <span>Racha actual</span>
        </div>
      </div>

      <div className="progress-circle flex flex-col items-center mb-4 gap-0 text-black">
        <div className="w-32 h-32 flex flex-col items-center w-40 h-40 justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full">
          <span className="text-2xl h1 font-bold">{`${data.progress.percentage}%`}</span>
          <span>completado</span>
        </div>
      </div>

      <div className="greeting text-center">
        <h3 className="text-xl font-bold large-text">¡Hola de nuevo, {data.profile.name}!</h3>
        <p className="italic small-text">"{data.greeting.message}"</p>
      </div>
    </div>
  );
}

export default Profile;

