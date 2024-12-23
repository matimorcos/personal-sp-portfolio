"""THIS COMPONENT IS NOT BEING USER YET BUT BELONGS TO HEADER COMPONENT"""

import reflex as rx
import personal_sp_portfolio.styles.styles as styles

def link_button(tittle: str, body: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag="arrow_right",
                ),
                rx.vstack(
                    rx.text(tittle, style=styles.button_tittle_style),
                    rx.text(body, style=styles.button_body_style)
               )
            )
        ),
        href=url,
        is_external=True,
        width="100%"
    )