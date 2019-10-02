import { getOneCharacter, putCharacter } from "./requestsAPI";

// ON DOM READY
(async () => {
  const target = document.getElementById("target");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const character = await getOneCharacter(id);

  const editTarget = document.createRange().createContextualFragment(`
    <form id="formEdit">
        <input type="text" id="inputImage" value="${character.image}" />
        <input type="text" id="inputName" value="${character.name}" />
        <input type="text" id="inputShortDescription" value="${character.shortDescription}" />
        <input type="text" id="inputDescription" value="${character.description}" />
        <button type="submit">Modifier</button>
    </form>
  `);

  target.appendChild(editTarget);

  document.getElementById("formEdit").addEventListener("submit", async e => {
    e.preventDefault();

    const inputImage = document.getElementById("inputImage").value;
    const inputName = document.getElementById("inputName").value;
    const inputShortDescription = document.getElementById(
      "inputShortDescription"
    ).value;
    const inputDescription = document.getElementById("inputDescription").value;

    const data = {
      id: id,
      name: inputName,
      image: inputImage,
      shortDescription: inputShortDescription,
      description: inputDescription
    };

    await putCharacter(data);
  });
})();
