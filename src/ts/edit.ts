import { getOneCharacter, putCharacter, deleteCharacter } from "./requestsAPI";

// ON DOM READY
(async () => {
  const target = document.getElementById("target");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const character = await getOneCharacter(id);

  const editTarget = document.createRange().createContextualFragment(`
    <form id="formEdit" data-id="${character.id}">
        <input type="text" id="inputImage" value="${character.image}" />
        <input type="text" id="inputName" value="${character.name}" />
        <input type="text" id="inputShortDescription" value="${character.shortDescription}" />
        <input type="text" id="inputDescription" value="${character.description}" />
        <button type="submit">Modifier</button>
        <button id="delete">Supprimer</button>
    </form>
  `);

  target.appendChild(editTarget);

  const inputImage = <HTMLInputElement>document.getElementById("inputImage");
  const inputName = <HTMLInputElement>document.getElementById("inputName");
  const inputShortDescription = <HTMLInputElement>(
    document.getElementById("inputShortDescription")
  );
  const inputDescription = <HTMLInputElement>(
    document.getElementById("inputDescription")
  );

  document.getElementById("formEdit").addEventListener("submit", async e => {
    e.preventDefault();

    const data = {
      id: id,
      description: inputDescription.value,
      shortDescription: inputShortDescription.value,
      name: inputName.value,
      image: inputImage.value
    };

    await putCharacter(data);
  });

  // document.getElementById("delete").addEventListener("click", event => {
  //   await deleteCharacter();
  // });
})();
