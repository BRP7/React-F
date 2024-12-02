function BeautifulThings() {
    return [
      "A sunset over the ocean",
      "The sound of rain on a window",
      "A fresh cup of coffee in the morning",
      "A walk through a blooming garden",
      "The warmth of a hug from a loved one",
      "The first snow of winter",
      "The laughter of friends",
      "Stargazing on a clear night",
      "A well-written book",
      "The aroma of freshly baked bread",
      "The calmness of a quiet beach",
      "The colors of a vibrant rainbow",
      "The feeling of sand between your toes",
      "The softness of a pet's fur",
      "A peaceful moment of reflection",
    ];
  }

export default function Main(){
    const beautifulThings = BeautifulThings();

    return (
        <main>
        <h1>Beautiful Things</h1>
        <ol>
          {beautifulThings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </main>
    )
}
