import reflex as rx
from personal_sp_portfolio.constants import MAIL

def contact() -> rx.Component:
    return rx.container(
        rx.box(
            rx.heading(
                "@Contact",
                as_="h2",
                fontSize="2em",
                id="contact",
                variant="contact",
                textDecorationThickness="2.5px",
                fontWeight="bold",
                pb="2",
                color="dark",
                marginTop="40px !important",
                marginBottom="10px",
            ),
            rx.hstack(
            rx.link(
                rx.image(src="github.svg", radius="full"),
                href="https://github.com/matimorcos",
                target="_blank",
                width="64px",
                height="48px",
            ),
            rx.link(
                rx.image(src="linkedin.png", radius="full"),
                href="https://www.linkedin.com/in/matias-morcos/",
                target="_blank",
                width="64px",
                height="48px",
            ),
            rx.link(
                rx.image(src="gmail.png", radius="full"),
                href="mailto:morcosfariasm@gmail.com",
                target="_blank",
                width="48px",
                height="48px",
            ),
            #rx.link(
            #    rx.avatar(src="/instagram.png", radius="full"),
            #    href="https://www.instagram.com/matimorcosf/",
            #    target="_blank",
            #    width="32px",
            #    height="32px",
            # ),
        ),
            marginTop="5%",
            align="center",
            justifyContent="space-between",
            pt="5",
            pb="5",
            pr="5",
            pl="5",
        ),
        display="flex",
        marginRight="10%",
        justify="center",
        align="center",
        alignContent="center",
        width="20%",
        height="auto",
        id="contact",
        variant="contact",
    )