"""THIS COMPONENT IS NOT BEING USER YET BUT BELONGS TO HEADER COMPONENT"""

import reflex as rx
import personal_sp_portfolio.styles.styles as styles

def link_icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link"
            ),
        href=url,
        is_external=True
    )