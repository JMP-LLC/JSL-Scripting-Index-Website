# Use a base image with Python installed
FROM python:3.13-alpine

# Set the working directory inside the container
WORKDIR /docs

# Copy your MkDocs project files into the container
# This assumes your mkdocs.yml and 'docs' directory are in the same directory as the Dockerfile
COPY mkdocs.yml .
COPY docs ./docs

# (Optional) If you use a specific theme like MkDocs Material or other plugins, install them
# For MkDocs Material:

# Install MkDocs
RUN pip install mkdocs

# Expose the port MkDocs serves on (default is 8000)
EXPOSE 8000

# Command to run when the container starts, serving the MkDocs site
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]