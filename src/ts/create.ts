import { postCharacter } from "./requestsAPI";

(async () => {
  document.getElementById("formCreate").addEventListener("submit", async e => {
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
      name: inputName,
      image: inputImage,
      shortDescription: inputShortDescription,
      description: inputDescription
    };

    await postCharacter(data);
  });
})();
