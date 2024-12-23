"""THIS FORMS ARE NOT BEING USED ON MAIN BUT MAYBE I WILL NEED IT IF 
CONTACT COMPONENTS DOESN'T WORK"""

import reflex as rx
from personal_sp_portfolio.styles.styles import Size

class FormState(rx.State):
    form_data: dict = {}

    @rx.event
    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data

def contact_form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Email",
                    name="email",
                ),
                rx.input(
                    placeholder="Message",
                    name="message",
                ),
                rx.vstack(
                    rx.checkbox("Checked", name="check"),
                    rx.switch("Switched", name="switch"),
                    rx.button("Submit", type="submit"),
                    rx.divider(),
                    rx.heading("Results"),
                    rx.text(FormState.form_data.to_string()),
                ),
            ),
            on_submit=FormState.handle_submit,
            reset_on_submit=True,
            align_items="end",
            position="absolute",
            margin_top="0px !important",
            delay="0.1",
            display="flex",
            flexDirection="column",
            justify="flex-start",
            width="10%",
            height="auto",
            marginRight="10%",
            marginBottom="27px",
            justifyContent="center",
        ),
    )