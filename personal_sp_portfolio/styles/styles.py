import reflex as rx
from personal_sp_portfolio.styles.colors import Color, TextColor
from personal_sp_portfolio.styles.sizes import Size
    
BASE_STYLE = {
    "background_color": Color.BACKGROUND.value,
    "text_color": TextColor.BODY.value,
    "font_family": "Comfortaa",
    
    rx.button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "background_color": Color.BUTTON.value,
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value
    },
    
    rx.link: {
        "text_decoration": "none",
        "_hover": {}
    }
}

tittle_style = dict(
    width="100%",
    padding_top=Size.BIG.value,
    font_family = "Mistral, cursive",
)

button_tittle_style = dict(
    font_size=Size.BIG.value,
    font_family = "Mistral, cursive",
    text_align="center",
    margin_left=Size.DEFAULT.value,
    color=TextColor.TITTLE.value,
    background_color=Color.BUTTON.value,
)

button_body_style = dict(
    font_size=Size.MEDIUM.value,
    font_family = "Comfortaa",
    color = TextColor.BODY.value,
    background_color=Color.BUTTON.value,
)