"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const flashcards = [
  {
    subject: "Biology",
    symbol: "🧬",
    label: "Biology Question",
    content: `Problem Statement

There are known to exist two populations of grasshoppers (A and B, both isolated from each other) on a faraway island. These grasshoppers are known to only breed once in their lifetime. Genetic analysis reveals a heritable trait in all grasshoppers of population B, that makes individuals mate exclusively with their full siblings, whereas grasshoppers of population A only mate with non-siblings. This trait is not present in any individual of population A, and doesn't (directly or indirectly) cause detrimental effects in B grasshoppers.

Assumptions:
Males can mate with multiple females during a single breeding season, but females can mate only once.
a. Assuming the populations have existed for a very long amount of time in stable environments, predict the sex ratio (males and females) in populations A and B. Assume the populations to be stable (i.e., neither increasing nor decreasing after a very long time). Assume males and females to have the same survival rates, i.e., equal percentages of males and females survive to the reproductive phase.
b. How will your answer to (a) change if the percentage of males and females reaching the breeding season is different? Give a proper explanation for your answer.
c. Aditya introduces 5000 female and 1000 male grasshoppers from both populations into two isolated habitats, where a habitat comprises only individuals from the same population. The populations are then observed for multiple generations. Plot the variation in sex ratio for both habitats over time. Assume the initial B population contains many sets of siblings.
d. A subpopulation of 1000 individuals (having a sex ratio equal to the stable ratio calculated in part (a)) from population B is isolated. It is observed that for some reason, approximately half of the population has lost the sibling-mating trait and now mates only with non-siblings. Predict the change in sex ratio, and trait frequency (number of individuals who mate strictly with siblings / total population size) over a period of time. Assume that there exist sets of siblings in the subpopulation that have not lost the trait.
Assume populations A and B are identical in every aspect except mating behaviour, as outlined above.`,
  },
  {
    subject: "Physics",
    symbol: "⚛️",
    label: "Physics Question",
    content: `Screeech

Sugat, a chemist extraordinaire, made balls out of an unknown material. The balls, when soaked in water, absorb it to become 99% water by mass. He notices that the surface of the ball is wet. The balls behave like ordinary balls when dropped on the floor. Accidentally, he drops the wet ball on a metal plate, maintained at a constant temperature of 200°C. To his surprise, he hears a high-pitched screeching sound (shortly followed by his own) when the ball hits the metal plate.

Intrigued, Sugat proceeds to make more detailed observations. (Assume: Water loss during each collision is negligible, total collision time increases with height.)

1. Explain the screeching sound.
2. Explain all possible long-term behaviors of the ball and plot h vs n for each case, where h is the maximum height reached by the ball between collisions and n is the number of collisions.
3. What would happen if there is no air resistance?`,
  },
  {
    subject: "Chemistry",
    symbol: "⚗️",
    label: "Chemistry Question",
    content: `Chemistry Problem

Mimamsa 2026
Inky Pinky Ponky

Sonal, an industrial chemist, synthesised the xanthene derivative A as an attempt to create a new artificial textile dye. On treatment of A with phosphorus oxychloride, the compound B was obtained, which afforded compounds C, D, and E on treatment with hydrazine, 2-aminoimidazole/triethylamine and 2-methylimidazole/triethylamine respectively.

1. Give a plausible mechanism for the synthesis of A in the scheme given below.
2. Give the structures of B, C, D, and E.
Sonal observed that A is pink at pH 5.0 and turns colourless when the pH is increased to 8.0.
3. Give a plausible reason for the observed reversible colour change with varying pH.

Next, Sonal experimented with adding 10μM aqueous solutions of Cu2+ and Hg2+ salts to 1mM acetonitrile/water solution of C, D, and E (maintained at pH 5.0). On adding Cu2+ solution to the colourless acetonitrile/water solution of C and D, both the solutions turned pink within 1 minute. But adding Cu2+ to E did not lead to any colour change. However, addition of a Hg2+ salt to the solution of C and D led to a pink colour appearing only after stirring for 50 hours.

Puzzled by the observations, Sonal measured the absorption spectra of A, C, and D at pH 5.0. She found that A has an absorption maximum at λmax = 498 nm, while C and D have absorption maxima at λmax = 320 nm and 345 nm respectively. After 1 minute of adding Cu2+ to C and D, another peak appeared at λ = 498 nm.

4. Help Sonal explain why the neutral solution of C & D turns pink after the addition of Cu2+? Also comment on why Hg2+ takes more time for the colour change than Cu2+, when added to the aqueous solution of C & D.
5. Give a plausible reasoning to explain why the addition of Cu2+ to E does not lead to any colour change, while D turns pink.`,
  },
  {
    subject: "Mathematics",
    symbol: "∑",
    label: "Mathematics Question",
    content: `The Angels have Answered

The overlords of Chess have banished the white king from the chessboard for his atrocities on the black pieces, and have placed him in an infinitely sized board made up of hexagonal cells. The white king must now pass a test to avoid the fires of chess hell, which lurks beneath the infinite board.

The king and the overlords take turns alternately. On the king's turn, he can move to any of the six adjacent cells. The overlords, in their turn, then delete one of the cells of the board from existence. Stepping on a deleted cell will result in the king falling into the fires of hell. The overlords cannot delete the cell the king is currently on.

Who has the winning strategy, the king or the overlords?
(Here, a player is said to have a winning strategy, if that player, on their turn, can play a move that will result in their victory, regardless of the moves of the other player.)`,
  },
  {
    subject: "Earth & Climate Science",
    symbol: "🌍",
    label: "Earth & Climate Science Question",
    content: `Problem Statement

Given below are three graphs that show the average intensity of radiation versus the wavelength of radiation; as seen from the top of the Earth's troposphere. The smooth curves are theoretical emission spectra of blackbodies at different temperatures. The jagged line is the spectrum with the greenhouse effect of only CO2 taken into consideration.
Note the dip in intensity at ~15 microns, corresponding to IR radiation.

1. Why does the emission temperature have a lower bound? What affects this temperature?
2. An isolated stationary CO2 molecule absorbs IR radiation in a very narrow range of wavelengths. Why does the increase in concentration cause a broadening of the dip in the absorption spectrum?
3. How would the profile of the dip in absorption differ in the thicker (higher pressure) Venusian atmosphere?`,
  },
];

