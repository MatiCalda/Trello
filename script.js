let cards = [];


document.getElementById("add").addEventListener("click", (e) => {
    const container = document.getElementById("contenedor");
    const divCol = document.createElement("div");
    divCol.className = "col-xl-3 col-md-5 col-sm-12 py-3";

    const divCard = document.createElement("div");
    divCard.className = "card";

    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const divRow = document.createElement("div");
    divRow.className = "row pb-2";

    const divEdit = document.createElement("div");
    divEdit.className = "col text-end";

    const editOption = document.createElement("a");
    editOption.href = "#";
    editOption.addEventListener("click", () => {
        if (btn.textContent == "Tarea Finalizada") {
            text.value = h5.textContent;
            h5.textContent = "";
            textArea.value = desc.textContent;
            desc.textContent = "";

            text.classList.remove("d-none");
            textArea.classList.remove("d-none");
            btnDropdown.classList.remove("d-none");
            btn.textContent = "Guardar";
        }
    });

    const iconEdit = document.createElement("i");
    iconEdit.className = "fa-regular fa-pen-to-square";

    const divH5 = document.createElement("div");
    divH5.className = "input-group mb-3";

    const h5 = document.createElement("h5");
    h5.className = "card-title";

    const text = document.createElement("input");
    text.type = "text";
    text.className = "form-control rounded-start";
    text.placeholder = "Titulo";

    const btnDropdown = document.createElement("button");
    btnDropdown.className = "btn btn-outline-secondary dropdown-toggle";
    btnDropdown.type = "button"
    btnDropdown.setAttribute("data-bs-toggle", "dropdown");
    btnDropdown.setAttribute("aria-expanded", "false");
    btnDropdown.textContent = "Prioridad";

    const ul = document.createElement("ul");
    ul.className = "dropdown-menu dropdown-menu-end";

    let prioridad = "";
    const liRed = document.createElement("li");
    const aRed = document.createElement("a");
    aRed.className = "dropdown-item";
    aRed.textContent = "Alta";
    aRed.addEventListener("click", () => {
        prioridad = "alta";
        btnDropdown.textContent = "Alta";
        divCard.style.backgroundColor = "#f5c1c6";
        textArea.style.backgroundColor = "#eeb1b6";
        text.style.backgroundColor = "#eeb1b6";
    });
    const liYellow = document.createElement("li");
    const aYellow = document.createElement("a");
    aYellow.className = "dropdown-item";
    aYellow.textContent = "Media";
    aYellow.addEventListener("click", () => {
        prioridad = "media";
        btnDropdown.textContent = "Media";
        divCard.style.backgroundColor = "#f7e8b8";
        textArea.style.backgroundColor = "#e4d7ae";
        text.style.backgroundColor = "#e4d7ae";

    });
    const liBlue = document.createElement("li");
    const aBlue = document.createElement("a");
    aBlue.className = "dropdown-item";
    aBlue.textContent = "Baja";
    aBlue.addEventListener("click", () => {
        prioridad = "baja";
        btnDropdown.textContent = "Baja";
        divCard.style.backgroundColor = "#a7d2ff";
        textArea.style.backgroundColor = "#a1c6ee";
        text.style.backgroundColor = "#a1c6ee";
    });




    const desc = document.createElement("p");
    desc.className = "card-text";

    const textArea = document.createElement("textarea");
    textArea.className = "form-control";
    textArea.placeholder = "Descripcion";

    const colBtn = document.createElement("div");
    colBtn.className = "col text-end pt-2";

    const btn = document.createElement("button");
    btn.className = "btn btn-light";
    btn.textContent = "Guardar"
    btn.addEventListener("click", (e) => {
        if (btn.textContent == "Guardar") {
            if (text.value !== "" && prioridad !== "") {
                h5.textContent = text.value;
                desc.textContent = textArea.value;

                text.classList.add("d-none");
                textArea.classList.add("d-none");
                btnDropdown.classList.add("d-none");
                btn.textContent = "Tarea Finalizada";
            } else {
                alert("Debe ingresar informacion");
            }
        } else if (btn.textContent == "Tarea Finalizada") {
            let color;
            switch (prioridad) {
                case "alta":
                    color = "#f5c1c6";
                    break;
                case "media":
                    color = "#f7e8b8";
                    break;
                case "baja":
                    color = "#a7d2ff";
                    break;

                default:
                    color = "#ffffff";
                    break;
            }
            let card = {
                "title": h5.textContent,
                "description": desc.textContent,
                "color": divCard.style.backgroundColor
            }
            console.log(card);
            const parent = divCol.parentElement;
            parent.removeChild(divCol);
            cards.unshift(card);
        }
    });


    divCol.appendChild(divCard);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(divRow);
    divCardBody.appendChild(divH5);
    divRow.appendChild(divEdit);
    divEdit.appendChild(editOption);
    editOption.appendChild(iconEdit);
    divH5.appendChild(h5);
    divH5.appendChild(text);
    divH5.appendChild(btnDropdown);
    divH5.appendChild(ul);
    ul.appendChild(liRed);
    liRed.appendChild(aRed);
    ul.appendChild(liYellow);
    liYellow.appendChild(aYellow);
    ul.appendChild(liBlue);
    liBlue.appendChild(aBlue);

    divCardBody.appendChild(desc);
    divCardBody.appendChild(textArea);
    divCardBody.appendChild(colBtn);
    colBtn.appendChild(btn);

    container.appendChild(divCol);
});

if (cards.length == 11) {
    cards.pop();
}

document.getElementById("mostrarHistorial").addEventListener("click", () => {
    const container = document.getElementById("historial");
    let html;
    if (cards.length == 0) {
        html = `<h6>Aun no hay ninguna tarea finalizada</h6>`;
        container.innerHTML = html;
    } else {
        html = ``;
        container.innerHTML = html;
        cards.forEach(card => {
            html = `
            <div class="py-1">
                <div class="card " style="background-color: ${card.color}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>
        `;
            container.innerHTML += html;
        });
    }

});