param([string]$Root,[int]$Port)
Add-Type -AssemblyName System.Web
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $requestPath = [System.Web.HttpUtility]::UrlDecode($context.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($requestPath)) { $requestPath = 'index.html' }
    $fullPath = Join-Path $Root $requestPath
    if ((Test-Path $fullPath) -and (Get-Item $fullPath).PSIsContainer) {
      $fullPath = Join-Path $fullPath 'index.html'
    }
    if (-not (Test-Path $fullPath)) {
      $fullPath = Join-Path $Root 'index.html'
    }
    $bytes = [System.IO.File]::ReadAllBytes($fullPath)
    switch ([System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()) {
      '.html' { $context.Response.ContentType = 'text/html; charset=utf-8' }
      '.js'   { $context.Response.ContentType = 'application/javascript; charset=utf-8' }
      '.css'  { $context.Response.ContentType = 'text/css; charset=utf-8' }
      '.svg'  { $context.Response.ContentType = 'image/svg+xml' }
      '.png'  { $context.Response.ContentType = 'image/png' }
      '.jpg'  { $context.Response.ContentType = 'image/jpeg' }
      '.jpeg' { $context.Response.ContentType = 'image/jpeg' }
      '.webp' { $context.Response.ContentType = 'image/webp' }
      default { $context.Response.ContentType = 'application/octet-stream' }
    }
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.OutputStream.Close()
  } catch {
  }
}
