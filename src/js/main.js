const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const selectedItem = question.closest(".faq-item");
        const isOpen = selectedItem.classList.contains("is-active");

        faqQuestions.forEach((item) => {
            item.closest(".faq-item").classList.remove("is-active");
            item.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            selectedItem.classList.add("is-active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});
