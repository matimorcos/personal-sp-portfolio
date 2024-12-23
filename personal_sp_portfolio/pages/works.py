import reflex as rx
from personal_sp_portfolio.components.layout.main import main
from personal_sp_portfolio.components.paragraph import paragraph
from personal_sp_portfolio.components.bio import bio_section, bio_year
from personal_sp_portfolio.components.project_tittle import project_tittle

def works() -> rx.Component:
    return main(
        rx.container(
            project_tittle(name="WORKS"),
            rx.heading(
                "Works",
                as_="h2",
                fontSize="2em",
                variant="section-title",
                text_decoration="underline",
                fontWeight="bold",
                pt="5",
                pb="2"
            ),
            paragraph(
                "Currently employed as a professor...",
                rx.link(
                    "Universidad Empresarial Siglo 21",
                    href="https://www.21.edu.ar//",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                ", responsible for seamlessly integrating and configuring HIS solutions within healthcare organizations like ",
                rx.link(
                    "...",
                    href="https://www.....com",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                ", ",
                rx.link(
                    "...",
                    href="https://www....com/",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                ", ",
                rx.link(
                    "...",
                    href="https://....com/",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                " and ",
                rx.link(
                    "...",
                    href="https://www.....com/",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                "."
            ),
            pt="1em",
            pb="1em"
        ),
        rx.container(
            rx.heading(
                "Bio",
                as_="h2",
                fontSize="2em",
                variant="section-title",
                text_decoration="underline",
                fontWeight="bold",
                pt="5",
                pb="2"
            ),
            bio_section(
                bio_year("2002"),
                "Born in Valencia, Spain."
            ),
            bio_section(
                bio_year("2020"),
                "Finished the baccalaureate of science."
            ),
            bio_section(
                bio_year("2022"),
                "Completed higher degree of administration of computer network systems in IES Abastos."
            ),
            bio_section(
                bio_year("2022 to present"),
                "Working in ",
                rx.link(
                    "Laberit",
                    href="https://www.laberit.com/",
                    passHref=True,
                    scroll="false",
                    fontWeight="bold",
                    is_external=True
                ),
                "."
            ),
            pt="1em",
            pb="1em"
        )
    )
