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

const quoteForm = document.querySelector(".quote-form");
const formStatus = document.querySelector(".form-status");

const formFields = {
    name: {
        input: quoteForm.elements.name,
        error: document.querySelector("#name-error"),
        validate(value) {
            if (value.trim().length < 3) {
                return "Introduce un nombre de al menos 3 caracteres.";
            }

            return "";
        },
    },
    email: {
        input: quoteForm.elements.email,
        error: document.querySelector("#email-error"),
        validate(value) {
            if (value.trim() === "") {
                return "Introduce tu email.";
            }

            if (!this.input.validity.valid) {
                return "Introduce un email válido.";
            }

            return "";
        },
    },
    renovationType: {
        input: quoteForm.elements.renovationType,
        error: document.querySelector("#renovation-type-error"),
        validate(value) {
            return value === "" ? "Selecciona un tipo de reforma." : "";
        },
    },
    message: {
        input: quoteForm.elements.message,
        error: document.querySelector("#message-error"),
        validate(value) {
            if (value.trim().length < 15) {
                return "Cuéntanos un poco más sobre la reforma.";
            }

            return "";
        },
    },
};

function validateField(field) {
    const message = field.validate(field.input.value);
    field.error.textContent = message;
    field.input.setAttribute("aria-invalid", String(message !== ""));

    return message === "";
}

Object.values(formFields).forEach((field) => {
    field.input.addEventListener("input", () => {
        validateField(field);
        formStatus.textContent = "";
        formStatus.classList.remove("is-error");
    });
});

quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = Object.values(formFields);
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
        const firstInvalidField = fields.find(
            (field) => field.input.getAttribute("aria-invalid") === "true",
        );

        formStatus.textContent = "Revisa los campos indicados.";
        formStatus.classList.add("is-error");
        firstInvalidField.input.focus();
        return;
    }

    formStatus.classList.remove("is-error");
    formStatus.textContent = "Solicitud simulada correctamente.";
});
