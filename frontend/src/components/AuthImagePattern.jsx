import bakbakImage from "../assets/bakbakgibli.png";
import bgDoodle from "../assets/bgdoddle.jpg";

const AuthImagePattern = ({ 
  title = "Welcome to BakBak", 
  subtitle = "Connect with friends and share your moments in a beautiful, artistic way." 
}) => {
  return (
    <div className="hidden lg:flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-indigo-500/10 animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animated Doodle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgDoodle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-slate-900/30"></div>
      </div>

      {/* Local styles for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { 
              opacity: 0; 
              transform: translateY(30px) scale(0.95); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }

          @keyframes float {
            0%, 100% { 
              transform: translateY(0) rotate(0deg); 
            }
            25% { 
              transform: translateY(-15px) rotate(2deg); 
            }
            50% { 
              transform: translateY(-10px) rotate(-1deg); 
            }
            75% { 
              transform: translateY(-20px) rotate(1deg); 
            }
          }

          @keyframes slideInLeft {
            0% { 
              opacity: 0; 
              transform: translateX(-50px); 
            }
            100% { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }

          @keyframes shimmer {
            0% { 
              background-position: -200px 0; 
            }
            100% { 
              background-position: calc(200px + 100%) 0; 
            }
          }

          @keyframes glow {
            0%, 100% { 
              box-shadow: 0 0 10px rgba(148, 163, 184, 0.2), 0 0 20px rgba(148, 163, 184, 0.1); 
            }
            50% { 
              box-shadow: 0 0 20px rgba(148, 163, 184, 0.3), 0 0 30px rgba(148, 163, 184, 0.15); 
            }
          }

          .fade-in-up {
            animation: fadeInUp 1.2s ease-out forwards;
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
          }

          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200px 100%;
            animation: shimmer 2s infinite;
          }

          .glow {
            animation: glow 3s ease-in-out infinite;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-lg text-center fade-in-up">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl glow">
          
          {/* Image Container */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-400 rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img
                src={bakbakImage}
                alt="BakBak Ghibli Art"
                className="w-full h-64 object-cover animate-float"
              />
              {/* Shimmer Overlay */}
              <div className="absolute inset-0 shimmer opacity-20"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white slide-in-left delay-200 leading-tight">
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed slide-in-left delay-300">
              {subtitle}
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-2 mt-6 slide-in-left delay-500">
              {['🌸', '✨', '🎭', '🎪', '🌙'].map((emoji, index) => (
                <span 
                  key={index}
                  className="text-2xl animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex justify-center slide-in-left delay-500">
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;