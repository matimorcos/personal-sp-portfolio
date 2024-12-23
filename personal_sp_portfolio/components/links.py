"""THIS COMPONENT IS NOT BEING USED YET BUT BELONGS TO HEADER COMPONENT"""

import reflex as rx
from personal_sp_portfolio.components.link_button import link_button
from personal_sp_portfolio.components.tittle import tittle

def links() -> rx.Component:
    return rx.vstack(
        tittle("Visita mis redes sociales"),
        link_button("Github", "Mi perfil de Github", "https://github.com/matimorcos"),
        link_button("Linkedin", "Mi perfil de Linkedin", "https://www.linkedin.com/in/matias-morcos/"),
        link_button("Instagram", "Mi perfil de Instagram", "https://www.instagram.com/matiasmorcos/"),
        width="100%"
    )