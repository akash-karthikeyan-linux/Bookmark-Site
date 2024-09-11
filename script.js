let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function createAndAppend(siteName, siteUrl) {
    let listEl = document.createElement("li");
    let containerEl = document.createElement("div");
    let h3El = document.createElement("h4");
    let anchorEl = document.createElement("a");
    listEl.id = "listEl";
    containerEl.id = "containerEl";
    containerEl.classList.add("dynamic-container");
    h3El.id = "h3El";
    anchorEl.id = "anchorEl";

    h3El.textContent = siteName;
    anchorEl.href = siteUrl;
    anchorEl.textContent = siteUrl;

    containerEl.appendChild(h3El);
    containerEl.appendChild(anchorEl);
    listEl.appendChild(containerEl);
    bookmarksList.appendChild(listEl);
}

function nameBlurFun(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
}

function nameChangeFun(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
}

function siteBlurFun(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
}

function siteChangeFun(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
}

function onSubmitBtn(event) {
    event.preventDefault();
    let siteName = siteNameInput.value;
    let siteUrl = siteUrlInput.value;

    if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }

    if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }

    if (siteName !== "" && siteUrl !== "") {
        createAndAppend(siteName, siteUrl);
    }
}

siteNameInput.addEventListener("blur", nameBlurFun);
siteUrlInput.addEventListener("blur", siteBlurFun);
siteNameInput.addEventListener("change", nameChangeFun);
siteUrlInput.addEventListener("change", siteChangeFun);
bookmarkForm.addEventListener("submit", onSubmitBtn);
submitBtn.addEventListener("submit", onSubmitBtn);