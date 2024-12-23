"""RUNS WITH STATES AND APIS"""

from typing import Callable
import reflex as rx
from .components.layout.main import main

def template(
    page: Callable[[], rx.Component]
) -> rx.Component:
    return rx.fragment(
        main()
    )
