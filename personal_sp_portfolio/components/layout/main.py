"""MAIN LAYOUT IS ESSENTIAL FOR ALL PAGES, SP IN THIS CASE"""

import reflex as rx
from personal_sp_portfolio.components.navbar import navbar
from personal_sp_portfolio.components.about_me import about_me
from personal_sp_portfolio.components.projects import projects, first_project, second_project
from personal_sp_portfolio.components.resume import resume
from personal_sp_portfolio.components.contact import contact
from personal_sp_portfolio.components.footer import footer, info

def main(*args) -> rx.Component:
    return rx.box(
        navbar(),
        rx.container(
            *args,
            #about_me(),
            projects(),
            first_project(),
            #second_project(),
            info(),
            footer(),
            maxW="container.sm",
            pt="20"
        ),
        as_="main",
        pb="8"
    )