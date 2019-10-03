import { getOneCharacter } from "./requestsAPI";

// ON DOM READY
(async () => {
  const target = document.getElementById("target");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const character = await getOneCharacter(id);

  const viewTarget = document.createRange().createContextualFragment(`
    <div class="imageCharacter"><img src="data:image/gif;base64,${character.image}" /></div>
    <h2>${character.name}</h2>
    <p>${character.description}</p>
    <button><a href="/edit.html?id=${character.id}" >Edit</a></button>
    <button><a href="/delete.html?id=${character.id}" >DELETE</a></button>
  `);

  target.appendChild(viewTarget);
})();
