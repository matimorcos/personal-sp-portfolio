import reflex as rx
import personal_sp_portfolio.styles.styles as styles

def tittle(text: str) -> rx.Component:
    return rx.heading(
        text,
        size="3",
        style=styles.tittle_style
        )