module.exports = (m, {isSnippet}) => {
    return m("footer", [
        m("div.footer-keybindings",
            m(
                "a#newButton.submit",
                {href: "/"},
                [
                    "New Snippet", m("span.keyboard-shortcut", [": Ctrl + Alt + A"])
                ],
            ),
            "  ",
            m(
                "button#actionButton.submit",
                {
                    type: "submit",
                    formaction: isSnippet ? "fork" : "/",
                    formenctype: "application/x-www-form-urlencoded",
                    formmethod: "post",
                    form: "codeSnippet",
                },
                isSnippet
                    ? ["Fork", m("span.keyboard-shortcut", [": Ctrl + Alt + F"])]
                    : ["Save", m("span.keyboard-shortcut", [": Ctrl + S"])],
            ),
            " ",
        ),

        m("code.footer-text", [
            " Memochō  Built by",
            m(
                "a",
                {
                    href: "https://github.com/MKRhere",
                    target: "blank",
                    rel: "noopener"
                },
                "@MKRhere"
            ),
            ", Modified by",
            m(
                "a",
                {
                    href: "https://github.com/SitiSchu",
                    target: "blank",
                    rel: "noopener"
                },
                "@SitiSchu"
            ),
            "",
            m(
                "a",
                {
                    href: "https://github.com/mojurasu/memocho",
                    target: "blank",
                    rel: "noopener"
                },
                "Fork me!"
            ),
        ]),
    ]);
};
