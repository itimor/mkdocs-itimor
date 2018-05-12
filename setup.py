from setuptools import setup, find_packages

VERSION = '0.10.24'


setup(
    name="mkdocs-itimor",
    version=VERSION,
    url='https://github.com/itimor/mkdocs-itimor',
    license='MIT',
    description='sexy mkdocs theme',
    author='itimor',
    author_email='itimor@126.com',
    packages = find_packages(),
    include_package_data = True,
    entry_points = {
        'mkdocs.themes': [
            'itimor = itimor',
        ]
    },
    zip_safe=False
)