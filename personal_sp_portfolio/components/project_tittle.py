"""NEED TO BE MODIFIED FOR EACH PROJECT VIEW AS SP PORTFOLIO. 
DEFINE AND CHANGE ICONS TAGS"""

import reflex as rx

def project_tittle(name: str) -> rx.Component:
    return rx.box(
        rx.link(
            "Home",
            href="/",
            textColor="black",
            font_size="14"
        ),
        rx.icon(
            tag="chevron_right"
        ),
        rx.heading(
            name,
            as_="h3",
            display="inline-block",
            fontSize="24",
            mb="4"
        ),
        pt="5"
    )