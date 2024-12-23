import reflex as rx
from personal_sp_portfolio.pages.index import index
from personal_sp_portfolio.pages import page404
from personal_sp_portfolio.styles import styles
#from personal_sp_portfolio.pages.projects import repository_page

app = rx.App(
    style={
        "background_color": styles.Color.BACKGROUND.value,
        "color": styles.TextColor.BODY.value,
    },
    )

app.add_page(index, route="/", title="Matias Morcos Portfolio")
app.add_custom_404_page(page404.index, title="Page Not Found")
