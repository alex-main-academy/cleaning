// work with slider
var swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    lazyLoading: true,
});

// work with header
const headerButtons = document.querySelectorAll(".js-header-btn");
const officeList = document.querySelector(".js-office-list");
const homeList = document.querySelector(".js-home-list");

headerButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        headerButtons[0].classList.remove("active");
        headerButtons[1].classList.remove("active");

        event.target.classList.add("active");

        if (headerButtons[0].classList.contains("active")) {
            homeList.classList.remove("active");
            officeList.classList.add("active");
        } else {
            officeList.classList.remove("active");
            homeList.classList.add("active");
        }
    });
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 50;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
        // handleCloseMenu();
    });
});

// work with modal
const serviceItem = document.querySelectorAll(".service__item");
const modalOverlay = document.querySelector(".js-overlay");
const closeModalBtn = document.querySelector(".js-modal-close");

const handleOpenModal = (itemTitle, itemImage, itemList) => {
    const modalBlock = document.querySelector(".modal__block");
    const modalTitle = document.querySelector(".modal__title");
    const modalImage = document.querySelector(".modal__image");

    modalTitle.textContent = itemTitle;
    modalImage.setAttribute("src", itemImage);
    modalBlock.innerHTML = itemList;

    modalOverlay.classList.add("active");
    document.body.classList.add("is-modal");
};

const handleCloseModal = () => {
    const modalBlock = document.querySelector(".modal__block");
    modalBlock.innerHTML = "";
    modalOverlay.classList.remove("active");
    document.body.classList.remove("is-modal");
};

serviceItem.forEach((item) => {
    item.addEventListener("click", () => {
        const itemTitle = item.querySelector(".service__name").textContent;
        const itemImage = item
            .querySelector(".service__image")
            .getAttribute("src");
        const itemList = item.querySelector(".modal__list").innerHTML;

        handleOpenModal(itemTitle, itemImage, itemList);
    });
});

closeModalBtn.addEventListener("click", handleCloseModal);

modalOverlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay")) {
        handleCloseModal();
    } else {
        return;
    }
});

// work with form
const orderModal = document.querySelector(".js-order");
const openOrderBtn = document.querySelectorAll(".main__order_link");
const closeOrderBtn = document.querySelector(".js-order-close");

const handleOpenOrder = () => {
    handleCloseModal();
    orderModal.classList.add("active");
    document.body.classList.add("is-modal");
};

const handleCloseOrder = () => {
    orderModal.classList.remove("active");
    document.body.classList.remove("is-modal");
};

openOrderBtn.forEach((btn) => {
    if (btn.classList.contains("serv")) {
        return;
    } else {
        btn.addEventListener("click", () => {
            handleOpenOrder();
        });
    }
});

closeOrderBtn.addEventListener("click", handleCloseOrder);

orderModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("order")) {
        handleCloseOrder();
    } else {
        return;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        handleCloseModal();
        handleCloseOrder();
    }
});
