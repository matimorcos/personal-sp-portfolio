"""THIS COMPONENT AND OTHERS LIKE IT MUST BE OPTIMIZED USING STYLES FILES"""

import reflex as rx

def about_me() -> rx.Component:
    return rx.container(
        rx.box(
            rx.heading(
                "About me",
                as_="h2",
                fontSize="2em",
                color="dark",
                #textColor="white",
                id="about",
                variant="about",
                textDecorationThickness="2.5px",
                fontWeight="bold",
                pb="2",
                marginTop="40px !important",
                align="center",
            ),
            rx.html(
                """
                <p style="text-align: justify;">
                I am a web developer with experience in designing, developing, and implementing proven technological solutions for various sectors. My education and professional background have enabled me to lead teams and projects while designing and implementing customized systems that have achieved measurable and satisfying results.
                </p>
                <p style="text-align: justify;">
                I have developed technological solutions tailored to the needs of clients, ranging from small businesses to educational institutions and individuals. My key responsibilities include:
                </p>
                <ul style="text-align: justify;">
                    <li>Designed software architectures and databases that improved operational efficiency.</li>
                    <li>Backend and frontend development with a focus on quality and scalability.</li>
                    <li>Initiated management and optimization models that resolved complex operational issues.</li>
                    <li>Negotiated objectives and requirements with clients, ensuring the delivery of products that achieved their goals.</li>
                    <li>Supported the integration of technological tools for interdisciplinary teams, fostering effective collaboration.</li>
                </ul>
                <p style="text-align: justify;">
                In my professional experience, I have managed and led teams of legal and academic projects where I applied technological skills to resolve complex challenges and deliver solutions that improved key processes. I am driven by innovation and continuous learning, which inspires me to streamline processes and add value to every project I lead.
                </p>
                """
            ),
            mt="5",
            textColor="white"
        ),
        id="about",
        delay="0.1",
        mt="10",
        pt="20",
        fontSize="17",
        textColor="white"
    )