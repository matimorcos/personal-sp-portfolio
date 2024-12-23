"""RUNS WITH STATES AND APIS"""

import reflex as rx
from typing import Dict, List
from personal_sp_portfolio.components.layout.main import main
from personal_sp_portfolio.components.project_tittle import project_tittle
from personal_sp_portfolio.components.paragraph import paragraph
#from personal_sp_portfolio.state.projects import Projects
#from personal_sp_portfolio.state.github import Github
#route_page_name: str = Projects.repo_name

def render_topics(topic: str) -> rx.Component:
    return rx.text(
        (topic).upper(),
        class_name="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600",
        mr="3"
    )
    
def project_body_title(title: str) -> rx.Component:
    return rx.text(
        title,
        font_size="25",
        font_weight="bold",
        pt="4"
    )

"""def render_projects(repository: Dict[str, List[str]]) -> rx.Component:
    return rx.box(
        rx.cond(
            route_page_name == repository["name"],
            rx.container(
                rx.box(
                    rx.heading(
                        route_page_name.upper(),
                        text_color="black",
                        as_="h1",
                        font_size="45",
                        variant="section-title"
                    ),
                    rx.text(
                        repository["description"]
                    ),
                    pb="3"
                ),
                rx.box(
                    rx.image(
                        src=f"/projects/{route_page_name.lower()}.png"
                    ),
                    pb="3"
                ),
                rx.box(
                    project_body_title("About"),
                    paragraph(
                        repository["about"]
                    ),
                    project_body_title("Tags"),
                    rx.foreach(
                        repository["topics"],
                        render_topics
                    ),
                    rx.cond(
                        repository["homepage"] != "",
                        project_body_title("Website"),
                        rx.link(
                            repository["homepage"],
                            href=f"{repository['homepage']}",
                            scroll="false",
                            is_external=True
                        )
                    ),
                    project_body_title("Github"),
                    rx.link(
                        repository['repo_url'],
                        href=f"{repository['repo_url']}",
                        scroll="false",
                        is_external=True
                    )
                )
            )
        )
    )

@rx.page(route="/projects/[repo_name]")
def repository_page():
    return main(
        project_tittle(name=route_page_name),
        rx.box(
            rx.foreach(
                #Github.get_repositories,
                render_projects
            )
        )
    )"""