export default function ProblemsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCard = activeIndex !== null ? flashcards[activeIndex] : null;

  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-crimson">Sample Problems</span>
          <h1 className="font-display text-4xl font-semibold text-charcoal sm:text-5xl">
            Questions
          </h1>
        </div>

        <div className="mt-12 space-y-6">
          {activeCard ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {flashcards.map((card, index) => (
                  <button
                    key={card.subject}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      index === activeIndex
                        ? "border-crimson bg-crimson/10 text-crimson"
                        : "border-charcoal/10 bg-ivory text-charcoal hover:border-crimson/20 hover:bg-white"
                    }`}
                  >
                    {card.subject}
                  </button>
                ))}
              </div>

              <motion.article
                key={activeCard.subject}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] border border-charcoal/10 bg-white/95 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.18)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grid h-20 w-20 place-items-center rounded-3xl bg-crimson/10 text-4xl">
                      {activeCard.symbol}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-crimson/80">{activeCard.subject}</p>

                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="cursor-pointer rounded-3xl border border-charcoal/10 bg-ivory px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-crimson/20 hover:text-crimson"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-charcoal/10 bg-charcoal/5 p-6 text-sm leading-7 text-charcoal-soft">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-charcoal">
                    {activeCard.content}
                  </pre>
                </div>
              </motion.article>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {flashcards.map((card, index) => (
                <motion.button
                  key={card.subject}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer group relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-ivory/90 p-6 text-left shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] transition hover:border-crimson/20 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-3xl bg-crimson/10 text-3xl">
                      {card.symbol}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-crimson/80">{card.subject}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
