const contentWrapper = document.getElementById("content-wrapper");
const cardWrapperLeft = document.createElement("div");
const cardWrapperRight = document.createElement("div");

cardWrapperLeft.classList.add("card-mobile");
cardWrapperRight.classList.add("card-mobile");

contentWrapper.appendChild(cardWrapperLeft);
contentWrapper.appendChild(cardWrapperRight);

const crewObjects = [
    {
        photo: "photo1.png",
        name: "Bill Mahoney",
        role: "PRODUCT OWNER"
    },
    {
        photo: "photo2.png",
        name: "Saba Cabrea",
        role: "ART DIRECTOR"
    },
    {
        photo: "photo3.png",
        name: "Shae Le",
        role: "TECH LEAD"
    },
    {
        photo: "photo4.png",
        name: "Skylah Lu",
        role: "UX DESIGNER"
    },
    {
        photo: "photo5.png",
        name: "Griff Richards",
        role: "DEVELOPER"
    },
    {
        photo: "photo6.png",
        name: "Stan John",
        role: "DEVELOPER"
    }
];

function createCard(crewObj, options = {})
{
    const cardWrapper = document.createElement("div");
    const photo = document.createElement("img");
    const photoAndRoleWrapper = document.createElement("div");
    const name = document.createElement("h2");
    const role = document.createElement("p");

    photo.src = "./photos/" + crewObj.photo;
    name.textContent = crewObj.name;
    role.textContent = crewObj.role;

    photo.classList.add("card-photo");
    role.classList.add("card-role");
    photoAndRoleWrapper.classList.add("card-photo-and-role-wrapper");
    cardWrapper.classList.add("card");
    name.classList.add("card-name")


    if(options.index !== undefined)
    {
        if(options.index % 3 === 1) cardWrapper.classList.add("isOffset");
    }


    photoAndRoleWrapper.appendChild(photo);
    photoAndRoleWrapper.appendChild(role);
    cardWrapper.appendChild(photoAndRoleWrapper);
    cardWrapper.appendChild(name);

    const cardWrapperMobile = cardWrapper.cloneNode(true);

    if(options.index !== undefined)
    {
        if(options.index % 2 === 0){
            cardWrapperMobile.classList.remove("card");
            cardWrapperMobile.classList.remove("isOffset");
            cardWrapperMobile.classList.add("card-mobile");
            cardWrapperLeft.appendChild(cardWrapperMobile);
        }
        if(options.index % 2 === 1){
            cardWrapperMobile.classList.remove("card");
            cardWrapperMobile.classList.add("isOffset");
            cardWrapperMobile.classList.add("card-mobile");
            cardWrapperRight.appendChild(cardWrapperMobile);
        }
    }
    contentWrapper.append(cardWrapper);
}

function createCards(crewArr)
{
    for(let i = 0; i < crewArr.length; i++)
    {
        createCard(crewArr[i], {index: i});
    }
}

createCards(crewObjects);