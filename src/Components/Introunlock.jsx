import React, { useEffect } from "react";

export default function IntroUnlock({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-900 flex items-center justify-center overflow-hidden">

      {/* LOCK + KEY CONTAINER */}
      <div className="relative z-20 flex flex-col items-center">

        {/* LOCK */}
        <div className="lock-container relative">

          <div className="lock">
            🔒
          </div>

          {/* KEY */}
          <div className="key">
            🔑
          </div>

        </div>
      </div>

      {/* DOORS */}
      <div className="doors-container absolute inset-0 flex items-center justify-center opacity-0">

        <div className="relative w-64 h-80 bg-zinc-800/30 border border-zinc-700/50 rounded-xl overflow-hidden">

          {/* DOOR PANELS */}
          <div className="absolute inset-0 flex">

            <div className="door-left" />
            <div className="door-right" />

          </div>
        </div>
      </div>

      {/* DEVOPS LOADING MESSAGE */}
      <div className="absolute bottom-16 text-center">

        <p className="text-blue-400 tracking-widest text-sm font-mono">
          INITIALIZING DEVOPS PORTFOLIO
        </p>

        <p className="text-zinc-600 text-xs mt-2 font-mono">
          AWS • DOCKER • KUBERNETES • CI/CD
        </p>

      </div>

      <style>{`

        /* LOCK CONTAINER */
        .lock-container {
          position: relative;
          width: 100px;
          height: 120px;
          display: flex;
          justify-content: center;
        }

        /* LOCK */
        .lock {
          font-size: 4rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          animation:
            lockShake 2s ease,
            unlock 3s 2s ease forwards;
        }

        /* KEY */
        .key {
          font-size: 2.5rem;
          position: absolute;
          top: 80px;
          opacity: 0;

          animation:
            insertKey 1.5s 0.5s ease forwards,
            turnKey 1s 2s ease forwards;
        }

        /* DOORS */
        .doors-container {
          animation: fadeInDoors 1s 2.8s ease forwards;
        }

        /* DOOR PANELS */
        .door-left,
        .door-right {
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            #1e293b,
            #0f172a
          );

          position: absolute;
          top: 0;

          transform-origin: center top;

          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .door-left {
          left: 0;
          border-right: 1px solid rgba(255, 255, 255, 0.1);

          animation:
            openLeftInward 2s 3.3s ease forwards;
        }

        .door-right {
          right: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.1);

          animation:
            openRightInward 2s 3.3s ease forwards;
        }

        /* LOCK SHAKE */
        @keyframes lockShake {

          0%,
          100% {
            transform: translateY(0);
          }

          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateY(-3px);
          }

          20%,
          40%,
          60%,
          80% {
            transform: translateY(3px);
          }
        }

        /* KEY INSERT */
        @keyframes insertKey {

          0% {
            transform: translateY(100px) rotate(-30deg);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          60% {
            transform: translateY(-10px) rotate(0deg);
          }

          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }

        /* KEY TURN */
        @keyframes turnKey {

          0% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-5px) rotate(90deg);
          }

          100% {
            transform: translateY(-5px) rotate(90deg);
            opacity: 0;
          }
        }

        /* UNLOCK */
        @keyframes unlock {

          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }

          30% {
            transform: scale(1.1) rotate(-10deg);
          }

          70% {
            transform: scale(0.8) rotate(10deg);
          }

          100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
        }

        /* DOORS FADE IN */
        @keyframes fadeInDoors {

          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        /* LEFT DOOR */
        @keyframes openLeftInward {

          0% {
            transform: perspective(800px) rotateY(0deg);
          }

          100% {
            transform: perspective(800px) rotateY(-90deg);
            opacity: 0.5;
          }
        }

        /* RIGHT DOOR */
        @keyframes openRightInward {

          0% {
            transform: perspective(800px) rotateY(0deg);
          }

          100% {
            transform: perspective(800px) rotateY(90deg);
            opacity: 0.5;
          }
        }

      `}</style>
    </div>
  );
}