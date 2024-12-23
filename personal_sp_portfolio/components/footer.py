import reflex as rx
import datetime
from personal_sp_portfolio.components.contact import contact
from personal_sp_portfolio.components.resume import resume
from personal_sp_portfolio.components.form import contact_form

def info():
    return rx.flex(
        rx.hstack(
            resume(), 
            #contact(),
            #contact_form(),
            display="flex",
            alignItems="center",
            justifyContent="space-between",
            width="100%",
        ),
    )
        
def footer():
    return rx.box(
            rx.text(f"Developed by Matias Morcos. All rights reserved. © {datetime.datetime.now().year}"),
            align="center",
            justify="center",
            marginTop="60px",
            justifySelf="center",
            alignSelf="center",
            marginLeft="50%",
            height="auto",
            padding="1em",
            width="100%",
        )
    