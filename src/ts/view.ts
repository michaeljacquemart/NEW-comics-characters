import { getOneCharacter } from "./requestsAPI";

// ON DOM READY
(async () => {
  const target = document.getElementById("target");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const character = await getOneCharacter(id);

  const viewTarget = document.createRange().createContextualFragment(`
    <div class="imageCharacter"><img src="data:image/gif;base64,${character.image}" /></div>
    <h1>${character.name}</h1>
    <p>${character.description}</p>
    <a href="/edit.html?id=${character.id}" >Edit</a>
    <a href="/delete.html?id=${character.id}" >DELETE</a>
  `);

  target.appendChild(viewTarget);
})();
