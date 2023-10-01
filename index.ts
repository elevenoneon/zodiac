const zodiac: HTMLSelectElement = document.getElementById("zodiac") as HTMLSelectElement;

const body: HTMLBodyElement = document.body as HTMLBodyElement;

const changeBackground = (): void => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303";
            break;

        case "taurus":
            body.style.backgroundColor = "#03fc6f";
            break;

        case "gemini":
            body.style.backgroundColor = "#fce514";
            break;
        case "cancer":
            body.style.backgroundColor = "#ffeceb";
            break;
        case "leo":
            body.style.backgroundColor = "#fcba03";
            break;
        case "virgo":
            body.style.backgroundColor = "#40231b";
            break;
        case "libra":
            body.style.backgroundColor = "#9fd9fc";
            break;
        case "scorpio":
            body.style.backgroundColor = "#1f1f1f";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#994ead";
            break;
        case "capricorn":
            body.style.backgroundColor = "#eb8d57";
            break;
        case "aquarius":
            body.style.backgroundColor = "#579eeb";
            break;
        case "pisces":
            body.style.backgroundColor = "#fc88d8";
            break;

        default:
            body.style.backgroundColor = "#fff";
            break;
    }
};
