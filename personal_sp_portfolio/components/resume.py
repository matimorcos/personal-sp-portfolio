import reflex as rx
from personal_sp_portfolio.components.paragraph import paragraph

def resume():
    return rx.container(
        rx.box(
            rx.heading(
                "Click the button below to download my resume.",
                as_="h2",
                fontSize="2em",
                color="dark",
                #textColor="white",
                id="resume",
                variant="resume",
                textDecorationThickness="2.5px",
                fontWeight="bold",
                pb="2",
                marginTop="40px !important",
                marginBottom="10px",
            ),
        ),
        rx.button(
            "Download Resume PDF",
            on_click=rx.download(url="/resume_wd.pdf"),
            width="15em",
            color="white",
            alignItems="center",
            justifyContent="center",
            marginLeft="25%",
            background_color="rgba(100, 100, 100, 100)",
            ),
        id="resume",
        delay="0.1",
        alignItems="center",
        display="flex",
        flexDirection="column",
        justify="center",
        width="100%",
        height="auto",
        fontSize="17",
        marginLeft="10%",
        justifyContent="center",
        textColor="white",
    )