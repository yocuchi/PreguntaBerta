# Notas de seguridad (auditoría)

## Correcciones aplicadas en código

- **VULN-01**: Bloqueo de `/.git` vía `.htaccess` (Apache) para que no sea accesible.
- **VULN-03**: XSS en Estadísticas: el nombre de usuario se inserta en el DOM con `.text()` / nodos de texto en lugar de HTML sin sanitizar.
- **VULN-04**: Cookie `usuarioActual` (y similares) con flag `Secure` y valor escapado con `encodeURIComponent`.  
  **Limitación**: `HttpOnly` no puede fijarse desde JavaScript; para usarlo hay que establecer la cookie desde el servidor (PHP, Node, etc.) con la cabecera `Set-Cookie`.
- **VULN-05**: Cabeceras de seguridad en `.htaccess`: `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security` (con `env=HTTPS`), `Content-Security-Policy` (cuando hay HTTPS).

## Acciones que dependen de configuración / política

- **VULN-02 — Repositorio público**: Hacer el repo privado en GitHub o revisar que no haya secrets/API keys en el historial (p. ej. con `git log -p`, herramientas como `trufflehog` o el escaneo de secretos de GitHub).
- **VULN-04 — HttpOnly**: Si la app tiene backend, configurar la cookie de sesión/nombre con `HttpOnly` (y `Secure` en HTTPS) en las cabeceras `Set-Cookie` del servidor.

## Entorno local (HTTP)

Con `Secure` en la cookie, en entornos solo HTTP (p. ej. `http://localhost`) el navegador puede no enviar la cookie. Para desarrollo local puede ser necesario servir la app por HTTPS o, solo en dev, no usar el flag `Secure` (no recomendado en producción).
