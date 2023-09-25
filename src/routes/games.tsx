import { GameCard } from "../components/GameCard";
import games from "../games.json";
import { motion } from "framer-motion";

export function Games() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      class="px-8 md:px-16 lg:px-32 xl:px-48"
    >
      <h3 class="mb-2 mt-16 text-2xl font-bold capitalize tracking-wide">
        All Games
      </h3>
      <div class="flex flex-wrap justify-between gap-5 pb-16">
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </div>
    </motion.main>
  );
}
