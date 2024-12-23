"""A simple index page for single page app, running without APIs or states."""
from __future__ import annotations
import reflex as rx
from personal_sp_portfolio.components.layout.main import main
from personal_sp_portfolio.state.state import typewrite
from personal_sp_portfolio.components.contact import contact
#from personal_sp_portfolio.state.github import Github

def index() -> rx.Component:
    """Index page"""
    return main(
        rx.box(
            backgroundImage="url('whitebg.jpg')",
            backgroundSize="cover",
            backgroundPosition="center",
            backgroundAttachment="fixed",
            width="100%",
            height="100%",
            position="absolute",
            top="0",
            left="0",
            z_index="-1",
        ),
            rx.container(
                rx.box(
                    rx.box(
                        rx.heading(
                            "Hey!, ",
                            rx.text(
                                "👋🏻",
                                id="wave",
                                role="img"
                            ),
                            "Welcome to my portfolio!",
                            as_="h1",
                            size="7",
                            variant="section-title",
                            margin_top="1",
                            color="dark",
                            font_family="sans-serif",
                            text_shadow="2px 2px 2px white",
                            margin_bottom="1",
                        ),
                        rx.box(
                            rx.heading(
                                "My name is Matias Morcos,",
                                rx.text(
                                    "and I am a Python web developer",
                                    color="dark",
                                ),
                                marginTop="10px",
                                marginBottom="10px",
                                as_="h1",
                                size="7",
                                variant="section-title",
                                pr="5",
                                color="dark",
                                text_shadow="2px 2px 2px white"
                            ),
                            
                        ),
                        rx.heading(
                            typewrite(
                                options={
                                    'strings': [
                                        '<span style="color:darkred;">Designing</span>',
                                        '<span style="color:darkblue;">Developing</span>',
                                        '<span style="color:darkgreen;">Implementing</span>',
                                    ],
                                    'autoStart': True,
                                    'loop': True,
                                    'deleteSpeed': 50
                                },
                            ),
                            rx.text(
                                "Software Solutions",
                                color="dark",
                            ),
                            as_="h1",
                            size="7",
                            variant="section-title",
                            color="dark",
                            text_shadow="4px 8px 10px white",
                            marginTop="10px",
                            marginBottom="10px",
                        ),
                        rx.box(
                            rx.heading(
                                typewrite(
                                options={
                                    'strings': [
                                        '<span style="color:darkred;">Using</span>',
                                        '<span style="color:darkblue;">Researching about</span>',
                                        '<span style="color:darkgreen;">Continuously learning</span>',
                                    ],
                                    'autoStart': True,
                                    'loop': True,
                                    'deleteSpeed': 50
                                }
                            ),
                                rx.text(
                                    "Python, Django, Flask, FastAPI as main stack! You can check my projects below.",
                                    color="dark",
                                ),
                                as_="h1",
                                size="7",
                                variant="section-title",
                                pr="5",
                                color="dark",
                                text_shadow="2px 2px 2px white",
                                marginTop="10px",
                                marginBottom="10px",
                            ),
                        ),
                        alignItems="flex-start",
                        display="flex",
                        flexDirection="column",
                        justify="flex-start",
                        width="60%",
                        marginLeft="75px",
                        marginBottom="27px",
                    ),

                    rx.box(
                        rx.image(
                            src="profile_photo.JPG",
                            alt="Profile Image",
                            border_radius="100%",
                            border="2px solid white",
                            width="225px",
                            height="220px",
                            #_hover={
                            #    "transform": "rotate(360deg)",
                            #    "transition": "transform 0.5s ease-in-out"
                            #},
                        ),
                        
                        display="flex",
                        justify="center",
                        align="center",
                        width="30%",
                        height="auto",
                    ),
                    
                    
                    
                    display="flex",
                    alignItems="center",
                    justifyContent="space-between",
                    width="100%",
                    margin_top="10px !important",
                    height="100vh",
                ),
                delay="0.1",
                pt="10",
            ),        
        )
    
