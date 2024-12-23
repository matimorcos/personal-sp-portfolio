"""NEED TO DEFINE PARAGRAPH BG COLOR AND SOME STYLES"""

import reflex as rx

def paragraph(*args) -> rx.Component:
    return rx.text(
        *args,
        text_align="justify",
        text_indent="1em",
        hyphens="auto",
        height="100vh",
        fontSize="1.2em",
        fontWeight="medium",
        color="white"
    )
    