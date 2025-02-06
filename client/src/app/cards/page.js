"use client"
import { useState } from "react"

const cardOptions = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

const faceConfigId = {
  Q: 11,
  K: 12,
  J: 10,
  A: 13,
}

function shuffleArray(array) {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

const Cards = () => {
  const [cards, setCards] = useState(shuffleArray(cardOptions))
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)

  function getCardValue(card) {
    return faceConfigId[card] || Number.parseInt(card)
  }

  function handleCardSelection(card, index) {
    setSelectedCard(card)
    setSelectedIndex(index)
    const randomIndex = Math.floor(Math.random() * cardOptions.length)
    setComputerSelection(cardOptions[randomIndex])

    // Shuffle only the unselected cards
    const newCards = [...cards]
    const unselectedCards = newCards.filter((_, i) => i !== index)
    const shuffledUnselected = shuffleArray(unselectedCards)

    // Put the shuffled cards back, keeping the selected card in its original position
    let shuffledIndex = 0
    for (let i = 0; i < newCards.length; i++) {
      if (i !== index) {
        newCards[i] = shuffledUnselected[shuffledIndex]
        shuffledIndex++
      }
    }

    setCards(newCards)
  }the

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold">Pick a Card</h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardSelection(item, index)}
            className={`flex justify-center items-center p-4 m-4 shadow-lg w-32 h-48 
                        bg-black cursor-pointer text-white rounded-lg transition-all duration-300 
                        ${selectedIndex === index ? "scale-110 bg-red-600 shadow-2xl" : ""}`}
          >
            <h1 className="shadow-xl">{selectedIndex === index ? item : ""}</h1>
          </div>
        ))}
      </div>

      {/* Result Section */}
      {selectedCard && computerSelection && (
        <div className="text-center p-4 bg-gray-100 rounded shadow-md">
          <p>
            <strong>You selected:</strong> {selectedCard}{" "}
          </p>
          <p>
            <strong>Computer selected:</strong> {computerSelection}{" "}
          </p>
          <h2 className="text-lg font-bold mt-2">
            {getCardValue(selectedCard) > getCardValue(computerSelection) ? "🎉 You win!" : "💀 You lost!"}
          </h2>
        </div>
      )}
    </div>
  )
}

export default Cards

