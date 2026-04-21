"use client";

import { Player } from "@/app/components/ui/Player";
import { TableBackground } from "../TableBackgroud";
import Image from "next/image";
import { useEffect, useState } from "react";

type Card = {
  code: string;
  suit: string;
  rank: number;
  isSelected: boolean;
  img: string;
};

type PlayerType = {
  id: number;
  name: string;
  color: string;
  status: "me" | "otherPlayer";
  position: number;
  isDealer: boolean;
  hand: Card[];
};

export default function HomePage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardPlaced, setCardPlaced] = useState<Card[]>([]);
  const [players, setPlayers] = useState<PlayerType[]>([
    {
      id: 0,
      name: "Nikusha",
      color: "green",
      status: "me",
      position: 1,
      isDealer: false,
      hand: [],
    },
    {
      id: 1,
      name: "Luka",
      color: "blue",
      status: "otherPlayer",
      position: 2,
      isDealer: true,
      hand: [],
    },
    {
      id: 2,
      name: "Salome",
      color: "red",
      status: "otherPlayer",
      position: 3,
      isDealer: false,
      hand: [],
    },
    {
      id: 3,
      name: "Nia",
      color: "yellow",
      status: "otherPlayer",
      position: 4,
      isDealer: false,
      hand: [],
    },
  ]);

  const cardRank: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14];
  const cardSuit: string[] = ["C", "D", "H", "S"];

  useEffect(() => {
    const getCardLabel = (rank: number): string => {
      switch (rank) {
        case 11:
          return "J";
        case 12:
          return "Q";
        case 13:
          return "K";
        case 14:
          return "A";
        default:
          return rank.toString();
      }
    };

    const createDeck = (): Card[] => {
      const deck: Card[] = [];

      for (const rank of cardRank) {
        for (const suit of cardSuit) {
          const label = getCardLabel(rank);

          deck.push({
            code: `${suit}${label}`,
            suit,
            rank,
            isSelected: false,
            img: `/images/cards/${suit}${label}.svg`,
          });
        }
      }

      return deck;
    };

    const shuffleDeck = (deck: Card[]): Card[] => {
      const shuffled = [...deck];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[i],
        ];
      }

      return shuffled;
    };

    const dealCards = (deck: Card[], currentPlayers: PlayerType[]) => {
      const updatedPlayers = currentPlayers.map((player) => ({
        ...player,
        hand: [],
      }));

      const dealerIndex = updatedPlayers.findIndex((player) => player.isDealer);

      if (dealerIndex === -1) return;

      const dealOrder: number[] = [];
      for (let i = 1; i <= updatedPlayers.length; i++) {
        dealOrder.push((dealerIndex + i) % updatedPlayers.length);
      }

      let deckIndex = 0;
      const cardsPerPlayer = 5;

      for (let round = 0; round < cardsPerPlayer; round++) {
        for (const playerIndex of dealOrder) {
          updatedPlayers[playerIndex].hand.push(deck[deckIndex]);
          deckIndex++;
        }
      }

      setPlayers(updatedPlayers);
      setCards(updatedPlayers[0].hand);
    };

    const deck = createDeck();
    const shuffledDeck = shuffleDeck(deck);

    dealCards(shuffledDeck, players);
  }, []);

  const selectCard = (id: number) => {
    setCards((prevCards) => {
      const clickedCard = prevCards[id];

      if (!clickedCard) return prevCards;

      const selectedCards = prevCards.filter((card) => card.isSelected);

      if (selectedCards.length === 0) {
        return prevCards.map((card, index) =>
          index === id ? { ...card, isSelected: !card.isSelected } : card,
        );
      }

      const selectedSuit = selectedCards[0].suit;

      if (clickedCard.isSelected) {
        return prevCards.map((card, index) =>
          index === id ? { ...card, isSelected: false } : card,
        );
      }

      if (clickedCard.suit !== selectedSuit) {
        return prevCards;
      }

      return prevCards.map((card, index) =>
        index === id ? { ...card, isSelected: true } : card,
      );
    });
  };

  const placeCard = () => {
    const selectedCards = cards.filter((card) => card.isSelected);
    if (!selectedCards.length) return;

    setCardPlaced((prev) => [...prev, ...selectedCards]);
    setCards((prev) => prev.filter((card) => !card.isSelected));
  };

  return (
    <>
      <TableBackground />

      <section className="relative">
        <div className="border border-white h-dvh">
          <div className="absolute left-1/2 top-1/2 flex w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            {cardPlaced.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item.img}
                  width={100}
                  height={30}
                  alt={item.code}
                />
              );
            })}
          </div>

          {players.map((item: object, index: number) => {
            return (
              <Player
                key={index}
                color={item.color}
                status={item.status}
                position={item.position}
                isDealer={item.isDealer}
                name={item.name}
              />
            );
          })}

          <div className="absolute bottom-15 left-1/2 flex -translate-x-1/2 flex-col border">
            <div className="space-x-3">
              {cards.map((item, index) => {
                return (
                  <button
                    onClick={() => selectCard(index)}
                    className={`cursor-pointer transition-transform duration-300 ${
                      item.isSelected ? "-translate-y-2" : ""
                    } hover:-translate-y-2`}
                    key={index}
                  >
                    <Image src={item.img} width={120} height={30} alt="card" />
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <button
                onClick={placeCard}
                className="cursor-pointer rounded-md border px-3 py-1 text-white"
              >
                ჩამოსვლა
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
