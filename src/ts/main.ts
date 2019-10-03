import { getCharacters } from "./requestsAPI";

// ON DOM READY
(async () => {
  const targetLists = document.querySelector(".targetLists");
  const characters = await getCharacters();

  characters.forEach(character => {
    const li = document.createRange().createContextualFragment(`
        <li>
            <div class="imageCharacter"><img src="data:image/gif;base64,${character.image}" /></div>
            <h2>${character.name}</h2>
            <p>${character.shortDescription}</p>
            <button><a href="/view.html?id=${character.id}" >View</a></button>
            <button><a href="/edit.html?id=${character.id}" >Edit</a></button>
        </li>
      `);

    targetLists.appendChild(li);
  });
})();
