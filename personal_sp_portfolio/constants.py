from __future__ import annotations

import os
from dotenv import load_dotenv
from typing import List

load_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env"))

GITHUB_USERNAME: str = "matimorcos"

USERNAME: str = "matias-morcos"

NAME: str = "matias"

PROFILE_URL: str = "profile_photo.JPG"

GITHUB_URL: str = f"https://github.com/{GITHUB_USERNAME}"

LINKEDIN_URL: str = f"https://linkedin.com/in/{USERNAME}"

MAIL: str = "morcosfariasm@outlook.es"

GITHUB_API_URL: str = f"https://api.github.com/users/{GITHUB_USERNAME}/repos" # Change the username to your github username

GITHUB_API_TOKEN: str = os.environ.get("GITHUB_API_TOKEN")

REPOSITORIES: List[str] = ["ichiel-software-venture-ums", "", "", "", ""]