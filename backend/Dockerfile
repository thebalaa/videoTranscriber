# Use the official Python image as the base image
FROM python:3.11

# Set environment variables
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
 && apt-get install -y ffmpeg
# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy the Django project into the container
COPY . /app/


# Expose the port the app runs on (optional, as it is already specified in docker-compose.yml)
EXPOSE 8000
RUN ls -l /app
# Start script that includes migrations
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]
