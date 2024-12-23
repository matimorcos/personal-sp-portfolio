"""THIS COMPONENT IS NOT BEING USED YET BUT RUNS WITH
LINKS, LINK_BUTTON AND LINK_ICON"""

import reflex as rx
from personal_sp_portfolio.components.link_icon import link_icon
from personal_sp_portfolio.styles.styles import Size
from personal_sp_portfolio.styles import styles

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                src="/favicon.ico", fallback="RX", size="3"
                ),
            rx.vstack(
                rx.heading(
                    "Matias Morcos",
                    size="3",
                    ),
                rx.text("Desarrollador Web",
                        margin_top="0px !important"
                    ),
                rx.hstack(
                    link_icon("https://github.com/matimorcos"),
                    link_icon("https://www.linkedin.com/in/matias-morcos/"),
                    link_icon("https://www.instagram.com/matiasmorcos/"),
                ),
                align_items="start",
            )
        ),
        rx.text("""Mi nombre es Matias Morcos, soy desarrollador web
                con experiencia y conocimiento principalmente en Python,
                con frameworks como Django, Flask y FastAPI, complementando
                su uso para el backend con herramientas para el frontend como
                HTML, CSS y JavaScript.""", text_align="justify"),
        spacing="3",
        align_items="start",
        width="100%",
        max_width=styles.MAX_WIDTH,
    )