import { getCharacters } from "./requestsAPI";

// ON DOM READY
(async () => {
  const targetLists = document.querySelector(".targetLists");
  const characters = await getCharacters();

  characters.forEach(character => {
    const li = document.createRange().createContextualFragment(`
        <li>
            <div class="imageCharacter"><img src="data:image/gif;base64,${character.image}" /></div>
            <h1>${character.name}</h1>
            <p>${character.shortDescription}</p>
            <a href="/view.html?id=${character.id}" >View</a>
            <a href="/edit.html?id=${character.id}" >Edit</a>
        </li>
      `);

    targetLists.appendChild(li);
  });
})();
