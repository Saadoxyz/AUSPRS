
    document.addEventListener("DOMContentLoaded", function () {
        const editor = document.querySelector(".email-editor");

        // Format buttons
        document.querySelectorAll(".rich-toolbar button").forEach(btn => {
        btn.addEventListener("click", () => {
            const command = btn.dataset.cmd;
            if (command === "foreColor") {
                const color = prompt("Enter a color (name or hex):", "#000000");
                if (color) document.execCommand(command, false, color);
            } else {
                document.execCommand(command, false, null);
            }
        });
        });

        // Font select
        document.querySelector(".rich-toolbar select").addEventListener("change", (e) => {
        document.execCommand("fontName", false, e.target.value);
        });
    });