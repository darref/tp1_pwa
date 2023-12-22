// Importez les hooks nécessaires de React
import React, { useState } from 'react';

function FullScreenButton() {
  const [isFullScreen, setFullScreen] = useState(false);

  // Fonction pour basculer entre le mode plein écran et le mode normal
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Si le document n'est pas en mode plein écran, demandez le mode plein écran
      document.documentElement.requestFullscreen().then(() => {
        setFullScreen(true);
      });
    } else {
      // Si le document est déjà en mode plein écran, sortez du mode plein écran
      document.exitFullscreen().then(() => {
        setFullScreen(false);
      });
    }
  };

  return (
    <div style={{ position: 'absolute', top: 10, left: "50%", color: 'white'  , width: "20%"}}>
      {/* Bouton pour basculer entre le mode plein écran et le mode normal */}
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Quitter le mode plein écran' : 'Passer en mode plein écran'}
      </button>
    </div>
  );
}

export default FullScreenButton;
