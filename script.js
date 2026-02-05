(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Nie udało się pobrać informacji o wersji.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("Korzystasz z najnowszej wersji.");
        }
    } catch (error) {
        console.error("Błąd podczas sprawdzania aktualizacji:", error);
    }
})();

/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn(
            "%c⚠ Tryb wydajności włączony: niektóre funkcje mogą działać inaczej.",
            "color: orange; font-size: 14px;"
        );
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] =
                    [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Czekaj... co?";
                document.querySelector('.yes-button')?.textContent = "Hęę??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/

const messages = [
    "Na pewno?",
    "Na serio na pewno??",
    "Jesteś absolutnie pewna?",
    "No proszęee...",
    "Zastanów się jeszcze!",
    "Jeśli klikniesz nie, będzie mi bardzo smutno...",
    "Naprawdę będzie mi smutno...",
    "Będzie mi strasznie, strasznie, STRASZNIE smutno...",
    "Dobra, już przestaję pytać...",
    "Żartowałem — kliknij tak, proszę ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
