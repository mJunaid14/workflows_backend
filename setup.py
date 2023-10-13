from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in workflows_backend/__init__.py
from workflows_backend import __version__ as version

setup(
	name="workflows_backend",
	version=version,
	description="demo workflows",
	author="junaid",
	author_email="muhammad.junaid@freit.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
