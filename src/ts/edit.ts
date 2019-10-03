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

    const inputImage = (<HTMLInputElement>document.getElementById("inputImage"))
      .value;
    const inputName = (<HTMLInputElement>document.getElementById("inputName"))
      .value;
    const inputShortDescription = (<HTMLInputElement>(
      document.getElementById("inputShortDescription")
    )).value;
    const inputDescription = (<HTMLInputElement>(
      document.getElementById("inputDescription")
    )).value;

    const data = {
      description: inputDescription,
      shortDescription: inputShortDescription,
      name: inputName,
      image: inputImage
    };

    await putCharacter(data);
  });
})();
