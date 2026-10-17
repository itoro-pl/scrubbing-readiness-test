# ITORO — Test gotowości prefiksów do scrubbing center, z bgpq4 (listy prefiksów).
#   docker build -t itoro-scrubbing .
#   docker run --rm -p 127.0.0.1:8765:8765 itoro-scrubbing
# Potem: http://127.0.0.1:8765/
FROM python:3.12-slim-bookworm

RUN apt-get update \
 && apt-get install -y --no-install-recommends bgpq4 \
 && rm -rf /var/lib/apt/lists/* \
 && useradd --create-home --uid 10001 narzedzie

WORKDIR /app
COPY --chown=narzedzie:narzedzie . /app
USER narzedzie

EXPOSE 8765
CMD ["python", "serwer.py", "--host", "0.0.0.0", "--port", "8765", "--bez-przegladarki"]
