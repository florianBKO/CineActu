import { Clapperboard } from "lucide-react";
interface CardProps {
  title: string, // Définit la prop 'title' comme une chaîne de caractères
  poster_path: string, // Définit la prop 'title' comme une chaîne de caractères
  release_date:string,
  }
  
  export default function Card({ title,poster_path,release_date }: CardProps) {
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500'; // URL de l'image, ou une image par défaut si pas de poster

  return (
    <div className="card bg-base-100 shadow-xl">
    <figure>
      <img
      src={imageUrl} // Utilisation de l'URL du poster
      alt="Shoes" />
    </figure>
    <div className="card-body p-3 h-[250px]">
      <h4 className="card-title justify-center">
      {title} {/* Afficher le titre du film */}
      </h4>
      <div className="card-actions flex flex-col items-center">
      <div className="badge badge-outline">{release_date}</div>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Cercle principal avec fond */}
        <div className="w-full h-full rounded-full bg-neutral text-neutral-content flex items-center justify-center border-4 border-gray-300">
          <span>80</span>
        </div>

        {/* Contour progressif */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4"
          style={{
        borderColor: "transparent",
        background: `conic-gradient(#4CAF50 ${80}%, transparent ${80}%)`,
        maskImage: "radial-gradient(circle, transparent 58%, white 60%)",
        WebkitMaskImage: "radial-gradient(circle, transparent 58%, white 60%)",
          }}
        ></div>
      </div>

      <button className="btn btn-sm bg-blue-500 flex items-center">
        Infos
        <Clapperboard className="ml-2" />
      </button>
      </div>
    </div>
    </div>
  );
  }
