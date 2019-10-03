import { postCharacter } from "./requestsAPI";

(async () => {
  const inputImage = <HTMLInputElement>document.getElementById("inputImage");
  const inputName = <HTMLInputElement>document.getElementById("inputName");
  const inputShortDescription = <HTMLInputElement>(
    document.getElementById("inputShortDescription")
  );
  const inputDescription = <HTMLInputElement>(
    document.getElementById("inputDescription")
  );

  document.getElementById("formCreate").addEventListener("submit", async e => {
    e.preventDefault();
    const data = {
      name: inputName.value,
      image: inputImage.value,
      shortDescription: inputShortDescription.value,
      description: inputDescription.value
    };

    await postCharacter(data);
  });
})();
