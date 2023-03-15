const screenContentDiv = document.getElementById("screen-content");
let nuevoContenido;

function showInScreen(content) {
  screenContentDiv.innerHTML = content;
}

const formValues = {
  name: "",
  surname: "",
  age: 0,
};

function resetFormvalues() {
  formValues.name = "";
  formValues.surname = "";
  formValues.age = 0;
}

function onSubmit() {
  showInScreen(`
<h2> Valores ingresados: </h2>
<p>
Nombre: <b>${formValues.name}</b>
</p>
<p>
Apellido: <b>${formValues.surname}</b>
</p>
<p>
edad: <b>${formValues.age}</b>
</p>

<img id="pipboy-man" src="assets/pipboy-man.png" alt="pipboy thumbs up"/>
<button type="button" onclick="resetForm()">
   Reset
</button>

`);

document.getElementById('arm').classList.add('arm-in')
}

function onInput(key, value) {
  formValues[key] = value;
  button = document.getElementById("submit-button");

  if (formValues.name && formValues.surname && formValues.age) {
    if (!button) {
      document.getElementById("data-form").insertAdjacentHTML(
        "beforeend",
        `
            <button id="submit-button" type="submit">Enviar</button>
            `
      );
    }
  } else if (button) {
    button.remove();
  }
}

function setInitialContent() {
  showInScreen(/* html */`
    <div>
    <h2>Ingrese 3 valores</h2>
    <p>[presione TAB para continuar]</p>
    </div>
    <form id="data-form" onsubmit="onSubmit()">
    <label for="name">Nombre</label>
    <input id="name" type="text" oninput="onInput(this.id,this.value)">
    
    <label for="surname">Apellido</label>
    <input id="surname" type="text" oninput="onInput(this.id,this.value)">
    
    <label for="age">Edad</label>
    <input id="age" type="number" oninput="onInput(this.id,this.value)">
    </form>
    </div>`);
}

function resetForm() {
  resetFormvalues();
  setInitialContent();
  document.getElementById('arm').classList.remove('arm-in')
}

// initial content
setTimeout(() => {
  setInitialContent();
}, 2000);

